import Darkmode, { IS_BROWSER } from './darkmode';
export default Darkmode;
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

/* eslint-disable */
if (IS_BROWSER) {
  (function (window) {
    window.Darkmode = Darkmode;
  })(window);
}
/* eslint-enable */
