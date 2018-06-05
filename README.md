In Firefox, set "devtools.chrome.enabled" to true. Then open the browser console, and enter:

```
const {LegacyExtensionContext} = ChromeUtils.import("resource://gre/modules/LegacyExtensionsUtils.jsm", {});
let context = new LegacyExtensionContext({ id : "TestExtension@torproject.org"});
let port;
context.api.browser.runtime.onConnect.addListener(x => { port = x; });
```

Now go to `about:debugging#addons` and click "Load Temporary Addon". Navigate to `manifest.json`.

In the browser console, you should see `TextExtension started.`. Then enter:

```
port.postMessage("hello from legacy");
```

You should get: `port message received: hello from legacy`.