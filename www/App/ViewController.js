CevicheriaHouseApp.module("ViewControllers.Main", function (MainViewController, CevicheriaHouseApp, Backbone, Marionette, $, _) {

    MainViewController.addInitializer(function() {
        CevicheriaHouseApp.regions.render();
    });

    MainViewController.showDefaultView = function() {
        var mainView = new CevicheriaHouseApp.Views.MainView();
        CevicheriaHouseApp.regions.content.show(mainView);

        var mapView = new CevicheriaHouseApp.Views.MapView({
            el: '.map-container'
        });
        mapView.render();

        var ourStoryView = new CevicheriaHouseApp.Views.OurStoryView({
            el: '.instagram-feed-container'
        });
        ourStoryView.render();
    };
});