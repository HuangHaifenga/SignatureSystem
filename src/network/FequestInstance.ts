import { Fequest, Rej } from "./Fequest";



export default new Fequest({
    baseURL: import.meta.env.VITE_API_URL,
    credentials: "omit",
    timeout: 3000,
    mode: "cors"
}).use((fetchParams) => {
    // if (import.meta.env.DEV) {
    //     fetchParams.fetchParams.headers = { ...fetchParams.fetchParams.headers, "user-token": import.meta.env.VITE_DEV_HEADER_USER_TOKEN?.toString() ?? "bad value" }
    //     fetchParams.fetchParams.credentials = "omit"
    // }
    return fetchParams
}).create()