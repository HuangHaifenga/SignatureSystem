import GConfig from "../../config/GlobalConfig";
import { SuperApiAction } from "../../types/api/superapi/Actions";
import { IPOI, ICameraInfo } from "superapi/types";
import { inject } from "vue";
import Render from "superapi";
import { promiseTimeout } from "@vueuse/core";
export function useSuperApi(customRender?: Render) {
     type JsonData = any
     let render = inject<Render>("SUPERAPI")
     if (!!customRender) {
          render = customRender
     }

     return function (actionName: SuperApiAction, jsonData?: JsonData): Promise<any> {


          if (!GConfig.isSuperApiReady) {
               console.log("super api not ready");
               return Promise.reject("super api not ready")
          }
          if (!render) {
               console.log("super api not inited");
               return Promise.reject("super api not inited")
          }

          if (actionName === SuperApiAction.BackToNormal) {
               //初始化清除全部场景元素
               let removeaAllCover = new Promise(resolve => {
                    let removeAllCoverJson = {
                         "covering_type": "all"
                    }

                    render?.SuperAPI(SuperApiAction.RemoveAllCovering as any, removeAllCoverJson as any, (data) => {
                         resolve(data)
                    })
               })


               //停止所有的漫游
               let stopRoam = new Promise(resolve => {
                    let stopRoamJson = {
                         "state": "stop"
                    }

                    render?.SuperAPI(SuperApiAction.SetCameraRoamingProState as any, stopRoamJson as any, (data) => {
                         resolve(data)
                    })
               })


               //画面亮起来
               let bright = new Promise(res => {
                    let brightJson = {
                         "hue": 0, //色相(-180, 180, 默认: 0)
                         "saturation": 0, //饱和度(-100, 100, 默认: 0)
                         "brightness": 0, //亮度(-100, 100, 默认: 0)
                         "contrast": 0, //对比度(-100, 100, 默认: 0)
                         "color_balance": "ffffff" //色彩平衡(HEX颜色, 默认: ffffff)
                    }

                    render?.SuperAPI(SuperApiAction.ColorAdjustment as any, brightJson as any, (data) => {
                         res(data)
                    })
               })

               //恢复拆楼
               let splitBuild = new Promise(async res => {
                    await promiseTimeout(150)
                    let splitJson = {
                         "build_id": "boyang", //建筑物id (项目中约定)
                         "floor": 4, //要拆解的楼层(1楼为1,地下一楼为-1)
                         "animation_type": 1 //动画类型 (1:伸缩杆动画)
                    }

                    render?.SuperAPI(SuperApiAction.SplitBuild as any, splitJson as any, (data) => {
                         res(data)
                    })
               })


               //设置相机视界限制
               // 120.51152,31.400782
               // 120.520454,31.394787
               let cameraSpace = new Promise(async res => {
                    await promiseTimeout(1000)
                    let cameraSpaceData = {
                         "coord_type": 0, //坐标类型(0:经纬度坐标, 1:cad坐标)
                         "cad_mapkey": "", //CAD基准点Key值, 项目中约定
                         "coord_z": 5, //坐标高度(单位:米)
                         "coord_z_type": 1, //坐标高度类型(0:相对3D世界表面; 1:相对3D世界地面; 2:相对3D世界海拔; 注:cad坐标无效)
                         "arm_distance_limit": "10,10000", //镜头距离范围
                         "pitch_limit": "5,88", //镜头俯仰角(5 ~ 89)
                         "yaw_limit": "0,350", //镜头偏航角(0正北, 0 ~ 359)
                         "points": [
                              {
                                   "coord": "120.51152,31.400782"
                              },
                              {
                                   "coord": "120.520454,31.394787"
                              }
                         ]
                    }

                    render?.SuperAPI(SuperApiAction.SplitBuild as any, cameraSpaceData as any, (data) => {

                         res(data)
                    })
               })

               return Promise.all([removeaAllCover, stopRoam, bright, splitBuild, cameraSpace])
          }

          if (!jsonData) {

               return new Promise((res) => {
                    render!.SuperAPI(actionName as any, (data) => {
                         res(data)
                    })
               })
          } else {

               return new Promise((res) => {
                    render!.SuperAPI(actionName as any, jsonData, (data) => {
                         res(data)
                    })
               })
          }
     }

}