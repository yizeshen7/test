import Darkmode, { IS_BROWSER } from './darkmode';
export default Darkmode;

new Darkmode().showWidget();

/* eslint-disable */
if (IS_BROWSER) {
  (function (window) {
    window.Darkmode = Darkmode;
  })(window);
}
/* eslint-enable */
