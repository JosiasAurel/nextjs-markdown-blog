(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_mizar"],{

/***/ "./node_modules/highlight.js/lib/languages/mizar.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mizar.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Mizar
Description: The Mizar Language is a formal language derived from the mathematical vernacular.
Author: Kelley van Evert <kelleyvanevert@gmail.com>
Website: http://mizar.org/language/
Category: scientific
*/

function mizar(hljs) {
  return {
    name: 'Mizar',
    keywords:
      'environ vocabularies notations constructors definitions ' +
      'registrations theorems schemes requirements begin end definition ' +
      'registration cluster existence pred func defpred deffunc theorem ' +
      'proof let take assume then thus hence ex for st holds consider ' +
      'reconsider such that and in provided of as from be being by means ' +
      'equals implies iff redefine define now not or attr is mode ' +
      'suppose per cases set thesis contradiction scheme reserve struct ' +
      'correctness compatibility coherence symmetry assymetry ' +
      'reflexivity irreflexivity connectedness uniqueness commutativity ' +
      'idempotence involutiveness projectivity',
    contains: [
      hljs.COMMENT('::', '$')
    ]
  };
}

module.exports = mizar;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21pemFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfbWl6YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1pemFyXG5EZXNjcmlwdGlvbjogVGhlIE1pemFyIExhbmd1YWdlIGlzIGEgZm9ybWFsIGxhbmd1YWdlIGRlcml2ZWQgZnJvbSB0aGUgbWF0aGVtYXRpY2FsIHZlcm5hY3VsYXIuXG5BdXRob3I6IEtlbGxleSB2YW4gRXZlcnQgPGtlbGxleXZhbmV2ZXJ0QGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHA6Ly9taXphci5vcmcvbGFuZ3VhZ2UvXG5DYXRlZ29yeTogc2NpZW50aWZpY1xuKi9cblxuZnVuY3Rpb24gbWl6YXIoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNaXphcicsXG4gICAga2V5d29yZHM6XG4gICAgICAnZW52aXJvbiB2b2NhYnVsYXJpZXMgbm90YXRpb25zIGNvbnN0cnVjdG9ycyBkZWZpbml0aW9ucyAnICtcbiAgICAgICdyZWdpc3RyYXRpb25zIHRoZW9yZW1zIHNjaGVtZXMgcmVxdWlyZW1lbnRzIGJlZ2luIGVuZCBkZWZpbml0aW9uICcgK1xuICAgICAgJ3JlZ2lzdHJhdGlvbiBjbHVzdGVyIGV4aXN0ZW5jZSBwcmVkIGZ1bmMgZGVmcHJlZCBkZWZmdW5jIHRoZW9yZW0gJyArXG4gICAgICAncHJvb2YgbGV0IHRha2UgYXNzdW1lIHRoZW4gdGh1cyBoZW5jZSBleCBmb3Igc3QgaG9sZHMgY29uc2lkZXIgJyArXG4gICAgICAncmVjb25zaWRlciBzdWNoIHRoYXQgYW5kIGluIHByb3ZpZGVkIG9mIGFzIGZyb20gYmUgYmVpbmcgYnkgbWVhbnMgJyArXG4gICAgICAnZXF1YWxzIGltcGxpZXMgaWZmIHJlZGVmaW5lIGRlZmluZSBub3cgbm90IG9yIGF0dHIgaXMgbW9kZSAnICtcbiAgICAgICdzdXBwb3NlIHBlciBjYXNlcyBzZXQgdGhlc2lzIGNvbnRyYWRpY3Rpb24gc2NoZW1lIHJlc2VydmUgc3RydWN0ICcgK1xuICAgICAgJ2NvcnJlY3RuZXNzIGNvbXBhdGliaWxpdHkgY29oZXJlbmNlIHN5bW1ldHJ5IGFzc3ltZXRyeSAnICtcbiAgICAgICdyZWZsZXhpdml0eSBpcnJlZmxleGl2aXR5IGNvbm5lY3RlZG5lc3MgdW5pcXVlbmVzcyBjb21tdXRhdGl2aXR5ICcgK1xuICAgICAgJ2lkZW1wb3RlbmNlIGludm9sdXRpdmVuZXNzIHByb2plY3Rpdml0eScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnOjonLCAnJCcpXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1pemFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==