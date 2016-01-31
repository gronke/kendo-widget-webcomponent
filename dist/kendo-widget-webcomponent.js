/// <reference path="../typings/HTML5Document.d.ts" />
'use strict';
var KendoWidgetWebcomponent = (function () {
    function KendoWidgetWebcomponent() {
        this.verbose = false;
    }
    KendoWidgetWebcomponent.injectTemplates = function () {
        this.forEachLocalKendoTemplate(function (templateElement) {
            document.body.appendChild(templateElement);
            console.log('Registered Template', templateElement.getAttribute('name'));
        });
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
