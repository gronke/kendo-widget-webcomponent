/// <reference path="../typings/HTML5Document.d.ts" />
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
'use strict';
var KendoWidgetWebcomponent = (function () {
    function KendoWidgetWebcomponent() {
    }
    KendoWidgetWebcomponent.injectTemplates = function () {
        this.forEachLocalKendoTemplate(function (templateElement) {
            document.body.appendChild(templateElement);
        });
    };
    KendoWidgetWebcomponent.createWidget = function (name, widgetOptions, prototype) {
        if (prototype === void 0) { prototype = kendo.ui.Widget; }
        var template = KendoWidgetWebcomponent.getTemplate.call(KendoWidgetWebcomponent, name);
        var Widget = prototype.extend({
            init: function (element, options) {
                if (template) {
                    jQuery(element).append(template.innerHTML);
                }
                prototype.fn.init.call(this, element, options);
                if (widgetOptions.init) {
                    widgetOptions.init.call(this, element, options);
                }
            },
            options: {
                name: name
            }
        });
        kendo.ui.plugin(Widget);
        return Widget;
    };
    KendoWidgetWebcomponent.getTemplate = function (name) {
        return this.getLocalDocument()
            .querySelector('script[type="text/x-kendo-template"][name="' + name + '"]');
    };
    KendoWidgetWebcomponent.appendToTargetElement = function () {
        return document.body;
    };
    KendoWidgetWebcomponent.getLocalDocument = function () {
        var rootDocument = document;
        return rootDocument.currentScript.ownerDocument.documentElement;
    };
    KendoWidgetWebcomponent.getLocalKendoTemplates = function () {
        return this.getLocalDocument()
            .querySelectorAll('script[type="text/x-kendo-template"]');
    };
    KendoWidgetWebcomponent.forEachLocalKendoTemplate = function (cb) {
        [].forEach.call(this.getLocalKendoTemplates(), cb);
    };
    return KendoWidgetWebcomponent;
})();

//# sourceMappingURL=kendo-widget-webcomponent.js.map
