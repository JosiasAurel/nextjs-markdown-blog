(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_q"],{

/***/ "./node_modules/highlight.js/lib/languages/q.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/q.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Q
Description: Q is a vector-based functional paradigm programming language built into the kdb+ database.
             (K/Q/Kdb+ from Kx Systems)
Author: Sergey Vidyuk <svidyuk@gmail.com>
Website: https://kx.com/connect-with-us/developers/
*/
function q(hljs) {
  var Q_KEYWORDS = {
  $pattern: /(`?)[A-Za-z0-9_]+\b/,
  keyword:
    'do while select delete by update from',
  literal:
    '0b 1b',
  built_in:
    'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
  type:
    '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
  };
  return {
  name: 'Q',
  aliases:['k', 'kdb'],
  keywords: Q_KEYWORDS,
  contains: [
  hljs.C_LINE_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
     ]
  };
}

module.exports = q;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfcS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUVxuRGVzY3JpcHRpb246IFEgaXMgYSB2ZWN0b3ItYmFzZWQgZnVuY3Rpb25hbCBwYXJhZGlnbSBwcm9ncmFtbWluZyBsYW5ndWFnZSBidWlsdCBpbnRvIHRoZSBrZGIrIGRhdGFiYXNlLlxuICAgICAgICAgICAgIChLL1EvS2RiKyBmcm9tIEt4IFN5c3RlbXMpXG5BdXRob3I6IFNlcmdleSBWaWR5dWsgPHN2aWR5dWtAZ21haWwuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9reC5jb20vY29ubmVjdC13aXRoLXVzL2RldmVsb3BlcnMvXG4qL1xuZnVuY3Rpb24gcShobGpzKSB7XG4gIHZhciBRX0tFWVdPUkRTID0ge1xuICAkcGF0dGVybjogLyhgPylbQS1aYS16MC05X10rXFxiLyxcbiAga2V5d29yZDpcbiAgICAnZG8gd2hpbGUgc2VsZWN0IGRlbGV0ZSBieSB1cGRhdGUgZnJvbScsXG4gIGxpdGVyYWw6XG4gICAgJzBiIDFiJyxcbiAgYnVpbHRfaW46XG4gICAgJ25lZyBub3QgbnVsbCBzdHJpbmcgcmVjaXByb2NhbCBmbG9vciBjZWlsaW5nIHNpZ251bSBtb2QgeGJhciB4bG9nIGFuZCBvciBlYWNoIHNjYW4gb3ZlciBwcmlvciBtbXUgbHNxIGludiBtZDUgbHRpbWUgZ3RpbWUgY291bnQgZmlyc3QgdmFyIGRldiBtZWQgY292IGNvciBhbGwgYW55IHJhbmQgc3VtcyBwcmRzIG1pbnMgbWF4cyBmaWxscyBkZWx0YXMgcmF0aW9zIGF2Z3MgZGlmZmVyIHByZXYgbmV4dCByYW5rIHJldmVyc2UgaWFzYyBpZGVzYyBhc2MgZGVzYyBtc3VtIG1jb3VudCBtYXZnIG1kZXYgeHJhbmsgbW1pbiBtbWF4IHhwcmV2IHJvdGF0ZSBkaXN0aW5jdCBncm91cCB3aGVyZSBmbGlwIHR5cGUga2V5IHRpbCBnZXQgdmFsdWUgYXR0ciBjdXQgc2V0IHVwc2VydCByYXplIHVuaW9uIGludGVyIGV4Y2VwdCBjcm9zcyBzdiB2cyBzdWJsaXN0IGVubGlzdCByZWFkMCByZWFkMSBob3BlbiBoY2xvc2UgaGRlbCBoc3ltIGhjb3VudCBwZWFjaCBzeXN0ZW0gbHRyaW0gcnRyaW0gdHJpbSBsb3dlciB1cHBlciBzc3IgdmlldyB0YWJsZXMgdmlld3MgY29scyB4Y29scyBrZXlzIHhrZXkgeGNvbCB4YXNjIHhkZXNjIGZrZXlzIG1ldGEgbGogYWogYWowIGlqIHBqIGFzb2YgdWogd3cgd2ogd2oxIGZieSB4Z3JvdXAgdW5ncm91cCBlaiBzYXZlIGxvYWQgcnNhdmUgcmxvYWQgc2hvdyBjc3YgcGFyc2UgZXZhbCBtaW4gbWF4IGF2ZyB3YXZnIHdzdW0gc2luIGNvcyB0YW4gc3VtJyxcbiAgdHlwZTpcbiAgICAnYGZsb2F0IGBkb3VibGUgaW50IGB0aW1lc3RhbXAgYHRpbWVzcGFuIGBkYXRldGltZSBgdGltZSBgYm9vbGVhbiBgc3ltYm9sIGBjaGFyIGBieXRlIGBzaG9ydCBgbG9uZyBgcmVhbCBgbW9udGggYGRhdGUgYG1pbnV0ZSBgc2Vjb25kIGBndWlkJ1xuICB9O1xuICByZXR1cm4ge1xuICBuYW1lOiAnUScsXG4gIGFsaWFzZXM6WydrJywgJ2tkYiddLFxuICBrZXl3b3JkczogUV9LRVlXT1JEUyxcbiAgY29udGFpbnM6IFtcbiAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==