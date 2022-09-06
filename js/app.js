///<reference path="../js/weboffice.d.ts"/>
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class App {
    constructor() {
        this.Start = () => __awaiter(this, void 0, void 0, function* () {
            yield this.jssdk.ready();
            this.application = this.jssdk.Application;
            const operatorsInfo = yield this.application.ActiveWorkbook.GetOperatorsInfo();
            console.log(operatorsInfo);
        });
        this.Config = {
            url: "https://kdocs.cn/l/cgPO0CnUJPTR",
            mount: document.getElementsByClassName("custom-mount")[0],
            onToast(toastData) { alert(toastData.action); },
            commonOptions: {
                isShowTopArea: false,
                isShowHeader: true,
                isIframeViewFullscreen: false,
                isParentFullscreen: false,
                isBrowserViewFullscreen: false
            },
            otlOptions: { loadOptions: "https://www.baidu.com" }
        };
        this.jssdk = WebOfficeSDK.config(this.Config);
        this.Start();
        // alert(this.Application);
    }
    get Application() {
        return this.application;
    }
}
window.onload = () => {
    new App();
};
