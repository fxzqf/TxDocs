///<reference path="../js/weboffice.d.ts"/>
class App {

  private Config: IConfig = {};
  public Application: any;
  private wps: IWps;
  constructor() {

    this.Config.url = "https://kdocs.cn/l/cpAKayUmlic2";
    this.Config.mount = document.getElementsByClassName("custom-mount")[0] as HTMLElement;
    this.Config.commonOptions = {
      isShowTopArea: true, // 隐藏顶部区域（头部和工具栏）
      isShowHeader: false, // 隐藏头部区域
      isIframeViewFullscreen: false,
      isParentFullscreen: false,
      isBrowserViewFullscreen: false
    }
    this.Config.onHyperLinkOpen = (linkData) => {
      this.Config.url = linkData.linkUrl;
      this.wps = WebOfficeSDK.config(this.Config);
      this.wps.ready().then((e: EtApplication) => {
        this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", ()=>{console.log("SheetActive")});
        this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange", ()=>{console.log("Sheetchnn")});
        return e.ActiveWorkbook.GetOperatorsInfo();
      })
      console.log("Link:" + linkData.linkUrl);
    }
    this.Config.onToast = (toastData) => { console.log("Toast:" + toastData.action); }
    this.wps=WebOfficeSDK.config(this.Config);

    this.wps = WebOfficeSDK.config(this.Config);
    //this.wps.iframe.onload = () => { alert(this.wps.iframe.src); }
    //this.wps.iframe.onclick = () => { alert(this.wps.iframe.src); }
    this.wps.ApiEvent.AddApiEventListener("fileOpen", (data) => { console.log("fileOpen: ", data); });
    this.wps.ApiEvent.AddApiEventListener("error", (data) => { console.log("error: ", data); });
    this.wps.ready().then((e: EtApplication) => {
      this.Application = e;
      //alert(this);
      //this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", this.SheetActive);
      //this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange", this.SelectChange);
      return e.ActiveWorkbook.GetOperatorsInfo();
    }).then((e) => {
      console.log(e.response);
    }).catch((e) => {
      //alert(this);
    });
  }
}


window.onload = () => {
  const app=new App();

}


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

  SheetActive(data: any) {
    console.log("SelectChange");
  }
  SelectChange(data: any) {
    let promise = new Promise(
      function (resolve, reject) {
        resolve(1);
        console.log("Promise create");
      });
    promise.then((e => { console.log(e); }))
    console.log(this.Application);
  }
}







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
}*/