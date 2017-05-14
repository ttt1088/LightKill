cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-webrtc/dist/webrtc.js",
        "id": "cordova-plugin-webrtc.WebRTC",
        "pluginId": "cordova-plugin-webrtc",
        "clobbers": [
            "webrtc"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-translucent-statusbar/www/translucentStatusbar.js",
        "id": "cordova-plugin-translucent-statusbar.translucentStatusbar",
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
}
// BOTTOM OF METADATA
});