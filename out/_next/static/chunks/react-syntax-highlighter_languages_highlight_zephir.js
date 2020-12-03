(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_zephir"],{

/***/ "./node_modules/highlight.js/lib/languages/zephir.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/zephir.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Zephir
 Description: Zephir, an open source, high-level language designed to ease the creation and maintainability of extensions for PHP with a focus on type and memory safety.
 Author: Oleg Efimov <efimovov@gmail.com>
 Website: https://zephir-lang.com/en
 */

function zephir(hljs) {
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
    ]
  };
  var TITLE_MODE = hljs.UNDERSCORE_TITLE_MODE;
  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  var KEYWORDS =
    // classes and objects
    'namespace class interface use extends ' +
    'function return ' +
    'abstract final public protected private static deprecated ' +
    // error handling
    'throw try catch Exception ' +
    // keyword-ish things their website does NOT seem to highlight (in their own snippets)
    // 'typeof fetch in ' +
    // operators/helpers
    'echo empty isset instanceof unset ' +
    // assignment/variables
    'let var new const self ' +
    // control
    'require ' +
    'if else elseif switch case default ' +
    'do while loop for continue break ' +
    'likely unlikely ' +
    // magic constants
    // https://github.com/phalcon/zephir/blob/master/Library/Expression/Constants.php
    '__LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ ' +
    // types - https://docs.zephir-lang.com/0.12/en/types
    'array boolean float double integer object resource string ' +
    'char long unsigned bool int uint ulong uchar ' +
    // built-ins
    'true false null undefined';

  return {
    name: 'Zephir',
    aliases: ['zep'],
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      {
        className: 'string',
        begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        beginKeywords: 'function fn', end: /[;{]/, excludeEnd: true,
        illegal: '\\$|\\[|%',
        contains: [
          TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            keywords: KEYWORDS,
            contains: [
              'self',
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: /[:\(\$"]/,
        contains: [
          {beginKeywords: 'extends implements'},
          TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace', end: ';',
        illegal: /[\.']/,
        contains: [TITLE_MODE]
      },
      {
        beginKeywords: 'use', end: ';',
        contains: [TITLE_MODE]
      },
      {
        begin: '=>' // No markup, just a relevance booster
      },
      STRING,
      NUMBER
    ]
  };
}

module.exports = zephir;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3plcGhpci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjO0FBQ3pELDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLFdBQVcsb0NBQW9DO0FBQy9DO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHFDQUFxQztBQUNyQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF96ZXBoaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIExhbmd1YWdlOiBaZXBoaXJcbiBEZXNjcmlwdGlvbjogWmVwaGlyLCBhbiBvcGVuIHNvdXJjZSwgaGlnaC1sZXZlbCBsYW5ndWFnZSBkZXNpZ25lZCB0byBlYXNlIHRoZSBjcmVhdGlvbiBhbmQgbWFpbnRhaW5hYmlsaXR5IG9mIGV4dGVuc2lvbnMgZm9yIFBIUCB3aXRoIGEgZm9jdXMgb24gdHlwZSBhbmQgbWVtb3J5IHNhZmV0eS5cbiBBdXRob3I6IE9sZWcgRWZpbW92IDxlZmltb3ZvdkBnbWFpbC5jb20+XG4gV2Vic2l0ZTogaHR0cHM6Ly96ZXBoaXItbGFuZy5jb20vZW5cbiAqL1xuXG5mdW5jdGlvbiB6ZXBoaXIoaGxqcykge1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSlcbiAgICBdXG4gIH07XG4gIHZhciBUSVRMRV9NT0RFID0gaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREU7XG4gIHZhciBOVU1CRVIgPSB7dmFyaWFudHM6IFtobGpzLkJJTkFSWV9OVU1CRVJfTU9ERSwgaGxqcy5DX05VTUJFUl9NT0RFXX07XG4gIHZhciBLRVlXT1JEUyA9XG4gICAgLy8gY2xhc3NlcyBhbmQgb2JqZWN0c1xuICAgICduYW1lc3BhY2UgY2xhc3MgaW50ZXJmYWNlIHVzZSBleHRlbmRzICcgK1xuICAgICdmdW5jdGlvbiByZXR1cm4gJyArXG4gICAgJ2Fic3RyYWN0IGZpbmFsIHB1YmxpYyBwcm90ZWN0ZWQgcHJpdmF0ZSBzdGF0aWMgZGVwcmVjYXRlZCAnICtcbiAgICAvLyBlcnJvciBoYW5kbGluZ1xuICAgICd0aHJvdyB0cnkgY2F0Y2ggRXhjZXB0aW9uICcgK1xuICAgIC8vIGtleXdvcmQtaXNoIHRoaW5ncyB0aGVpciB3ZWJzaXRlIGRvZXMgTk9UIHNlZW0gdG8gaGlnaGxpZ2h0IChpbiB0aGVpciBvd24gc25pcHBldHMpXG4gICAgLy8gJ3R5cGVvZiBmZXRjaCBpbiAnICtcbiAgICAvLyBvcGVyYXRvcnMvaGVscGVyc1xuICAgICdlY2hvIGVtcHR5IGlzc2V0IGluc3RhbmNlb2YgdW5zZXQgJyArXG4gICAgLy8gYXNzaWdubWVudC92YXJpYWJsZXNcbiAgICAnbGV0IHZhciBuZXcgY29uc3Qgc2VsZiAnICtcbiAgICAvLyBjb250cm9sXG4gICAgJ3JlcXVpcmUgJyArXG4gICAgJ2lmIGVsc2UgZWxzZWlmIHN3aXRjaCBjYXNlIGRlZmF1bHQgJyArXG4gICAgJ2RvIHdoaWxlIGxvb3AgZm9yIGNvbnRpbnVlIGJyZWFrICcgK1xuICAgICdsaWtlbHkgdW5saWtlbHkgJyArXG4gICAgLy8gbWFnaWMgY29uc3RhbnRzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BoYWxjb24vemVwaGlyL2Jsb2IvbWFzdGVyL0xpYnJhcnkvRXhwcmVzc2lvbi9Db25zdGFudHMucGhwXG4gICAgJ19fTElORV9fIF9fRklMRV9fIF9fRElSX18gX19GVU5DVElPTl9fIF9fQ0xBU1NfXyBfX1RSQUlUX18gX19NRVRIT0RfXyBfX05BTUVTUEFDRV9fICcgK1xuICAgIC8vIHR5cGVzIC0gaHR0cHM6Ly9kb2NzLnplcGhpci1sYW5nLmNvbS8wLjEyL2VuL3R5cGVzXG4gICAgJ2FycmF5IGJvb2xlYW4gZmxvYXQgZG91YmxlIGludGVnZXIgb2JqZWN0IHJlc291cmNlIHN0cmluZyAnICtcbiAgICAnY2hhciBsb25nIHVuc2lnbmVkIGJvb2wgaW50IHVpbnQgdWxvbmcgdWNoYXIgJyArXG4gICAgLy8gYnVpbHQtaW5zXG4gICAgJ3RydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQnO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1plcGhpcicsXG4gICAgYWxpYXNlczogWyd6ZXAnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJy9cXFxcKicsXG4gICAgICAgICdcXFxcKi8nLFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICAgICAgYmVnaW46ICdAW0EtWmEtel0rJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICc8PDxbXFwnXCJdP1xcXFx3K1tcXCdcIl0/JCcsIGVuZDogJ15cXFxcdys7JyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBzd2FsbG93IGNvbXBvc2VkIGlkZW50aWZpZXJzIHRvIGF2b2lkIHBhcnNpbmcgdGhlbSBhcyBrZXl3b3Jkc1xuICAgICAgICBiZWdpbjogLyg6OnwtPikrW2EtekEtWl9cXHg3Zi1cXHhmZl1bYS16QS1aMC05X1xceDdmLVxceGZmXSovXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbiBmbicsIGVuZDogL1s7e10vLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXCR8XFxcXFt8JScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgICBOVU1CRVJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZScsIGVuZDogJ3snLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAvWzpcXChcXCRcIl0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyBpbXBsZW1lbnRzJ30sXG4gICAgICAgICAgVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnbmFtZXNwYWNlJywgZW5kOiAnOycsXG4gICAgICAgIGlsbGVnYWw6IC9bXFwuJ10vLFxuICAgICAgICBjb250YWluczogW1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAndXNlJywgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbVElUTEVfTU9ERV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnPT4nIC8vIE5vIG1hcmt1cCwganVzdCBhIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9LFxuICAgICAgU1RSSU5HLFxuICAgICAgTlVNQkVSXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHplcGhpcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=