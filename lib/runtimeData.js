const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "MixaBa Games",
        productName: "Dungeon & Master",
        productVersion: "2.0.0.0",
        sdkVersion: "3.17.19",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/DungeonMaster_Web_VKontakte.loader.js",
        dataURL: "bin/DungeonMaster_Web_VKontakte.data.unityweb",
        frameworkURL: "bin/DungeonMaster_Web_VKontakte.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/DungeonMaster_Web_VKontakte.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "None",
        iconTextureName: "Boss_03.png",
        backgroundTextureName: "ClickerBgr9.png",

        // Aspect ratio.
        desktopAspectRatio: 1.777778,
        mobileAspectRatio: 1.777778,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "vkontakteWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

    }

})();