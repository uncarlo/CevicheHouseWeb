CevicheriaHouseApp.module("ViewControllers.Main", function (MainViewController, CevicheriaHouseApp, Backbone, Marionette, $, _) {
    MainViewController.showDefaultView = function() {
        CevicheriaHouseApp.regions.render();
    }
});