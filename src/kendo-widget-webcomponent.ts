/// <reference path="../typings/HTML5Document.d.ts" />
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
'use strict';

class KendoWidgetWebcomponent {

    static injectTemplates() {
        this.forEachLocalKendoTemplate((templateElement) => {
            document.body.appendChild(templateElement);
        });
    }

    static createWidget(name: String, prototype: kendo.ui.Widget) {

        var template: HTMLElement = KendoWidgetWebcomponent.getTemplate.call(KendoWidgetWebcomponent, name);

        var Widget = kendo.ui.Widget.extend({
            init: function(element, options) {

                if (template) {
                    jQuery(element).append(template.innerHTML);
                }

                kendo.ui.Widget.fn.init.call(this, element, options);

                if (prototype.init) {
                    prototype.init.call(this, element, options)
                }

            },
            options: {
                name: name
            }
        });

        kendo.ui.plugin(Widget);

        return Widget;

    }

    static getTemplate(name: String): HTMLElement {
        return <HTMLElement>this.getLocalDocument()
            .querySelector('script[type="text/x-kendo-template"][name="' + name + '"]');
    }

    private static appendToTargetElement() {
        return document.body;
    }

    private static getLocalDocument() {
        var rootDocument: HTML5Document = <HTML5Document>document;
        return rootDocument.currentScript.ownerDocument.documentElement;
    }

    private static getLocalKendoTemplates() {
        return this.getLocalDocument()
            .querySelectorAll('script[type="text/x-kendo-template"]');
    }

    private static forEachLocalKendoTemplate(cb: (templateElement: HTMLScriptElement) => void) {
          [].forEach.call(this.getLocalKendoTemplates(), cb);
    }

}
