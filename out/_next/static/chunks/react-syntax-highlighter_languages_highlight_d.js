(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_d"],{

/***/ "./node_modules/highlight.js/lib/languages/d.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/d.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: D
Author: Aleksandar Ruzicic <aleksandar@ruzicic.info>
Description: D is a language with C-like syntax and static typing. It pragmatically combines efficiency, control, and modeling power, with safety and programmer productivity.
Version: 1.0a
Website: https://dlang.org
Date: 2012-04-08
*/

/**
 * Known issues:
 *
 * - invalid hex string literals will be recognized as a double quoted strings
 *   but 'x' at the beginning of string will not be matched
 *
 * - delimited string literals are not checked for matching end delimiter
 *   (not possible to do with js regexp)
 *
 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
 *   also, content of token string is not validated to contain only valid D tokens
 *
 * - special token sequence rule is not strictly following D grammar (anything following #line
 *   up to the end of line is matched as special token sequence)
 */

/** @type LanguageFn */
function d(hljs) {
  /**
   * Language keywords
   *
   * @type {Object}
   */
  var D_KEYWORDS = {
    $pattern: hljs.UNDERSCORE_IDENT_RE,
    keyword:
      'abstract alias align asm assert auto body break byte case cast catch class ' +
      'const continue debug default delete deprecated do else enum export extern final ' +
      'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +
      'interface invariant is lazy macro mixin module new nothrow out override package ' +
      'pragma private protected public pure ref return scope shared static struct ' +
      'super switch synchronized template this throw try typedef typeid typeof union ' +
      'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +
      '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
    built_in:
      'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +
      'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +
      'wstring',
    literal:
      'false null true'
  };

  /**
   * Number literal regexps
   *
   * @type {String}
   */
  var decimal_integer_re = '(0|[1-9][\\d_]*)',
    decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
    binary_integer_re = '0[bB][01_]+',
    hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
    hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,

    decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',
    decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' +
                '\\d+\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' +
                '\\.' + decimal_integer_re + decimal_exponent_re + '?' +
              ')',
    hexadecimal_float_re = '(0[xX](' +
                  hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|'+
                  '\\.?' + hexadecimal_digits_re +
                 ')[pP][+-]?' + decimal_integer_nosus_re + ')',

    integer_re = '(' +
      decimal_integer_re + '|' +
      binary_integer_re  + '|' +
       hexadecimal_integer_re   +
    ')',

    float_re = '(' +
      hexadecimal_float_re + '|' +
      decimal_float_re  +
    ')';

  /**
   * Escape sequence supported in D string and character literals
   *
   * @type {String}
   */
  var escape_sequence_re = '\\\\(' +
              '[\'"\\?\\\\abfnrtv]|' +  // common escapes
              'u[\\dA-Fa-f]{4}|' +     // four hex digit unicode codepoint
              '[0-7]{1,3}|' +       // one to three octal digit ascii char code
              'x[\\dA-Fa-f]{2}|' +    // two hex digit ascii char code
              'U[\\dA-Fa-f]{8}' +      // eight hex digit unicode codepoint
              ')|' +
              '&[a-zA-Z\\d]{2,};';      // named character entity

  /**
   * D integer number literals
   *
   * @type {Object}
   */
  var D_INTEGER_MODE = {
    className: 'number',
      begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
      relevance: 0
  };

  /**
   * [D_FLOAT_MODE description]
   * @type {Object}
   */
  var D_FLOAT_MODE = {
    className: 'number',
    begin: '\\b(' +
        float_re + '([fF]|L|i|[fF]i|Li)?|' +
        integer_re + '(i|[fF]i|Li)' +
      ')',
    relevance: 0
  };

  /**
   * D character literal
   *
   * @type {Object}
   */
  var D_CHARACTER_MODE = {
    className: 'string',
    begin: '\'(' + escape_sequence_re + '|.)', end: '\'',
    illegal: '.'
  };

  /**
   * D string escape sequence
   *
   * @type {Object}
   */
  var D_ESCAPE_SEQUENCE = {
    begin: escape_sequence_re,
    relevance: 0
  };

  /**
   * D double quoted string literal
   *
   * @type {Object}
   */
  var D_STRING_MODE = {
    className: 'string',
    begin: '"',
    contains: [D_ESCAPE_SEQUENCE],
    end: '"[cwd]?'
  };

  /**
   * D wysiwyg and delimited string literals
   *
   * @type {Object}
   */
  var D_WYSIWYG_DELIMITED_STRING_MODE = {
    className: 'string',
    begin: '[rq]"',
    end: '"[cwd]?',
    relevance: 5
  };

  /**
   * D alternate wysiwyg string literal
   *
   * @type {Object}
   */
  var D_ALTERNATE_WYSIWYG_STRING_MODE = {
    className: 'string',
    begin: '`',
    end: '`[cwd]?'
  };

  /**
   * D hexadecimal string literal
   *
   * @type {Object}
   */
  var D_HEX_STRING_MODE = {
    className: 'string',
    begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
    relevance: 10
  };

  /**
   * D delimited string literal
   *
   * @type {Object}
   */
  var D_TOKEN_STRING_MODE = {
    className: 'string',
    begin: 'q"\\{',
    end: '\\}"'
  };

  /**
   * Hashbang support
   *
   * @type {Object}
   */
  var D_HASHBANG_MODE = {
    className: 'meta',
    begin: '^#!',
    end: '$',
    relevance: 5
  };

  /**
   * D special token sequence
   *
   * @type {Object}
   */
  var D_SPECIAL_TOKEN_SEQUENCE_MODE = {
    className: 'meta',
    begin: '#(line)',
    end: '$',
    relevance: 5
  };

  /**
   * D attributes
   *
   * @type {Object}
   */
  var D_ATTRIBUTE_MODE = {
    className: 'keyword',
    begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
  };

  /**
   * D nesting comment
   *
   * @type {Object}
   */
  var D_NESTING_COMMENT_MODE = hljs.COMMENT(
    '\\/\\+',
    '\\+\\/',
    {
      contains: ['self'],
      relevance: 10
    }
  );

  return {
    name: 'D',
    keywords: D_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        D_NESTING_COMMENT_MODE,
        D_HEX_STRING_MODE,
        D_STRING_MODE,
        D_WYSIWYG_DELIMITED_STRING_MODE,
        D_ALTERNATE_WYSIWYG_STRING_MODE,
        D_TOKEN_STRING_MODE,
        D_FLOAT_MODE,
        D_INTEGER_MODE,
        D_CHARACTER_MODE,
        D_HASHBANG_MODE,
        D_SPECIAL_TOKEN_SEQUENCE_MODE,
        D_ATTRIBUTE_MODE
    ]
  };
}

