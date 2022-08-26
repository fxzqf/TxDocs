"use strict";
/// <reference path="index.d.ts" />
/**
 * wps命名空间
 */

declare namespace wps {
    export let RibbonUI: Kso.KsoRibbonUI;
    export let Enum: any;
    export let Application: Et.EtApplication;
    /**
     * 当前工作簿的操作窗格
     */
    //export let ActiveTaskPane: wps.CustomTaskpane | null;
}
/**
 * 打开的所有操作窗格
 */
let taskPanes: Array<{ wb: Et.EtWorkbook, tp: wps.CustomTaskpane }> = new Array();

/**
 * 
 * @param ribbonUI 应用程序第一次加载时执行的初始化操作
 * @returns 
 */
function OnAddinLoad(ribbonUI: Kso.KsoRibbonUI) {

    wps.RibbonUI = ribbonUI;

    return true;
}




/**
 * 下载并打开一个工作簿
 * @param url 
 */
function openBook(url: string) {
    //wps.PluginStorage.getItem()
    //let App=wps.EtApplication().Application;
    //App.Workbooks.Add();
    //aap.Visible=true;
}
/**
 * 显示一个操作窗格
 * @param obj 
 */
function showTaskPane(obj: { url: string }) {
    if(wps.Application.Workbooks.Count==0) wps.Application.Workbooks.Add();
    var wb1=wps.Application.ActiveWorkbook;
    
    var tp1 = wps.CreateTaskPane("https://fxzqf.github.io/" + obj.url, "表格助手");
    taskPanes.push({ wb: wb1, tp: tp1 });
    tp1.Visible = true;
}

function OnAction(control: Kso.KsoRibbonControl) {
    return true;
}

function OnGetEnabled(control: Kso.KsoRibbonControl) {
    return true;
}
/**
* 获取一个控件的图标
* @param control 要获取图标的控件
* @returns 图标的SVG图像的URL
*/
function GetImage(control: any) {
    var eleId = control.Id;
    switch (eleId) {
        case "btnShowMsg":
            return "./images/1.svg";
        case "btnShowDialog":
            return "./images/2.svg";
        case "btnShowTaskPane":
            return "./images/3.svg";
        default:
            ;
    }
    return "./images/newFromTemp.svg";
}

/**
 * 工作簿打开事件处理程序
 * @param wb1 打开的工作簿
 */
function onWorkbookOpen(wb1: Et.EtWorkbook) {
    var obj = wb1.CustomDocumentProperties;
    for (var x = obj.Count; x > 0; x--) {
        if (obj.Item(x).Name == "TaskPane") {
            var tp1 = wps.CreateTaskPane("https://fxzqf.github.io/" + obj.Item(x).Value, "表格助手");
            taskPanes.push({ wb: wb1, tp: tp1 });
            if (wb1.FullName == wps.Application.ActiveWorkbook.FullName) tp1.Visible = true;
        }
    }
}
/**
 * 工作簿关闭事件处理程序
 * @param wb 关闭的工作簿
 */
function onWorkbookBeforeClose(wb: object) {
    taskPanes.forEach(element => {
        if ((wb as Et.EtWorkbook).FullName == element.wb.FullName) {
            taskPanes.splice(taskPanes.indexOf(element), 1);
            element.tp.Delete();
        }
    });
}
/**
 * 工作簿窗口非激活事件处理程序
 * @param wb 
 * @param win 
 */
function onWindowDeactivate(wb: object, win: object) {
    taskPanes.forEach(element => {
        if ((<Et.EtWorkbook>wb).FullName == element.wb.FullName) element.tp.Visible = false;
    });

}

/**
 * 当窗口激活时显示工作簿对应的操作窗格
 * @param wb
 * @param win
 * @returns
 */
function onWindowActivate(wb: object, win: object) {
    taskPanes.forEach(element => {
        if ((wb as Et.EtWorkbook).FullName == element.wb.FullName) element.tp.Visible = true;
    });
}

/**
 * 
 */
window.onload = () => {
    if (wps.Application) wps.Application = wps.EtApplication();
    for (let i = 1; i <= wps.Application.Workbooks.Count; i++) onWorkbookOpen(wps.Application.Workbooks.Item(i));
    wps.ApiEvent.AddApiEventListener("WindowActivate", onWindowActivate);
    wps.ApiEvent.AddApiEventListener("WindowDeactivate", onWindowDeactivate);
    wps.ApiEvent.AddApiEventListener("WorkbookBeforeClose", onWorkbookBeforeClose);
    wps.ApiEvent.AddApiEventListener("WorkbookOpen", onWorkbookOpen);
}
