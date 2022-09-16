///<reference path="../js/weboffice.d.ts"/>
"use strict";
class App {
    constructor() {
        let that = this;
        this.Config = {
            url: "https://www.kdocs.cn/l/coCE5X5NQSzP?R=%2FS%2F4",
            mount: document.getElementsByClassName("custom-mount")[0],
            onHyperLinkOpen(linkData) {
                that.wps.iframe.src = "https://www.kdocs.cn/" + linkData.linkUrl;
                console.log(linkData.linkUrl);
            },
            //onToast(toastData) { alert(toastData.action); },
            commonOptions: {
                isShowTopArea: true,
                isShowHeader: false,
                isIframeViewFullscreen: false,
                isParentFullscreen: false,
                isBrowserViewFullscreen: false
            }
        };
        this.wps = WebOfficeSDK.config(this.Config);
        this.wps.ApiEvent.AddApiEventListener("fileOpen", (data) => { console.log("fileOpen: ", data); });
        this.wps.ready().then((e) => {
            this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", this.SheetActive);
            this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange", this.SelectChange);
            return e.ActiveWorkbook.GetOperatorsInfo();
        }).then((e) => {
            console.log(e);
        });
    }
    SheetActive(data) {
        this.wps.Application.;
    }
    SelectChange(data) {
        console.log("SelectChange");
    }
}
