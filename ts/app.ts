///<reference path="../js/weboffice.d.ts"/>
"use strict";
class App {
    private Config: IConfig;
    public Application:any;
  wps: IWps;
  constructor() {
    this.Config = {
      url: "https://www.kdocs.cn/l/csyLMG9IAaJU",
      mount: document.getElementsByClassName("custom-mount")[0] as HTMLElement,
      //onToast(toastData) { alert(toastData.action); },
      commonOptions: {
        isShowTopArea: true, // 隐藏顶部区域（头部和工具栏）
        isShowHeader: true, // 隐藏头部区域
        isIframeViewFullscreen: false,
        isParentFullscreen: false,
        isBrowserViewFullscreen: false
      }
    };
    this.wps = WebOfficeSDK.config(this.Config);
    this.wps.ApiEvent.AddApiEventListener("fileOpen", (data) => {console.log("fileOpen: ", data);});
    this.wps.ready().then((e)=>{
        this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", this.SheetActive);
        this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange",this.SelectChange);   
        return e.ActiveSheet.Name;
    }).then((e)=>{
      console.log(e);
    });
    


    
    

  }
  

  SheetActive(data:any){
    console.log("SelectActive");
  }
  SelectChange(data:any){
    console.log("SelectChange");
  }
  


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
*/



  //if (!this.jssdk.iframeReady) this.jssdk.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps://www.kdocs.cn/l/coO0iEfp4s1c";

  //get Application(): any {
  //  return (async () => {return await this.jssdk.Application;})()
  //}





