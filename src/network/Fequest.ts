import assert from "assert"

export interface CommonResult {
    success: boolean,
    message?: string
}
export interface Rej<T = never> {
    reason: string,
    obj?: T
}
export function isRej<T>(err: any): err is Rej<T> {
    return err.reason !== undefined
}
export interface Config {
    baseURL: string,
    mode?: RequestMode,
    credentials?: RequestCredentials,
    timeout?: number
}
export interface RequestConfig {
    body?: Blob | FormData | URLSearchParams | Object,
    method: "post" | "get",
    header?: Record<string, string> | Headers,
    param?: Record<string, string>,
}
export interface FetchParams {
    targetURL: URL,
    fetchParams: RequestInit
}
export type RequestInterceptor = (params: FetchParams) => FetchParams | Rej

// type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T1>() => T1 extends B ? 1 : 2) ? true : false

export class Fequest {
    private requestInterceptors: RequestInterceptor[] = []
    constructor(private config: Config) {
        if (config.baseURL.endsWith('/')) {
            this.config.baseURL = config.baseURL.substring(0, config.baseURL.length - 1)
        }
        if (config.timeout === undefined) {
            this.config.timeout = 1000 * 10
        }
    }
    private TIMEOUT = Symbol("request time out")
    public create() {
        return this.instance.bind(this);
    }

    public use(req: RequestInterceptor) {
        this.requestInterceptors.push(req)
        return this
    }

    public async instance<T>(url: string, reqCfg: RequestConfig) {


        let targetURL
        if (url.startsWith("http")) {
            targetURL = new URL(url)
        } else {
            if (!url.startsWith("/")) {
                url = '/' + url
            }
            targetURL = new URL(this.config.baseURL.concat(url))
        }

        for (const key in reqCfg.param) {
            targetURL.searchParams.set(key, reqCfg.param[key])
        }
        //判断后自动 JSON string
        //Blob | BufferSource | FormData | URLSearchParams
        if (reqCfg.body
            && !(reqCfg.body instanceof Blob)
            && !(reqCfg.body instanceof FormData)
            && !(reqCfg.body instanceof URLSearchParams)
        ) {
            reqCfg.body = JSON.stringify(reqCfg.body)
            reqCfg.header = { ...reqCfg.header, "Content-Type": "application/json" }
        }

        const controller = new AbortController()
        const { signal } = controller

        //发请求前走一走拦截器
        let fetchParams: FetchParams | Rej = {
            targetURL,
            fetchParams: {
                mode: this.config.mode,
                credentials: this.config.credentials,
                body: reqCfg.body,
                headers: reqCfg.header,
                method: reqCfg.method,
                signal: signal
            }
        } as FetchParams

        for (let index = 0; index < this.requestInterceptors.length; index++) {
            const interceptor = this.requestInterceptors[index];
            if (isRej(fetchParams)) {
                //rej
                return Promise.reject(fetchParams)
            } else {
                fetchParams = interceptor(fetchParams)
            }
        }

        // this.requestInterceptors.forEach(interceptor => {
        //     if (isRej(fetchParams)) {
        //         //rej
        //         break;
        //     }else{
        //         fetchParams = interceptor(fetchParams)
        //     }
        // })
        if (isRej(fetchParams)) return Promise.reject(fetchParams);
        let fe = fetch(fetchParams.targetURL.toString(), fetchParams.fetchParams)

        let timerHandler: any = undefined
        let timer = new Promise<never>((_, rej) => {
            timerHandler = setTimeout(() => {
                controller.abort()
                rej(this.TIMEOUT)
            }, this.config.timeout);
        })


        try {
            let res = await Promise.race([timer, fe]);
            clearTimeout(timerHandler)
            if (!res.ok) {
                return Promise.reject({ reason: `none 200 respond, code is ${res.status}`, obj: res } as Rej<Response>)
            }
            let out = (await res.json() as T)

            // console.log("##########",out);
            

            // if (out.code !== 2000) {
            //     return Promise.reject({ reason: `${out.msg}`, obj: out } as Rej<CommonResult>)
            // }
            return Promise.resolve(out)

        } catch (error) {
            if (error === this.TIMEOUT) {
                return Promise.reject({ reason: "Fequest time out" } as Rej)
            } else {
                console.error(error)
                return Promise.reject({ reason: "Fequest config error" + error} as Rej)
            }
        }
    }
}
