cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-webrtc.WebRTC",
        "file": "plugins/cordova-plugin-webrtc/dist/webrtc.js",
        "pluginId": "cordova-plugin-webrtc",
        "clobbers": [
            "webrtc"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-translucent-statusbar.translucentStatusbar",
        "file": "plugins/cordova-plugin-translucent-statusbar/www/translucentStatusbar.js",
        "pluginId": "cordova-plugin-translucent-statusbar",
        "clobbers": [
            "window.translucentStatusbar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-webrtc": "0.1.1",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-translucent-statusbar": "1.0.0"
};
// BOTTOM OF METADATA
});