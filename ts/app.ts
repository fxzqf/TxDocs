///<reference path="./weboffice.d.ts"/>
const Config: IConfig = {
  url: "https://www.kdocs.cn/office/d/185296924351",
  mount: document.getElementById("#custom-mount") as HTMLElement,
  onHyperLinkOpen: (linkData) => { console.log("Link:" + linkData.linkUrl); },
  onToast: (toastData) => { console.log("Toast:" + toastData.action); },
  commonOptions: {
    isShowTopArea: true, // 隐藏顶部区域（头部和工具栏）
    isShowHeader: false, // 隐藏头部区域
    isIframeViewFullscreen: false,
    isParentFullscreen: false,
    isBrowserViewFullscreen: false
  }
};
var Application: DBApplication;
var wps:any;
window.onload = async () => {
  wps= WPS.config(Config);
  //wps.ApiEvent.AddApiEventListener("fileOpen", (data) => { console.log("fileOpen: ", data); });
  wps.ApiEvent.AddApiEventListener("error", (data:any) => { 
    if(data.reason=="userNotLogin")
    wps.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253D"+Config.url; 
    //console.log("error: ", data.reason); 
});
  wps.ready().then((e:DBApplication)=>{
    Application=e;
    Application.Sheet.GetSheets().then((r:any)=>{console.log(r)})
  });
  
  function SelectionChange(data: any) {
    console.log("SelectChange");
  }

}





/*

  this.wps.iframe.onload1 = () => {
  if (!this.wps.iframeReady) this.wps.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps%3A%2F%2Ffxzqf.github.io%2Fkdocs%2F";
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