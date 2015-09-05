CevicheriaHouseApp.module('Routers', function (Routers, CevicheriaHouseApp, Backbone, Marionette, $, _) {
    Routers.MainRouter = Marionette.AppRouter.extend({
        routes: {
            '': 'showDefaultView'
        },
        showDefaultView: function () {
            CevicheriaHouseApp.ViewControllers.Main.showDefaultView();
        }
    });

    CevicheriaHouseApp.mainRouter = new Routers.MainRouter();
});