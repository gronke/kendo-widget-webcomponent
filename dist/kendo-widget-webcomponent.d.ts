/// <reference path="../typings/HTML5Document.d.ts" />
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class KendoWidgetWebcomponent {
    static injectTemplates(): void;
    static createWidget(name: String, widgetOptions: kendo.ui.Widget, prototype?: any): any;
    static getTemplate(name: String): HTMLElement;
    private static appendToTargetElement();
    private static getLocalDocument();
    private static getLocalKendoTemplates();
    private static forEachLocalKendoTemplate(cb);
}
