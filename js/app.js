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
            url: "https://www.kdocs.cn/l/cagNbUYJX08f",
            mount: document.getElementById("custom-mount"),
        });
        console.log(this.jssdk.iframeReady);
        if (!this.jssdk.iframeReady)
            this.jssdk.iframe.src = "https://account.wps.cn/?logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-share&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661953655502%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps%25253A%25252F%25252Fwww.kdocs.cn%25252Fcheck%25252Fphone%25252Fbind%25253Fcb%25253Dhttps://www.kdocs.cn/l/cagNbUYJX08f&qrcode=kdocs&signupbind=false";
        this.start();
    }
}
window.onload = () => {
    new app();
};
