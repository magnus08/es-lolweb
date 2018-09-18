/* eslint-disable */

/**
 * This script changes apiUrls and baseUrls if there is a environment variable REACT_APP_RUNHOST defined to redirect
 * enpoints to your development server.
 *
 * Example usage: REACT_APP_RUNHOST=xx.dabox.se:9000 yarn start
 */

__webpack_public_path__ = window.appState.config.contextPath;
if (
  __webpack_public_path__.charAt(__webpack_public_path__.length - 1) !== '/'
) {
  __webpack_public_path__ = __webpack_public_path__ + '/';
}
console.log('Webpack public path', __webpack_public_path__);

if (process.env.REACT_APP_RUNHOST) {
  for (i in window.appState.config.apiUrls) {
    window.appState.config.apiUrls[i] = window.appState.config.apiUrls[
      i
    ].replace('sb.dabox.se:9000', process.env.REACT_APP_RUNHOST);
  }

  for (i in window.appState.config.baseUrls) {
    window.appState.config.baseUrls[i] = window.appState.config.baseUrls[
      i
    ].replace('sb.dabox.se:9000', process.env.REACT_APP_RUNHOST);
  }
}

console.log('Run host', process.env);
