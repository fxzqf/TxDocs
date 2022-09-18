///<reference path="../js/weboffice.d.ts"/>
"use strict";
class App {
    constructor() {
        this.Config = {};
        this.Config.url = "https://pub.kdocs.cn/t/tdBZKjV3I4IJCNO";
        this.Config.mount = document.getElementsByClassName("custom-mount")[0];
        this.Config.commonOptions = {
            isShowTopArea: true,
            isShowHeader: false,
            isIframeViewFullscreen: false,
            isParentFullscreen: false,
            isBrowserViewFullscreen: false
        };
        this.Config.onHyperLinkOpen = (linkData) => {
            this.wps.iframe.src = linkData.linkUrl;
            console.log(linkData.linkUrl);
        };
        this.Config.onToast = (toastData) => { console.log(toastData.action); };
        this.wps = WebOfficeSDK.config(this.Config);
        this.wps.iframe.onload = () => { alert(this.wps.iframe.src); };
        this.wps.iframe.onclick = () => { alert(this.wps.iframe.src); };
        this.wps.ApiEvent.AddApiEventListener("fileOpen", (data) => { console.log("fileOpen: ", data); });
        this.wps.ApiEvent.AddApiEventListener("error", (data) => { console.log("error: ", data); });
        this.wps.ready().then((e) => {
            this.Application = e;
            alert(this);
            this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", this.SheetActive);
            this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange", this.SelectChange);
            return e.ActiveWorkbook.GetOperatorsInfo();
        }).then((e) => {
            console.log(e.response);
        }).catch((e) => {
            alert(this);
        });
    }
    SheetActive(data) {
        console.log("SelectChange");
    }
    SelectChange(data) {
        let promise = new Promise(function (resolve, reject) {
            resolve(1);
            console.log("Promise create");
        });
        promise.then((e => { console.log(e); }));
        console.log(this.Application);
    }
}