module.exports = d;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRTtBQUM5QixxQkFBcUIsSUFBSTtBQUN6Qiw0QkFBNEIsRUFBRTtBQUM5Qiw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBLDRCQUE0QixJQUFJLEVBQUU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRFxuQXV0aG9yOiBBbGVrc2FuZGFyIFJ1emljaWMgPGFsZWtzYW5kYXJAcnV6aWNpYy5pbmZvPlxuRGVzY3JpcHRpb246IEQgaXMgYSBsYW5ndWFnZSB3aXRoIEMtbGlrZSBzeW50YXggYW5kIHN0YXRpYyB0eXBpbmcuIEl0IHByYWdtYXRpY2FsbHkgY29tYmluZXMgZWZmaWNpZW5jeSwgY29udHJvbCwgYW5kIG1vZGVsaW5nIHBvd2VyLCB3aXRoIHNhZmV0eSBhbmQgcHJvZ3JhbW1lciBwcm9kdWN0aXZpdHkuXG5WZXJzaW9uOiAxLjBhXG5XZWJzaXRlOiBodHRwczovL2RsYW5nLm9yZ1xuRGF0ZTogMjAxMi0wNC0wOFxuKi9cblxuLyoqXG4gKiBLbm93biBpc3N1ZXM6XG4gKlxuICogLSBpbnZhbGlkIGhleCBzdHJpbmcgbGl0ZXJhbHMgd2lsbCBiZSByZWNvZ25pemVkIGFzIGEgZG91YmxlIHF1b3RlZCBzdHJpbmdzXG4gKiAgIGJ1dCAneCcgYXQgdGhlIGJlZ2lubmluZyBvZiBzdHJpbmcgd2lsbCBub3QgYmUgbWF0Y2hlZFxuICpcbiAqIC0gZGVsaW1pdGVkIHN0cmluZyBsaXRlcmFscyBhcmUgbm90IGNoZWNrZWQgZm9yIG1hdGNoaW5nIGVuZCBkZWxpbWl0ZXJcbiAqICAgKG5vdCBwb3NzaWJsZSB0byBkbyB3aXRoIGpzIHJlZ2V4cClcbiAqXG4gKiAtIGNvbnRlbnQgb2YgdG9rZW4gc3RyaW5nIGlzIGNvbG9yZWQgYXMgYSBzdHJpbmcgKGkuZS4gbm8ga2V5d29yZCBjb2xvcmluZyBpbnNpZGUgYSB0b2tlbiBzdHJpbmcpXG4gKiAgIGFsc28sIGNvbnRlbnQgb2YgdG9rZW4gc3RyaW5nIGlzIG5vdCB2YWxpZGF0ZWQgdG8gY29udGFpbiBvbmx5IHZhbGlkIEQgdG9rZW5zXG4gKlxuICogLSBzcGVjaWFsIHRva2VuIHNlcXVlbmNlIHJ1bGUgaXMgbm90IHN0cmljdGx5IGZvbGxvd2luZyBEIGdyYW1tYXIgKGFueXRoaW5nIGZvbGxvd2luZyAjbGluZVxuICogICB1cCB0byB0aGUgZW5kIG9mIGxpbmUgaXMgbWF0Y2hlZCBhcyBzcGVjaWFsIHRva2VuIHNlcXVlbmNlKVxuICovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBkKGhsanMpIHtcbiAgLyoqXG4gICAqIExhbmd1YWdlIGtleXdvcmRzXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9LRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgIGtleXdvcmQ6XG4gICAgICAnYWJzdHJhY3QgYWxpYXMgYWxpZ24gYXNtIGFzc2VydCBhdXRvIGJvZHkgYnJlYWsgYnl0ZSBjYXNlIGNhc3QgY2F0Y2ggY2xhc3MgJyArXG4gICAgICAnY29uc3QgY29udGludWUgZGVidWcgZGVmYXVsdCBkZWxldGUgZGVwcmVjYXRlZCBkbyBlbHNlIGVudW0gZXhwb3J0IGV4dGVybiBmaW5hbCAnICtcbiAgICAgICdmaW5hbGx5IGZvciBmb3JlYWNoIGZvcmVhY2hfcmV2ZXJzZXwxMCBnb3RvIGlmIGltbXV0YWJsZSBpbXBvcnQgaW4gaW5vdXQgaW50ICcgK1xuICAgICAgJ2ludGVyZmFjZSBpbnZhcmlhbnQgaXMgbGF6eSBtYWNybyBtaXhpbiBtb2R1bGUgbmV3IG5vdGhyb3cgb3V0IG92ZXJyaWRlIHBhY2thZ2UgJyArXG4gICAgICAncHJhZ21hIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyBwdXJlIHJlZiByZXR1cm4gc2NvcGUgc2hhcmVkIHN0YXRpYyBzdHJ1Y3QgJyArXG4gICAgICAnc3VwZXIgc3dpdGNoIHN5bmNocm9uaXplZCB0ZW1wbGF0ZSB0aGlzIHRocm93IHRyeSB0eXBlZGVmIHR5cGVpZCB0eXBlb2YgdW5pb24gJyArXG4gICAgICAndW5pdHRlc3QgdmVyc2lvbiB2b2lkIHZvbGF0aWxlIHdoaWxlIHdpdGggX19GSUxFX18gX19MSU5FX18gX19nc2hhcmVkfDEwICcgK1xuICAgICAgJ19fdGhyZWFkIF9fdHJhaXRzIF9fREFURV9fIF9fRU9GX18gX19USU1FX18gX19USU1FU1RBTVBfXyBfX1ZFTkRPUl9fIF9fVkVSU0lPTl9fJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdib29sIGNkb3VibGUgY2VudCBjZmxvYXQgY2hhciBjcmVhbCBkY2hhciBkZWxlZ2F0ZSBkb3VibGUgZHN0cmluZyBmbG9hdCBmdW5jdGlvbiAnICtcbiAgICAgICdpZG91YmxlIGlmbG9hdCBpcmVhbCBsb25nIHJlYWwgc2hvcnQgc3RyaW5nIHVieXRlIHVjZW50IHVpbnQgdWxvbmcgdXNob3J0IHdjaGFyICcgK1xuICAgICAgJ3dzdHJpbmcnLFxuICAgIGxpdGVyYWw6XG4gICAgICAnZmFsc2UgbnVsbCB0cnVlJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgbGl0ZXJhbCByZWdleHBzXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICB2YXIgZGVjaW1hbF9pbnRlZ2VyX3JlID0gJygwfFsxLTldW1xcXFxkX10qKScsXG4gICAgZGVjaW1hbF9pbnRlZ2VyX25vc3VzX3JlID0gJygwfFsxLTldW1xcXFxkX10qfFxcXFxkW1xcXFxkX10qfFtcXFxcZF9dKz9cXFxcZCknLFxuICAgIGJpbmFyeV9pbnRlZ2VyX3JlID0gJzBbYkJdWzAxX10rJyxcbiAgICBoZXhhZGVjaW1hbF9kaWdpdHNfcmUgPSAnKFtcXFxcZGEtZkEtRl1bXFxcXGRhLWZBLUZfXSp8X1tcXFxcZGEtZkEtRl1bXFxcXGRhLWZBLUZfXSopJyxcbiAgICBoZXhhZGVjaW1hbF9pbnRlZ2VyX3JlID0gJzBbeFhdJyArIGhleGFkZWNpbWFsX2RpZ2l0c19yZSxcblxuICAgIGRlY2ltYWxfZXhwb25lbnRfcmUgPSAnKFtlRV1bKy1dPycgKyBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgKyAnKScsXG4gICAgZGVjaW1hbF9mbG9hdF9yZSA9ICcoJyArIGRlY2ltYWxfaW50ZWdlcl9ub3N1c19yZSArICcoXFxcXC5cXFxcZCp8JyArIGRlY2ltYWxfZXhwb25lbnRfcmUgKyAnKXwnICtcbiAgICAgICAgICAgICAgICAnXFxcXGQrXFxcXC4nICsgZGVjaW1hbF9pbnRlZ2VyX25vc3VzX3JlICsgZGVjaW1hbF9pbnRlZ2VyX25vc3VzX3JlICsgJ3wnICtcbiAgICAgICAgICAgICAgICAnXFxcXC4nICsgZGVjaW1hbF9pbnRlZ2VyX3JlICsgZGVjaW1hbF9leHBvbmVudF9yZSArICc/JyArXG4gICAgICAgICAgICAgICcpJyxcbiAgICBoZXhhZGVjaW1hbF9mbG9hdF9yZSA9ICcoMFt4WF0oJyArXG4gICAgICAgICAgICAgICAgICBoZXhhZGVjaW1hbF9kaWdpdHNfcmUgKyAnXFxcXC4nICsgaGV4YWRlY2ltYWxfZGlnaXRzX3JlICsgJ3wnK1xuICAgICAgICAgICAgICAgICAgJ1xcXFwuPycgKyBoZXhhZGVjaW1hbF9kaWdpdHNfcmUgK1xuICAgICAgICAgICAgICAgICAnKVtwUF1bKy1dPycgKyBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgKyAnKScsXG5cbiAgICBpbnRlZ2VyX3JlID0gJygnICtcbiAgICAgIGRlY2ltYWxfaW50ZWdlcl9yZSArICd8JyArXG4gICAgICBiaW5hcnlfaW50ZWdlcl9yZSAgKyAnfCcgK1xuICAgICAgIGhleGFkZWNpbWFsX2ludGVnZXJfcmUgICArXG4gICAgJyknLFxuXG4gICAgZmxvYXRfcmUgPSAnKCcgK1xuICAgICAgaGV4YWRlY2ltYWxfZmxvYXRfcmUgKyAnfCcgK1xuICAgICAgZGVjaW1hbF9mbG9hdF9yZSAgK1xuICAgICcpJztcblxuICAvKipcbiAgICogRXNjYXBlIHNlcXVlbmNlIHN1cHBvcnRlZCBpbiBEIHN0cmluZyBhbmQgY2hhcmFjdGVyIGxpdGVyYWxzXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICB2YXIgZXNjYXBlX3NlcXVlbmNlX3JlID0gJ1xcXFxcXFxcKCcgK1xuICAgICAgICAgICAgICAnW1xcJ1wiXFxcXD9cXFxcXFxcXGFiZm5ydHZdfCcgKyAgLy8gY29tbW9uIGVzY2FwZXNcbiAgICAgICAgICAgICAgJ3VbXFxcXGRBLUZhLWZdezR9fCcgKyAgICAgLy8gZm91ciBoZXggZGlnaXQgdW5pY29kZSBjb2RlcG9pbnRcbiAgICAgICAgICAgICAgJ1swLTddezEsM318JyArICAgICAgIC8vIG9uZSB0byB0aHJlZSBvY3RhbCBkaWdpdCBhc2NpaSBjaGFyIGNvZGVcbiAgICAgICAgICAgICAgJ3hbXFxcXGRBLUZhLWZdezJ9fCcgKyAgICAvLyB0d28gaGV4IGRpZ2l0IGFzY2lpIGNoYXIgY29kZVxuICAgICAgICAgICAgICAnVVtcXFxcZEEtRmEtZl17OH0nICsgICAgICAvLyBlaWdodCBoZXggZGlnaXQgdW5pY29kZSBjb2RlcG9pbnRcbiAgICAgICAgICAgICAgJyl8JyArXG4gICAgICAgICAgICAgICcmW2EtekEtWlxcXFxkXXsyLH07JzsgICAgICAvLyBuYW1lZCBjaGFyYWN0ZXIgZW50aXR5XG5cbiAgLyoqXG4gICAqIEQgaW50ZWdlciBudW1iZXIgbGl0ZXJhbHNcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX0lOVEVHRVJfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46ICdcXFxcYicgKyBpbnRlZ2VyX3JlICsgJyhMfHV8VXxMdXxMVXx1THxVTCk/JyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIC8qKlxuICAgKiBbRF9GTE9BVF9NT0RFIGRlc2NyaXB0aW9uXVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERfRkxPQVRfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnXFxcXGIoJyArXG4gICAgICAgIGZsb2F0X3JlICsgJyhbZkZdfEx8aXxbZkZdaXxMaSk/fCcgK1xuICAgICAgICBpbnRlZ2VyX3JlICsgJyhpfFtmRl1pfExpKScgK1xuICAgICAgJyknLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIC8qKlxuICAgKiBEIGNoYXJhY3RlciBsaXRlcmFsXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9DSEFSQUNURVJfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFwnKCcgKyBlc2NhcGVfc2VxdWVuY2VfcmUgKyAnfC4pJywgZW5kOiAnXFwnJyxcbiAgICBpbGxlZ2FsOiAnLidcbiAgfTtcblxuICAvKipcbiAgICogRCBzdHJpbmcgZXNjYXBlIHNlcXVlbmNlXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9FU0NBUEVfU0VRVUVOQ0UgPSB7XG4gICAgYmVnaW46IGVzY2FwZV9zZXF1ZW5jZV9yZSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICAvKipcbiAgICogRCBkb3VibGUgcXVvdGVkIHN0cmluZyBsaXRlcmFsXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbRF9FU0NBUEVfU0VRVUVOQ0VdLFxuICAgIGVuZDogJ1wiW2N3ZF0/J1xuICB9O1xuXG4gIC8qKlxuICAgKiBEIHd5c2l3eWcgYW5kIGRlbGltaXRlZCBzdHJpbmcgbGl0ZXJhbHNcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX1dZU0lXWUdfREVMSU1JVEVEX1NUUklOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdbcnFdXCInLFxuICAgIGVuZDogJ1wiW2N3ZF0/JyxcbiAgICByZWxldmFuY2U6IDVcbiAgfTtcblxuICAvKipcbiAgICogRCBhbHRlcm5hdGUgd3lzaXd5ZyBzdHJpbmcgbGl0ZXJhbFxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERfQUxURVJOQVRFX1dZU0lXWUdfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ2AnLFxuICAgIGVuZDogJ2BbY3dkXT8nXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgaGV4YWRlY2ltYWwgc3RyaW5nIGxpdGVyYWxcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX0hFWF9TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAneFwiW1xcXFxkYS1mQS1GXFxcXHNcXFxcblxcXFxyXSpcIltjd2RdPycsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuXG4gIC8qKlxuICAgKiBEIGRlbGltaXRlZCBzdHJpbmcgbGl0ZXJhbFxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERfVE9LRU5fU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ3FcIlxcXFx7JyxcbiAgICBlbmQ6ICdcXFxcfVwiJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYXNoYmFuZyBzdXBwb3J0XG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9IQVNIQkFOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnXiMhJyxcbiAgICBlbmQ6ICckJyxcbiAgICByZWxldmFuY2U6IDVcbiAgfTtcblxuICAvKipcbiAgICogRCBzcGVjaWFsIHRva2VuIHNlcXVlbmNlXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9TUEVDSUFMX1RPS0VOX1NFUVVFTkNFX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICcjKGxpbmUpJyxcbiAgICBlbmQ6ICckJyxcbiAgICByZWxldmFuY2U6IDVcbiAgfTtcblxuICAvKipcbiAgICogRCBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9BVFRSSUJVVEVfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogJ0BbYS16QS1aX11bYS16QS1aX1xcXFxkXSonXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgbmVzdGluZyBjb21tZW50XG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9ORVNUSU5HX0NPTU1FTlRfTU9ERSA9IGhsanMuQ09NTUVOVChcbiAgICAnXFxcXC9cXFxcKycsXG4gICAgJ1xcXFwrXFxcXC8nLFxuICAgIHtcbiAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXSxcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRCcsXG4gICAga2V5d29yZHM6IERfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgRF9ORVNUSU5HX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgRF9IRVhfU1RSSU5HX01PREUsXG4gICAgICAgIERfU1RSSU5HX01PREUsXG4gICAgICAgIERfV1lTSVdZR19ERUxJTUlURURfU1RSSU5HX01PREUsXG4gICAgICAgIERfQUxURVJOQVRFX1dZU0lXWUdfU1RSSU5HX01PREUsXG4gICAgICAgIERfVE9LRU5fU1RSSU5HX01PREUsXG4gICAgICAgIERfRkxPQVRfTU9ERSxcbiAgICAgICAgRF9JTlRFR0VSX01PREUsXG4gICAgICAgIERfQ0hBUkFDVEVSX01PREUsXG4gICAgICAgIERfSEFTSEJBTkdfTU9ERSxcbiAgICAgICAgRF9TUEVDSUFMX1RPS0VOX1NFUVVFTkNFX01PREUsXG4gICAgICAgIERfQVRUUklCVVRFX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=