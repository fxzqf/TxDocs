"use strict";
///<reference path="weboffice.d.ts"/>
class app {
  jssdk: IWps;
  constructor() {
    this.jssdk = WebOfficeSDK.config({
      url: "https://www.kdocs.cn/l/cagNbUYJX08f?R=%2FS%2F4",
      mount: document.getElementById("custom-mount"),
    });
    console.log(this.jssdk.iframeReady);
    
    this.start();
    if (!this.jssdk.iframeReady)
      this.jssdk.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps://www.kdocs.cn/l/coO0iEfp4s1c";
  }
  start = async () => {
    await this.jssdk.ready();
  }
}
window.onload = () => {
  new app();

}
