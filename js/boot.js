<<<<<<< HEAD
/* global Fluid, CONFIG */
=======
/* global Fluid */
>>>>>>> 45d387ae9ea807f1463d25fea20a341a3e289ca1

Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.billboard();
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerParallaxEvent();
  Fluid.events.registerScrollDownArrowEvent();
  Fluid.events.registerScrollTopArrowEvent();
  Fluid.events.registerImageLoadedEvent();
};

<<<<<<< HEAD
Fluid.boot.initPlugins = function() {
  CONFIG.anchorjs.enable && Fluid.plugins.initAnchor();
  CONFIG.toc.enable && Fluid.plugins.initTocBot();
  CONFIG.image_zoom.enable && Fluid.plugins.initFancyBox();
  CONFIG.copy_btn && Fluid.plugins.initCopyCode();
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
  Fluid.boot.initPlugins();
=======
document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
>>>>>>> 45d387ae9ea807f1463d25fea20a341a3e289ca1
});
