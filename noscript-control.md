Install NoScript. Paste the following in the browser console:
```
const {LegacyExtensionContext} = ChromeUtils.import("resource://gre/modules/LegacyExtensionsUtils.jsm", {});
const noscriptID = "{73a6fe31-595d-460b-a920-fcc0f8843232}";
const baseSetting = {"type":"NoScript.updateSettings","policy":{"DEFAULT":{"capabilities":[],"temp":false},"sites":{"trusted":[],"untrusted":[],"custom":{},"temp":[]},"enforced":true,"autoAllowTop":false},"tabId":-1}
let cloneJSON = x => JSON.parse(JSON.stringify(x));
let defaultCapabilitiesSetting = function (capabilities) {
  let settingObject = cloneJSON(baseSetting);
  settingObject["policy"]["DEFAULT"]["capabilities"] = capabilities;
  return settingObject;
};
let context = new LegacyExtensionContext({ id : noscriptID});
let messageManager = context.messenger.messageManagers[0];
let setNoScriptSettings = settings => context.messenger.sendMessage(messageManager, settings, noscriptID);
let setNoScriptDefaultCapabilities = capabilities => setNoScriptSettings(defaultCapabilitiesSetting(capabilities));
```
Now, go to about:addons and click on the `Preferences` button for NoScript.
Enter the following and reload the preferences page:
```
setNoScriptDefaultCapabilities(["script","fetch","object"]);
```
Next, enter this and reload again:
```
setNoScriptDefaultCapabilities(["media","frame","font","other"]);
```
Some of the checkboxes on the default tab in the NoScript preferences page should be changing.

Here is a an example of a full NoScript setting object, for reference and experimentation.
```
{
   "type":"NoScript.updateSettings",
   "policy":{
      "DEFAULT":{
         "capabilities":[
            "frame",
            "fetch",
            "other",
            "object",
            "font"
         ],
         "temp":false
      },
      "TRUSTED":{
         "capabilities":[
            "script",
            "object",
            "media",
            "frame",
            "font",
            "webgl",
            "fetch",
            "other"
         ],
         "temp":false
      },
      "UNTRUSTED":{
         "capabilities":[

         ],
         "temp":false
      },
      "sites":{
         "trusted":[
            "§:addons.mozilla.org",
            "§:afx.ms",
            "§:ajax.aspnetcdn.com",
            "§:ajax.googleapis.com",
            "§:bootstrapcdn.com",
            "§:code.jquery.com",
            "§:firstdata.com",
            "§:firstdata.lv",
            "§:gfx.ms",
            "§:google.com",
            "§:googlevideo.com",
            "§:gstatic.com",
            "§:hotmail.com",
            "§:live.com",
            "§:live.net",
            "§:maps.googleapis.com",
            "§:mozilla.net",
            "§:netflix.com",
            "§:nflxext.com",
            "§:nflximg.com",
            "§:nflxvideo.net",
            "§:noscript.net",
            "§:outlook.com",
            "§:passport.com",
            "§:passport.net",
            "§:passportimages.com",
            "§:paypal.com",
            "§:paypalobjects.com",
            "§:securecode.com",
            "§:securesuite.net",
            "§:sfx.ms",
            "§:tinymce.cachefly.net",
            "§:wlxrs.com",
            "§:yahoo.com",
            "§:yahooapis.com",
            "§:yimg.com",
            "§:youtube.com",
            "§:ytimg.com"
         ],
         "untrusted":[

         ],
         "custom":{

         },
         "temp":[

         ]
      },
      "enforced":true,
      "autoAllowTop":false
   },
   "tabId":-1
}
```