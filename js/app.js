"use strict";
///<reference path="../js/weboffice.d.ts"/>
function abc() {
}
class App {
    constructor() {
        this.Config = {};
        this.Config.url = "https://pub.kdocs.cn/t/tdBowy4sSm1yRsJ";
        this.Config.mount = document.getElementsByClassName("custom-mount")[0];
        this.Config.commonOptions = {
            isShowTopArea: true,
            isShowHeader: false,
            isIframeViewFullscreen: false,
            isParentFullscreen: false,
            isBrowserViewFullscreen: false
        };
        this.Config.onHyperLinkOpen = (linkData) => {
            this.Config.url = linkData.linkUrl;
            this.wps = WebOfficeSDK.config(this.Config);
            this.wps.ready().then((e) => {
                this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", () => { console.log("SheetActive"); });
                this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange", () => { console.log("Sheetchnn"); });
                return e.ActiveWorkbook.GetOperatorsInfo();
            });
            console.log("Link:" + linkData.linkUrl);
        };
        this.Config.onToast = (toastData) => { console.log("Toast:" + toastData.action); };
        this.wps = WebOfficeSDK.config(this.Config);
        //this.wps.ApiEvent.AddApiEventListener("error:", (data) => { console.log("error: ", data); });
        /*this.wps.iframe.onload1 = () => {
          this.Config.url = this.wps.iframe.src;
         
          console.log("Onload");
          this.wps.ready().then((e: EtApplication) => {
            this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", this.SheetActive);
            this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange", this.SelectChange);
            return e.ActiveWorkbook.GetOperatorsInfo();
          }).then((e) => {
            console.log(e.response);
          }).catch((e) => {
    
          });*/
    }
}
window.onload = () => {
    let result = window.location.search.substring(1).match(/\&*code=([^&]*)/);
    const appID = "AK20220806RAKOHP";
    const appKey = "opgsyipxflxziyyyvoqsafazqymfqyzu";
    if (result == null) {
        const scope = "user_basic,access_personal_files,edit_personal_files";
        const redirect_uri = "https://fxzqf.github.io/kdocs/";
        window.location.href = "https://developer.kdocs.cn/h5/auth?app_id=" + appID + "&scope=" + scope + "&redirect_uri=" + redirect_uri + "&state=state";
    }
    else {
        /*console.log(result)*/
        const data = null;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });
        console.log("https://developer.kdocs.cn/api/v1/oauth2/access_token?code=" + result[1] + "&app_id=" + appID + "&app_key=" + appKey);
        xhr.open("GET", "https://developer.kdocs.cn/api/v1/oauth2/access_token?code=" + result[1] + "&app_id=" + appID + "&app_key=" + appKey);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Access-Control-Allow-Origin-Credentials", "true");
        xhr.setRequestHeader("Access-Control-Allow-Origin-methods", "*");
        xhr.send(data);
    }
    //let app = new App()
};
/*

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("hghg");
    }, 2000);
  });
  promise.then((e)=>{alert(e)});

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
