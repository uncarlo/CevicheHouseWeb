CevicheriaHouseApp.module('Views', function (Views, App, Backbone, Marionette, $, _) {
    Views.MainView = Marionette.CompositeView.extend({
        template: '#main-view-template',
        className: 'main-view'
    });
});