/// <reference path="../typings/HTML5Document.d.ts" />
'use strict';

class KendoWidgetWebcomponent {

    public verbose: Boolean = false;

    static injectTemplates() {
        this.forEachLocalKendoTemplate((templateElement) => {
            document.body.appendChild(templateElement);
            console.log('Registered Template', templateElement.getAttribute('name'));
        });
    }

    private static appendToTargetElement() {
      return document.body
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
