Kendo Widget Webcomponent
=========================
Use HTML5 Imports to load Kendo UI widgets.

Background
----------
Larger applications tend to have a large list of assets that are actually not used by the application. HTML5 imports provide the ability to load components of an application asynchronously via import tag and can also handle the comoponent registration at the main application.

Install
-------
```bash
bower install gronke/kendo-widget-webcomponent
```

Load the helper before your main application
```html
<script type="text/javascript" src="bower_components/kendo-widget-webcomponent/dist/kendo-widget-webcomponent.js"></script>
```

Development
-----------
```bash
npm install --only=dev
bower install
./node_modules/tsd/build/cli.js install
```

### Run Unit Tests
Mocha unit tests can be run via Gulp test task
```bash
gulp test
```
