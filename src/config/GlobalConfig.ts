export interface IGlobalConfig {
     namespace: string
     tempIsLogin: boolean,
     cloudRenderUrl: string,
     isSuperApiReady: boolean,
     isShowRiskLevel: boolean,
}
let config: IGlobalConfig = {
     cloudRenderUrl: "https://vizservice-paas.51aes.com",
     isSuperApiReady: false,
     tempIsLogin: true,
     namespace: "factory",
     isShowRiskLevel: false
}
export default config