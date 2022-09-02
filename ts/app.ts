///<reference path="../js/weboffice.d.ts"/>
"use strict";
class app {
  jssdk: IWps;
  constructor() {
    this.jssdk = WebOfficeSDK.config({
<<<<<<< HEAD
      url: "https://www.kdocs.cn/l/cagNbUYJX08f?R=%2FS%2F4",
      mount: document.getElementsByClassName("custom-mount")[0] as HTMLElement,
    });
    if (!this.jssdk.iframeReady)  this.jssdk.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps://www.kdocs.cn/l/coO0iEfp4s1c";
=======
      url: "https://www.kdocs.cn/l/cagNbUYJX08f",
      mount: document.getElementById("custom-mount") as HTMLElement,
    });
    if (!this.jssdk.iframeReady) this.jssdk.iframe.src = "https://account.wps.cn/?logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-share&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661953655502%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps%25253A%25252F%25252Fwww.kdocs.cn%25252Fcheck%25252Fphone%25252Fbind%25253Fcb%25253Dhttps://www.kdocs.cn/l/cagNbUYJX08f&qrcode=kdocs&signupbind=false";
>>>>>>> e33fabe268d8f175d34922bc8b73c6fdeb8a57c3
    this.start();
  }
  start = async () => {
    await this.jssdk.ready();
  }
}
window.onload = () => {
  new app();
}
