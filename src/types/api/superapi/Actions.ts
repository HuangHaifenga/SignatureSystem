export enum SuperApiAction {

    StartRenderCloud = "StartRenderCloud",
    StopRenderCloud = "StopRenderCloud",
    RegisterCloudResponse = "RegisterCloudResponse",
    //POI
    AddPOI = "AddPOI",
    AddCustomPOI = "AddCustomPOI",

    //Camera
    SetCameraSpace = "SetCameraSpace",
    SetCameraInfo = "SetCameraInfo",
    SetCameraRoamingProState = "SetCameraRoamingProState",
    SetCameraRoamingPro = "SetCameraRoamingPro",
    ResetCameraSpace = "ResetCameraSpace",


    //custom
    BackToNormal = "BackToNormal",


    //Cover
    RemoveAllCovering = "RemoveAllCovering",
    FocusAllCovering = "FocusAllCovering",
    FocusCovering="FocusCovering",

    //Building
    SplitBuild = "SplitBuild",


    //Color
    ColorAdjustment = "ColorAdjustment",

    //Range
    AddRange = "AddRange",


    //Env
    SetEnvTime = "SetEnvTime",
    SetEnvWeather = "SetEnvWeather",


    //Path
    AddPath = "AddPath",


    //RenderQuality
    SetRenderQuality = "SetRenderQuality",


    //Resolution
    SetResolution = "SetResolution",

    // SimClickCovering
    SimClickCovering = 'SimClickCovering'

}