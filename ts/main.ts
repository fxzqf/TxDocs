///<reference path = "weboffice.d.ts" />
"use strict";
import WebOfficeSDK, { IConfig, IWps } from "./weboffice";
class app{
    jssdk:IWps=WebOfficeSDK.config({});
     constructor(){
        this.jssdk.url="https://www.kdocs.cn/l/coO0iEfp4s1c";
        this.jssdk.ApiEvent.AddApiEventListener("error", (data) => {
            console.log("error: ", data);
        });
        this.jssdk.ApiEvent.AddApiEventListener('fileOpen', (data) => {
            console.log('打开成功')
        });
        this.start();
   }
   async start()
   {
        await this.jssdk.ready();

   }
}
