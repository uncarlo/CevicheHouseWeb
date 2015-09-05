'use strict'

var CevicheriaHouseApp = new Marionette.Application();

CevicheriaHouseApp.on('before:start', function () {
    var RegionContainer = Marionette.LayoutView.extend({
        template: '#layout-template',
        el: '#root',
        regions: {
            content: '#content-region'
        }
    });

    CevicheriaHouseApp.regions = new RegionContainer();
});

CevicheriaHouseApp.on('start', function () {
    Backbone.history.start();
});