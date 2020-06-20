const r = require("robotjs");
const ioHook = require("iohook");

const state = {
  working: false,
};

ioHook.on("keyup", function (keyPress) {
  if (keyPress.keycode === 3637) {
    // divide sign
    state.working = true;
  }
  if (keyPress.keycode === 55) {
    // multiple sign
    state.working = false;
  }
});

ioHook.start();

if (state.working) r.keyToggle("Z", "down");

//r.keyToggle("Z", "up");
(function loop() {
  var rand = Math.round(Math.random() * (700 - 500)) + 500;
  //r.keyToggle("Z", "down");

  setTimeout(function () {
    if (state.working) {
      r.keyToggle("Z", "down");
      r.keyToggle("D", "down");
      r.mouseClick("left");
    }
    loop();
  }, 250);
})();
