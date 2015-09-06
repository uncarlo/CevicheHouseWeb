CevicheriaHouseApp.module('Views', function (Views, App, Backbone, Marionette, $, _) {
    Views.MapView = Marionette.CompositeView.extend({
        template: '#map-view-template'
    });
});