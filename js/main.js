///<reference path = "weboffice.d.ts" />
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
import WebOfficeSDK from "./weboffice";
class app {
    constructor() {
        this.jssdk = WebOfficeSDK.config({});
        this.jssdk.url = "https://www.kdocs.cn/l/coO0iEfp4s1c";
        this.jssdk.ApiEvent.AddApiEventListener("error", (data) => {
            console.log("error: ", data);
        });
        this.jssdk.ApiEvent.AddApiEventListener('fileOpen', (data) => {
            console.log('打开成功');
        });
        this.start();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.jssdk.ready();
        });
    }
}
