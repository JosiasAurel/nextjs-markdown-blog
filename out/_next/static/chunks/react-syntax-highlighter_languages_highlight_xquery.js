(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_xquery"],{

/***/ "./node_modules/highlight.js/lib/languages/xquery.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xquery.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: XQuery
Author: Dirk Kirsten <dk@basex.org>
Contributor: Duncan Paterson
Description: Supports XQuery 3.1 including XQuery Update 3, so also XPath (as it is a superset)
Refactored to process xml constructor syntax and function-bodies. Added missing data-types, xpath operands, inbuilt functions, and query prologs
Website: https://www.w3.org/XML/Query/
Category: functional
*/

function xquery(hljs) {
  // see https://www.w3.org/TR/xquery/#id-terminal-delimitation
  var KEYWORDS = 'module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit ' +
  'declare import option function validate variable ' +
  'for at in let where order group by return if then else ' +
  'tumbling sliding window start when only end previous next stable ' +
  'ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch ' +
  'and or to union intersect instance of treat as castable cast map array ' +
  'delete insert into replace value rename copy modify update';

  // Node Types (sorted by inheritance)
  // atomic types (sorted by inheritance)
  var TYPE = 'item document-node node attribute document element comment namespace namespace-node processing-instruction text construction ' +
  'xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration';

  var LITERAL = 'eq ne lt le gt ge is ' +
    'self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: ' +
    'NaN';

  // functions (TODO: find regex for op: without breaking build)
  var BUILT_IN = {
    className: 'built_in',
    variants: [{
      begin: /\barray\:/,
      end: /(?:append|filter|flatten|fold\-(?:left|right)|for-each(?:\-pair)?|get|head|insert\-before|join|put|remove|reverse|size|sort|subarray|tail)\b/
    }, {
      begin: /\bmap\:/,
      end: /(?:contains|entry|find|for\-each|get|keys|merge|put|remove|size)\b/
    }, {
      begin: /\bmath\:/,
      end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/
    }, {
      begin: /\bop\:/,
      end: /\(/,
      excludeEnd: true
    }, {
      begin: /\bfn\:/,
      end: /\(/,
      excludeEnd: true
    },
// do not highlight inbuilt strings as variable or xml element names
    {
      begin: /[^<\/\$\:'"-]\b(?:abs|accumulator\-(?:after|before)|adjust\-(?:date(?:Time)?|time)\-to\-timezone|analyze\-string|apply|available\-(?:environment\-variables|system\-properties)|avg|base\-uri|boolean|ceiling|codepoints?\-(?:equal|to\-string)|collation\-key|collection|compare|concat|contains(?:\-token)?|copy\-of|count|current(?:\-)?(?:date(?:Time)?|time|group(?:ing\-key)?|output\-uri|merge\-(?:group|key))?data|dateTime|days?\-from\-(?:date(?:Time)?|duration)|deep\-equal|default\-(?:collation|language)|distinct\-values|document(?:\-uri)?|doc(?:\-available)?|element\-(?:available|with\-id)|empty|encode\-for\-uri|ends\-with|environment\-variable|error|escape\-html\-uri|exactly\-one|exists|false|filter|floor|fold\-(?:left|right)|for\-each(?:\-pair)?|format\-(?:date(?:Time)?|time|integer|number)|function\-(?:arity|available|lookup|name)|generate\-id|has\-children|head|hours\-from\-(?:dateTime|duration|time)|id(?:ref)?|implicit\-timezone|in\-scope\-prefixes|index\-of|innermost|insert\-before|iri\-to\-uri|json\-(?:doc|to\-xml)|key|lang|last|load\-xquery\-module|local\-name(?:\-from\-QName)?|(?:lower|upper)\-case|matches|max|minutes\-from\-(?:dateTime|duration|time)|min|months?\-from\-(?:date(?:Time)?|duration)|name(?:space\-uri\-?(?:for\-prefix|from\-QName)?)?|nilled|node\-name|normalize\-(?:space|unicode)|not|number|one\-or\-more|outermost|parse\-(?:ietf\-date|json)|path|position|(?:prefix\-from\-)?QName|random\-number\-generator|regex\-group|remove|replace|resolve\-(?:QName|uri)|reverse|root|round(?:\-half\-to\-even)?|seconds\-from\-(?:dateTime|duration|time)|snapshot|sort|starts\-with|static\-base\-uri|stream\-available|string\-?(?:join|length|to\-codepoints)?|subsequence|substring\-?(?:after|before)?|sum|system\-property|tail|timezone\-from\-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type\-available|unordered|unparsed\-(?:entity|text)?\-?(?:public\-id|uri|available|lines)?|uri\-collection|xml\-to\-json|years?\-from\-(?:date(?:Time)?|duration)|zero\-or\-one)\b/,
    }, {
      begin: /\blocal\:/,
      end: /\(/,
      excludeEnd: true
    }, {
      begin: /\bzip\:/,
      end: /(?:zip\-file|(?:xml|html|text|binary)\-entry| (?:update\-)?entries)\b/
    }, {
      begin: /\b(?:util|db|functx|app|xdmp|xmldb)\:/,
      end: /\(/,
      excludeEnd: true
    }
  ]
  };

  var TITLE = {
    className: 'title',
    begin: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
    end: /;/
  };

  var VAR = {
    className: 'variable',
    begin: /[\$][\w-:]+/
  };

  var NUMBER = {
    className: 'number',
    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
    relevance: 0
  };

  var STRING = {
    className: 'string',
    variants: [{
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/,
          relevance: 0
        }]
      },
      {
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/,
          relevance: 0
        }]
      }
    ]
  };

  var ANNOTATION = {
    className: 'meta',
    begin: /%[\w-:]+/
  };

  var COMMENT = {
    className: 'comment',
    begin: '\\(:',
    end: ':\\)',
    relevance: 10,
    contains: [{
      className: 'doctag',
      begin: '@\\w+'
    }]
  };

  // see https://www.w3.org/TR/xquery/#id-computedConstructors
  // mocha: computed_inbuilt
  // see https://www.regexpal.com/?fam=99749
  var COMPUTED = {
    beginKeywords: 'element attribute comment document processing-instruction',
    end: '{',
    excludeEnd: true
  };

  // mocha: direct_method
    var DIRECT = {
      begin: /<([\w\._:\-]+)((\s*.*)=('|").*('|"))?>/,
      end: /(\/[\w\._:\-]+>)/,
      subLanguage: 'xml',
      contains: [{
        begin: '{',
        end: '}',
        subLanguage: 'xquery'
      }, 'self']
    };


  var CONTAINS = [
    VAR,
    BUILT_IN,
    STRING,
    NUMBER,
    COMMENT,
    ANNOTATION,
    TITLE,
    COMPUTED,
    DIRECT
  ];



  return {
    name: 'XQuery',
    aliases: ['xpath', 'xq'],
    case_insensitive: false,
    illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
    keywords: {
      $pattern: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
      keyword: KEYWORDS,
      type: TYPE,
      literal: LITERAL
    },
    contains: CONTAINS
  };
}

module.exports = xquery;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3hxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF94cXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFhRdWVyeVxuQXV0aG9yOiBEaXJrIEtpcnN0ZW4gPGRrQGJhc2V4Lm9yZz5cbkNvbnRyaWJ1dG9yOiBEdW5jYW4gUGF0ZXJzb25cbkRlc2NyaXB0aW9uOiBTdXBwb3J0cyBYUXVlcnkgMy4xIGluY2x1ZGluZyBYUXVlcnkgVXBkYXRlIDMsIHNvIGFsc28gWFBhdGggKGFzIGl0IGlzIGEgc3VwZXJzZXQpXG5SZWZhY3RvcmVkIHRvIHByb2Nlc3MgeG1sIGNvbnN0cnVjdG9yIHN5bnRheCBhbmQgZnVuY3Rpb24tYm9kaWVzLiBBZGRlZCBtaXNzaW5nIGRhdGEtdHlwZXMsIHhwYXRoIG9wZXJhbmRzLCBpbmJ1aWx0IGZ1bmN0aW9ucywgYW5kIHF1ZXJ5IHByb2xvZ3NcbldlYnNpdGU6IGh0dHBzOi8vd3d3LnczLm9yZy9YTUwvUXVlcnkvXG5DYXRlZ29yeTogZnVuY3Rpb25hbFxuKi9cblxuZnVuY3Rpb24geHF1ZXJ5KGhsanMpIHtcbiAgLy8gc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94cXVlcnkvI2lkLXRlcm1pbmFsLWRlbGltaXRhdGlvblxuICB2YXIgS0VZV09SRFMgPSAnbW9kdWxlIHNjaGVtYSBuYW1lc3BhY2UgYm91bmRhcnktc3BhY2UgcHJlc2VydmUgbm8tcHJlc2VydmUgc3RyaXAgZGVmYXVsdCBjb2xsYXRpb24gYmFzZS11cmkgb3JkZXJpbmcgY29udGV4dCBkZWNpbWFsLWZvcm1hdCBkZWNpbWFsLXNlcGFyYXRvciBjb3B5LW5hbWVzcGFjZXMgZW1wdHktc2VxdWVuY2UgZXhjZXB0IGV4cG9uZW50LXNlcGFyYXRvciBleHRlcm5hbCBncm91cGluZy1zZXBhcmF0b3IgaW5oZXJpdCBuby1pbmhlcml0IGxheCBtaW51cy1zaWduIHBlci1taWxsZSBwZXJjZW50IHNjaGVtYS1hdHRyaWJ1dGUgc2NoZW1hLWVsZW1lbnQgc3RyaWN0IHVub3JkZXJlZCB6ZXJvLWRpZ2l0ICcgK1xuICAnZGVjbGFyZSBpbXBvcnQgb3B0aW9uIGZ1bmN0aW9uIHZhbGlkYXRlIHZhcmlhYmxlICcgK1xuICAnZm9yIGF0IGluIGxldCB3aGVyZSBvcmRlciBncm91cCBieSByZXR1cm4gaWYgdGhlbiBlbHNlICcgK1xuICAndHVtYmxpbmcgc2xpZGluZyB3aW5kb3cgc3RhcnQgd2hlbiBvbmx5IGVuZCBwcmV2aW91cyBuZXh0IHN0YWJsZSAnICtcbiAgJ2FzY2VuZGluZyBkZXNjZW5kaW5nIGFsbG93aW5nIGVtcHR5IGdyZWF0ZXN0IGxlYXN0IHNvbWUgZXZlcnkgc2F0aXNmaWVzIHN3aXRjaCBjYXNlIHR5cGVzd2l0Y2ggdHJ5IGNhdGNoICcgK1xuICAnYW5kIG9yIHRvIHVuaW9uIGludGVyc2VjdCBpbnN0YW5jZSBvZiB0cmVhdCBhcyBjYXN0YWJsZSBjYXN0IG1hcCBhcnJheSAnICtcbiAgJ2RlbGV0ZSBpbnNlcnQgaW50byByZXBsYWNlIHZhbHVlIHJlbmFtZSBjb3B5IG1vZGlmeSB1cGRhdGUnO1xuXG4gIC8vIE5vZGUgVHlwZXMgKHNvcnRlZCBieSBpbmhlcml0YW5jZSlcbiAgLy8gYXRvbWljIHR5cGVzIChzb3J0ZWQgYnkgaW5oZXJpdGFuY2UpXG4gIHZhciBUWVBFID0gJ2l0ZW0gZG9jdW1lbnQtbm9kZSBub2RlIGF0dHJpYnV0ZSBkb2N1bWVudCBlbGVtZW50IGNvbW1lbnQgbmFtZXNwYWNlIG5hbWVzcGFjZS1ub2RlIHByb2Nlc3NpbmctaW5zdHJ1Y3Rpb24gdGV4dCBjb25zdHJ1Y3Rpb24gJyArXG4gICd4czphbnlBdG9taWNUeXBlIHhzOnVudHlwZWRBdG9taWMgeHM6ZHVyYXRpb24geHM6dGltZSB4czpkZWNpbWFsIHhzOmZsb2F0IHhzOmRvdWJsZSB4czpnWWVhck1vbnRoIHhzOmdZZWFyIHhzOmdNb250aERheSB4czpnTW9udGggeHM6Z0RheSB4czpib29sZWFuIHhzOmJhc2U2NEJpbmFyeSB4czpoZXhCaW5hcnkgeHM6YW55VVJJIHhzOlFOYW1lIHhzOk5PVEFUSU9OIHhzOmRhdGVUaW1lIHhzOmRhdGVUaW1lU3RhbXAgeHM6ZGF0ZSB4czpzdHJpbmcgeHM6bm9ybWFsaXplZFN0cmluZyB4czp0b2tlbiB4czpsYW5ndWFnZSB4czpOTVRPS0VOIHhzOk5hbWUgeHM6TkNOYW1lIHhzOklEIHhzOklEUkVGIHhzOkVOVElUWSB4czppbnRlZ2VyIHhzOm5vblBvc2l0aXZlSW50ZWdlciB4czpuZWdhdGl2ZUludGVnZXIgeHM6bG9uZyB4czppbnQgeHM6c2hvcnQgeHM6Ynl0ZSB4czpub25OZWdhdGl2ZUludGVnZXIgeHM6dW5pc2lnbmVkTG9uZyB4czp1bnNpZ25lZEludCB4czp1bnNpZ25lZFNob3J0IHhzOnVuc2lnbmVkQnl0ZSB4czpwb3NpdGl2ZUludGVnZXIgeHM6eWVhck1vbnRoRHVyYXRpb24geHM6ZGF5VGltZUR1cmF0aW9uJztcblxuICB2YXIgTElURVJBTCA9ICdlcSBuZSBsdCBsZSBndCBnZSBpcyAnICtcbiAgICAnc2VsZjo6IGNoaWxkOjogZGVzY2VuZGFudDo6IGRlc2NlbmRhbnQtb3Itc2VsZjo6IGF0dHJpYnV0ZTo6IGZvbGxvd2luZzo6IGZvbGxvd2luZy1zaWJsaW5nOjogcGFyZW50OjogYW5jZXN0b3I6OiBhbmNlc3Rvci1vci1zZWxmOjogcHJlY2VkaW5nOjogcHJlY2VkaW5nLXNpYmxpbmc6OiAnICtcbiAgICAnTmFOJztcblxuICAvLyBmdW5jdGlvbnMgKFRPRE86IGZpbmQgcmVnZXggZm9yIG9wOiB3aXRob3V0IGJyZWFraW5nIGJ1aWxkKVxuICB2YXIgQlVJTFRfSU4gPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIHZhcmlhbnRzOiBbe1xuICAgICAgYmVnaW46IC9cXGJhcnJheVxcOi8sXG4gICAgICBlbmQ6IC8oPzphcHBlbmR8ZmlsdGVyfGZsYXR0ZW58Zm9sZFxcLSg/OmxlZnR8cmlnaHQpfGZvci1lYWNoKD86XFwtcGFpcik/fGdldHxoZWFkfGluc2VydFxcLWJlZm9yZXxqb2lufHB1dHxyZW1vdmV8cmV2ZXJzZXxzaXplfHNvcnR8c3ViYXJyYXl8dGFpbClcXGIvXG4gICAgfSwge1xuICAgICAgYmVnaW46IC9cXGJtYXBcXDovLFxuICAgICAgZW5kOiAvKD86Y29udGFpbnN8ZW50cnl8ZmluZHxmb3JcXC1lYWNofGdldHxrZXlzfG1lcmdlfHB1dHxyZW1vdmV8c2l6ZSlcXGIvXG4gICAgfSwge1xuICAgICAgYmVnaW46IC9cXGJtYXRoXFw6LyxcbiAgICAgIGVuZDogLyg/OmEoPzpjb3N8c2lufHRhblsyXT8pfGNvc3xleHAoPzoxMCk/fGxvZyg/OjEwKT98cGl8cG93fHNpbnxzcXJ0fHRhbilcXGIvXG4gICAgfSwge1xuICAgICAgYmVnaW46IC9cXGJvcFxcOi8sXG4gICAgICBlbmQ6IC9cXCgvLFxuICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIGJlZ2luOiAvXFxiZm5cXDovLFxuICAgICAgZW5kOiAvXFwoLyxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICB9LFxuLy8gZG8gbm90IGhpZ2hsaWdodCBpbmJ1aWx0IHN0cmluZ3MgYXMgdmFyaWFibGUgb3IgeG1sIGVsZW1lbnQgbmFtZXNcbiAgICB7XG4gICAgICBiZWdpbjogL1tePFxcL1xcJFxcOidcIi1dXFxiKD86YWJzfGFjY3VtdWxhdG9yXFwtKD86YWZ0ZXJ8YmVmb3JlKXxhZGp1c3RcXC0oPzpkYXRlKD86VGltZSk/fHRpbWUpXFwtdG9cXC10aW1lem9uZXxhbmFseXplXFwtc3RyaW5nfGFwcGx5fGF2YWlsYWJsZVxcLSg/OmVudmlyb25tZW50XFwtdmFyaWFibGVzfHN5c3RlbVxcLXByb3BlcnRpZXMpfGF2Z3xiYXNlXFwtdXJpfGJvb2xlYW58Y2VpbGluZ3xjb2RlcG9pbnRzP1xcLSg/OmVxdWFsfHRvXFwtc3RyaW5nKXxjb2xsYXRpb25cXC1rZXl8Y29sbGVjdGlvbnxjb21wYXJlfGNvbmNhdHxjb250YWlucyg/OlxcLXRva2VuKT98Y29weVxcLW9mfGNvdW50fGN1cnJlbnQoPzpcXC0pPyg/OmRhdGUoPzpUaW1lKT98dGltZXxncm91cCg/OmluZ1xcLWtleSk/fG91dHB1dFxcLXVyaXxtZXJnZVxcLSg/Omdyb3VwfGtleSkpP2RhdGF8ZGF0ZVRpbWV8ZGF5cz9cXC1mcm9tXFwtKD86ZGF0ZSg/OlRpbWUpP3xkdXJhdGlvbil8ZGVlcFxcLWVxdWFsfGRlZmF1bHRcXC0oPzpjb2xsYXRpb258bGFuZ3VhZ2UpfGRpc3RpbmN0XFwtdmFsdWVzfGRvY3VtZW50KD86XFwtdXJpKT98ZG9jKD86XFwtYXZhaWxhYmxlKT98ZWxlbWVudFxcLSg/OmF2YWlsYWJsZXx3aXRoXFwtaWQpfGVtcHR5fGVuY29kZVxcLWZvclxcLXVyaXxlbmRzXFwtd2l0aHxlbnZpcm9ubWVudFxcLXZhcmlhYmxlfGVycm9yfGVzY2FwZVxcLWh0bWxcXC11cml8ZXhhY3RseVxcLW9uZXxleGlzdHN8ZmFsc2V8ZmlsdGVyfGZsb29yfGZvbGRcXC0oPzpsZWZ0fHJpZ2h0KXxmb3JcXC1lYWNoKD86XFwtcGFpcik/fGZvcm1hdFxcLSg/OmRhdGUoPzpUaW1lKT98dGltZXxpbnRlZ2VyfG51bWJlcil8ZnVuY3Rpb25cXC0oPzphcml0eXxhdmFpbGFibGV8bG9va3VwfG5hbWUpfGdlbmVyYXRlXFwtaWR8aGFzXFwtY2hpbGRyZW58aGVhZHxob3Vyc1xcLWZyb21cXC0oPzpkYXRlVGltZXxkdXJhdGlvbnx0aW1lKXxpZCg/OnJlZik/fGltcGxpY2l0XFwtdGltZXpvbmV8aW5cXC1zY29wZVxcLXByZWZpeGVzfGluZGV4XFwtb2Z8aW5uZXJtb3N0fGluc2VydFxcLWJlZm9yZXxpcmlcXC10b1xcLXVyaXxqc29uXFwtKD86ZG9jfHRvXFwteG1sKXxrZXl8bGFuZ3xsYXN0fGxvYWRcXC14cXVlcnlcXC1tb2R1bGV8bG9jYWxcXC1uYW1lKD86XFwtZnJvbVxcLVFOYW1lKT98KD86bG93ZXJ8dXBwZXIpXFwtY2FzZXxtYXRjaGVzfG1heHxtaW51dGVzXFwtZnJvbVxcLSg/OmRhdGVUaW1lfGR1cmF0aW9ufHRpbWUpfG1pbnxtb250aHM/XFwtZnJvbVxcLSg/OmRhdGUoPzpUaW1lKT98ZHVyYXRpb24pfG5hbWUoPzpzcGFjZVxcLXVyaVxcLT8oPzpmb3JcXC1wcmVmaXh8ZnJvbVxcLVFOYW1lKT8pP3xuaWxsZWR8bm9kZVxcLW5hbWV8bm9ybWFsaXplXFwtKD86c3BhY2V8dW5pY29kZSl8bm90fG51bWJlcnxvbmVcXC1vclxcLW1vcmV8b3V0ZXJtb3N0fHBhcnNlXFwtKD86aWV0ZlxcLWRhdGV8anNvbil8cGF0aHxwb3NpdGlvbnwoPzpwcmVmaXhcXC1mcm9tXFwtKT9RTmFtZXxyYW5kb21cXC1udW1iZXJcXC1nZW5lcmF0b3J8cmVnZXhcXC1ncm91cHxyZW1vdmV8cmVwbGFjZXxyZXNvbHZlXFwtKD86UU5hbWV8dXJpKXxyZXZlcnNlfHJvb3R8cm91bmQoPzpcXC1oYWxmXFwtdG9cXC1ldmVuKT98c2Vjb25kc1xcLWZyb21cXC0oPzpkYXRlVGltZXxkdXJhdGlvbnx0aW1lKXxzbmFwc2hvdHxzb3J0fHN0YXJ0c1xcLXdpdGh8c3RhdGljXFwtYmFzZVxcLXVyaXxzdHJlYW1cXC1hdmFpbGFibGV8c3RyaW5nXFwtPyg/OmpvaW58bGVuZ3RofHRvXFwtY29kZXBvaW50cyk/fHN1YnNlcXVlbmNlfHN1YnN0cmluZ1xcLT8oPzphZnRlcnxiZWZvcmUpP3xzdW18c3lzdGVtXFwtcHJvcGVydHl8dGFpbHx0aW1lem9uZVxcLWZyb21cXC0oPzpkYXRlKD86VGltZSk/fHRpbWUpfHRva2VuaXplfHRyYWNlfHRyYW5zKD86Zm9ybXxsYXRlKXx0cnVlfHR5cGVcXC1hdmFpbGFibGV8dW5vcmRlcmVkfHVucGFyc2VkXFwtKD86ZW50aXR5fHRleHQpP1xcLT8oPzpwdWJsaWNcXC1pZHx1cml8YXZhaWxhYmxlfGxpbmVzKT98dXJpXFwtY29sbGVjdGlvbnx4bWxcXC10b1xcLWpzb258eWVhcnM/XFwtZnJvbVxcLSg/OmRhdGUoPzpUaW1lKT98ZHVyYXRpb24pfHplcm9cXC1vclxcLW9uZSlcXGIvLFxuICAgIH0sIHtcbiAgICAgIGJlZ2luOiAvXFxibG9jYWxcXDovLFxuICAgICAgZW5kOiAvXFwoLyxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICB9LCB7XG4gICAgICBiZWdpbjogL1xcYnppcFxcOi8sXG4gICAgICBlbmQ6IC8oPzp6aXBcXC1maWxlfCg/OnhtbHxodG1sfHRleHR8YmluYXJ5KVxcLWVudHJ5fCAoPzp1cGRhdGVcXC0pP2VudHJpZXMpXFxiL1xuICAgIH0sIHtcbiAgICAgIGJlZ2luOiAvXFxiKD86dXRpbHxkYnxmdW5jdHh8YXBwfHhkbXB8eG1sZGIpXFw6LyxcbiAgICAgIGVuZDogL1xcKC8sXG4gICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgfVxuICBdXG4gIH07XG5cbiAgdmFyIFRJVExFID0ge1xuICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICBiZWdpbjogL1xcYnhxdWVyeSB2ZXJzaW9uIFwiWzEzXVxcLlswMV1cIlxccz8oPzplbmNvZGluZyBcIi4rXCIpPy8sXG4gICAgZW5kOiAvOy9cbiAgfTtcblxuICB2YXIgVkFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogL1tcXCRdW1xcdy06XSsvXG4gIH07XG5cbiAgdmFyIE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnKFxcXFxiMFswLTdfXSspfChcXFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyk/KXxbMF9dXFxcXGInLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW3tcbiAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgYmVnaW46IC9cIlwiLyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgIGVuZDogLycvLFxuICAgICAgICBjb250YWluczogW3tcbiAgICAgICAgICBiZWdpbjogLycnLyxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIEFOTk9UQVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46IC8lW1xcdy06XSsvXG4gIH07XG5cbiAgdmFyIENPTU1FTlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgYmVnaW46ICdcXFxcKDonLFxuICAgIGVuZDogJzpcXFxcKScsXG4gICAgcmVsZXZhbmNlOiAxMCxcbiAgICBjb250YWluczogW3tcbiAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICBiZWdpbjogJ0BcXFxcdysnXG4gICAgfV1cbiAgfTtcblxuICAvLyBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hxdWVyeS8jaWQtY29tcHV0ZWRDb25zdHJ1Y3RvcnNcbiAgLy8gbW9jaGE6IGNvbXB1dGVkX2luYnVpbHRcbiAgLy8gc2VlIGh0dHBzOi8vd3d3LnJlZ2V4cGFsLmNvbS8/ZmFtPTk5NzQ5XG4gIHZhciBDT01QVVRFRCA9IHtcbiAgICBiZWdpbktleXdvcmRzOiAnZWxlbWVudCBhdHRyaWJ1dGUgY29tbWVudCBkb2N1bWVudCBwcm9jZXNzaW5nLWluc3RydWN0aW9uJyxcbiAgICBlbmQ6ICd7JyxcbiAgICBleGNsdWRlRW5kOiB0cnVlXG4gIH07XG5cbiAgLy8gbW9jaGE6IGRpcmVjdF9tZXRob2RcbiAgICB2YXIgRElSRUNUID0ge1xuICAgICAgYmVnaW46IC88KFtcXHdcXC5fOlxcLV0rKSgoXFxzKi4qKT0oJ3xcIikuKignfFwiKSk/Pi8sXG4gICAgICBlbmQ6IC8oXFwvW1xcd1xcLl86XFwtXSs+KS8sXG4gICAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgICBjb250YWluczogW3tcbiAgICAgICAgYmVnaW46ICd7JyxcbiAgICAgICAgZW5kOiAnfScsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAneHF1ZXJ5J1xuICAgICAgfSwgJ3NlbGYnXVxuICAgIH07XG5cblxuICB2YXIgQ09OVEFJTlMgPSBbXG4gICAgVkFSLFxuICAgIEJVSUxUX0lOLFxuICAgIFNUUklORyxcbiAgICBOVU1CRVIsXG4gICAgQ09NTUVOVCxcbiAgICBBTk5PVEFUSU9OLFxuICAgIFRJVExFLFxuICAgIENPTVBVVEVELFxuICAgIERJUkVDVFxuICBdO1xuXG5cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdYUXVlcnknLFxuICAgIGFsaWFzZXM6IFsneHBhdGgnLCAneHEnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiBmYWxzZSxcbiAgICBpbGxlZ2FsOiAvKHByb2MpfChhYnN0cmFjdCl8KGV4dGVuZHMpfCh1bnRpbCl8KCMpLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9bYS16QS1aXFwkXVthLXpBLVowLTlfOlxcLV0qLyxcbiAgICAgIGtleXdvcmQ6IEtFWVdPUkRTLFxuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGxpdGVyYWw6IExJVEVSQUxcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBDT05UQUlOU1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHhxdWVyeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=