/// <reference path="../typings/HTML5Document.d.ts" />
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class KendoWidgetWebcomponent {
    verbose: Boolean;
    static injectTemplates(): void;
    static createWidget(name: String, prototype: kendo.ui.Widget): kendo.ui.Widget;
    static getTemplate(name: String): HTMLElement;
    private static appendToTargetElement();
    private static getLocalDocument();
    private static getLocalKendoTemplates();
    private static forEachLocalKendoTemplate(cb);
}
