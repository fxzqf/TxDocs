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
            url: "https://www.kdocs.cn/l/cagNbUYJX08f?R=%2FS%2F4"
        });
        console.log(this.jssdk.iframeReady);
        this.start();
    }
}
window.onload = () => {
    new app();
};
