"use strict";
///<reference path="../js/weboffice.d.ts"/>
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
window.onload = () => {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            alert("hello world");
        }, 2000);
    });
    alert("One");
    //promise.then(); 
    //let app = new App()
};
/*
this.jssdk = WebOfficeSDK.config({
  url: "https://www.kdocs.cn/l/cagNbUYJX08f?R=%2FS%2F4",
  
  mount: document.getElementsByClassName("custom-mount")[0] as HTMLElement,
  onHyperLinkOpen: async (obj: { linkUrl: string }) => {
    console.log(obj.linkUrl);
    const app1 = this.jssdk.Application;
  },
  onToast: ({ msg, action }) => { alert(action) },
});
(async () => { await this.jssdk.ready(); })();
this.Application = this.jssdk.Application;
alert(this.Application);




if (!this.jssdk.iframeReady) this.jssdk.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps://www.kdocs.cn/l/coO0iEfp4s1c";

get Application(): any {
  return (async () => {return await this.jssdk.Application;})()
}
*/ 
