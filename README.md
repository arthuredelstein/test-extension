In Firefox, set "devtools.chrome.enabled" to true.

Now go to `about:debugging#addons` and click "Load Temporary Addon". Navigate to `manifest.json`. Or, if TestExtension is already loaded, just hit the `Reload` button.

In the browser console, you should see `TextExtension started.`. Then enter:

```
const {LegacyExtensionContext} = ChromeUtils.import("resource://gre/modules/LegacyExtensionsUtils.jsm", {});
let context = new LegacyExtensionContext({ id : "TestExtension@torproject.org"});
let messageManager = context.messenger.messageManagers[0];
context.messenger.sendMessage(messageManager, { testMessage: "hello from legacy"}, "TestExtension@torproject.org");
```

You should get: `message received by TestExtension: Object { testMessage: "hello from legacy" }`.
