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
///<reference path="weboffice.d.ts"/>
class app {
    constructor() {
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            yield this.jssdk.ready();
        });
        this.jssdk = WebOfficeSDK.config({
            url: "https://www.kdocs.cn/l/cagNbUYJX08f?R=%2FS%2F4",
            mount: document.getElementById("custom-mount"),
        });
        console.log(this.jssdk.iframeReady);
        this.start();
        if (!this.jssdk.iframeReady)
            this.jssdk.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps://www.kdocs.cn/l/coO0iEfp4s1c";
    }
}
window.onload = () => {
    new app();
};
