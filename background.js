console.log("TestExtension started.");

browser.runtime.onMessage.addListener(msg => console.log("message received by TestExtension:", msg));
