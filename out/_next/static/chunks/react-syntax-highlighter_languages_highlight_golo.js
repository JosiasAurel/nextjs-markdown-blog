(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_golo"],{

/***/ "./node_modules/highlight.js/lib/languages/golo.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/golo.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Golo
Author: Philippe Charriere <ph.charriere@gmail.com>
Description: a lightweight dynamic language for the JVM
Website: http://golo-lang.org/
*/

function golo(hljs) {
    return {
      name: 'Golo',
      keywords: {
        keyword:
          'println readln print import module function local return let var ' +
          'while for foreach times in case when match with break continue ' +
          'augment augmentation each find filter reduce ' +
          'if then else otherwise try catch finally raise throw orIfNull ' +
          'DynamicObject|10 DynamicVariable struct Observable map set vector list array',
        literal:
          'true false null'
      },
      contains: [
        hljs.HASH_COMMENT_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.C_NUMBER_MODE,
        {
          className: 'meta', begin: '@[A-Za-z]+'
        }
      ]
    }
}

module.exports = golo;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2dvbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2dvbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEdvbG9cbkF1dGhvcjogUGhpbGlwcGUgQ2hhcnJpZXJlIDxwaC5jaGFycmllcmVAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IGEgbGlnaHR3ZWlnaHQgZHluYW1pYyBsYW5ndWFnZSBmb3IgdGhlIEpWTVxuV2Vic2l0ZTogaHR0cDovL2dvbG8tbGFuZy5vcmcvXG4qL1xuXG5mdW5jdGlvbiBnb2xvKGhsanMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ0dvbG8nLFxuICAgICAga2V5d29yZHM6IHtcbiAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAncHJpbnRsbiByZWFkbG4gcHJpbnQgaW1wb3J0IG1vZHVsZSBmdW5jdGlvbiBsb2NhbCByZXR1cm4gbGV0IHZhciAnICtcbiAgICAgICAgICAnd2hpbGUgZm9yIGZvcmVhY2ggdGltZXMgaW4gY2FzZSB3aGVuIG1hdGNoIHdpdGggYnJlYWsgY29udGludWUgJyArXG4gICAgICAgICAgJ2F1Z21lbnQgYXVnbWVudGF0aW9uIGVhY2ggZmluZCBmaWx0ZXIgcmVkdWNlICcgK1xuICAgICAgICAgICdpZiB0aGVuIGVsc2Ugb3RoZXJ3aXNlIHRyeSBjYXRjaCBmaW5hbGx5IHJhaXNlIHRocm93IG9ySWZOdWxsICcgK1xuICAgICAgICAgICdEeW5hbWljT2JqZWN0fDEwIER5bmFtaWNWYXJpYWJsZSBzdHJ1Y3QgT2JzZXJ2YWJsZSBtYXAgc2V0IHZlY3RvciBsaXN0IGFycmF5JyxcbiAgICAgICAgbGl0ZXJhbDpcbiAgICAgICAgICAndHJ1ZSBmYWxzZSBudWxsJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJ0BbQS1aYS16XSsnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ29sbztcbiJdLCJzb3VyY2VSb290IjoiIn0=