///<reference path="../js/weboffice.d.ts"/>
"use strict";
class app {
  jssdk: IWps;
  constructor() {
    this.jssdk = WebOfficeSDK.config({
      url: "https://www.kdocs.cn/l/cagNbUYJX08f?R=%2FS%2F4",
      mount: document.getElementsByClassName("custom-mount")[0] as HTMLElement,
    });
    if (!this.jssdk.iframeReady) this.jssdk.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps://www.kdocs.cn/l/coO0iEfp4s1c";
    this.start();
  }
  start = async () => {
    await this.jssdk.ready();
    const app1 = this.jssdk.Application;

    // 接收全局广播
    app1.Sub.OnBroadcast = async (e: any) => {
      console.log('接收全局广播', e);
    };


    // 公共处理对象
    const Public = await app1.Public;

    // 发送全局广播
    const result = await Public.SendBroadcast({
      Data: { message: '测试' }
    });

    //const range = await this.jssdk.Application.Range('A1')

    // 设置公式：A1 = A2 + A3
    //range.Formula = '=A2+A3'

  }
}
window.onload = () => {
  new app();

}
