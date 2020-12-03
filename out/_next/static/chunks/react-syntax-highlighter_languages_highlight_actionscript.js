(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_actionscript"],{

/***/ "./node_modules/highlight.js/lib/languages/actionscript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/actionscript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: ActionScript
Author: Alexander Myadzel <myadzel@gmail.com>
Category: scripting
*/

/** @type LanguageFn */
function actionscript(hljs) {
  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

  var AS3_REST_ARG_MODE = {
    className: 'rest_arg',
    begin: '[.]{3}', end: IDENT_RE,
    relevance: 10
  };

  return {
    name: 'ActionScript',
    aliases: ['as'],
    keywords: {
      keyword: 'as break case catch class const continue default delete do dynamic each ' +
        'else extends final finally for function get if implements import in include ' +
        'instanceof interface internal is namespace native new override package private ' +
        'protected public return set static super switch this throw try typeof use var void ' +
        'while with',
      literal: 'true false null undefined'
    },
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'class',
        beginKeywords: 'package', end: '{',
        contains: [hljs.TITLE_MODE]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.TITLE_MODE
        ]
      },
      {
        className: 'meta',
        beginKeywords: 'import include', end: ';',
        keywords: {'meta-keyword': 'import include'}
      },
      {
        className: 'function',
        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
        illegal: '\\S',
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              AS3_REST_ARG_MODE
            ]
          },
          {
            begin: ':\\s*' + IDENT_FUNC_RETURN_TYPE_RE
          }
        ]
      },
      hljs.METHOD_GUARD
    ],
    illegal: /#/
  };
}

module.exports = actionscript;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FjdGlvbnNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELG1CQUFtQjtBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfYWN0aW9uc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBY3Rpb25TY3JpcHRcbkF1dGhvcjogQWxleGFuZGVyIE15YWR6ZWwgPG15YWR6ZWxAZ21haWwuY29tPlxuQ2F0ZWdvcnk6IHNjcmlwdGluZ1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFjdGlvbnNjcmlwdChobGpzKSB7XG4gIHZhciBJREVOVF9SRSA9ICdbYS16QS1aXyRdW2EtekEtWjAtOV8kXSonO1xuICB2YXIgSURFTlRfRlVOQ19SRVRVUk5fVFlQRV9SRSA9ICcoWypdfFthLXpBLVpfJF1bYS16QS1aMC05XyRdKiknO1xuXG4gIHZhciBBUzNfUkVTVF9BUkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdyZXN0X2FyZycsXG4gICAgYmVnaW46ICdbLl17M30nLCBlbmQ6IElERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMTBcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBY3Rpb25TY3JpcHQnLFxuICAgIGFsaWFzZXM6IFsnYXMnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogJ2FzIGJyZWFrIGNhc2UgY2F0Y2ggY2xhc3MgY29uc3QgY29udGludWUgZGVmYXVsdCBkZWxldGUgZG8gZHluYW1pYyBlYWNoICcgK1xuICAgICAgICAnZWxzZSBleHRlbmRzIGZpbmFsIGZpbmFsbHkgZm9yIGZ1bmN0aW9uIGdldCBpZiBpbXBsZW1lbnRzIGltcG9ydCBpbiBpbmNsdWRlICcgK1xuICAgICAgICAnaW5zdGFuY2VvZiBpbnRlcmZhY2UgaW50ZXJuYWwgaXMgbmFtZXNwYWNlIG5hdGl2ZSBuZXcgb3ZlcnJpZGUgcGFja2FnZSBwcml2YXRlICcgK1xuICAgICAgICAncHJvdGVjdGVkIHB1YmxpYyByZXR1cm4gc2V0IHN0YXRpYyBzdXBlciBzd2l0Y2ggdGhpcyB0aHJvdyB0cnkgdHlwZW9mIHVzZSB2YXIgdm9pZCAnICtcbiAgICAgICAgJ3doaWxlIHdpdGgnLFxuICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3BhY2thZ2UnLCBlbmQ6ICd7JyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLlRJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW1wb3J0IGluY2x1ZGUnLCBlbmQ6ICc7JyxcbiAgICAgICAga2V5d29yZHM6IHsnbWV0YS1rZXl3b3JkJzogJ2ltcG9ydCBpbmNsdWRlJ31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJywgZW5kOiAnW3s7XScsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcUycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIEFTM19SRVNUX0FSR19NT0RFXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzpcXFxccyonICsgSURFTlRfRlVOQ19SRVRVUk5fVFlQRV9SRVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuTUVUSE9EX0dVQVJEXG4gICAgXSxcbiAgICBpbGxlZ2FsOiAvIy9cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25zY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9