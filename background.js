console.log("TestExtension started.");

let port = browser.runtime.connect();

port.onMessage.addListener(x => console.log("port message received:", x));
