(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_cos"],{

/***/ "./node_modules/highlight.js/lib/languages/cos.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/cos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Caché Object Script
Author: Nikita Savchenko <zitros.lab@gmail.com>
Category: enterprise, scripting
Website: https://cedocs.intersystems.com/latest/csp/docbook/DocBook.UI.Page.cls
*/

/** @type LanguageFn */
function cos (hljs) {

  var STRINGS = {
    className: 'string',
    variants: [
      {
        begin: '"',
        end: '"',
        contains: [{ // escaped
          begin: "\"\"",
          relevance: 0
        }]
      }
    ]
  };

  var NUMBERS = {
    className: "number",
    begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
    relevance: 0
  };

  var COS_KEYWORDS =
    'property parameter class classmethod clientmethod extends as break ' +
    'catch close continue do d|0 else elseif for goto halt hang h|0 if job ' +
    'j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 ' +
    'tcommit throw trollback try tstart use view while write w|0 xecute x|0 ' +
    'zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert ' +
    'zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit ' +
    'zsync ascii';

    // registered function - no need in them due to all functions are highlighted,
    // but I'll just leave this here.

    //"$bit", "$bitcount",
    //"$bitfind", "$bitlogic", "$case", "$char", "$classmethod", "$classname",
    //"$compile", "$data", "$decimal", "$double", "$extract", "$factor",
    //"$find", "$fnumber", "$get", "$increment", "$inumber", "$isobject",
    //"$isvaliddouble", "$isvalidnum", "$justify", "$length", "$list",
    //"$listbuild", "$listdata", "$listfind", "$listfromstring", "$listget",
    //"$listlength", "$listnext", "$listsame", "$listtostring", "$listvalid",
    //"$locate", "$match", "$method", "$name", "$nconvert", "$next",
    //"$normalize", "$now", "$number", "$order", "$parameter", "$piece",
    //"$prefetchoff", "$prefetchon", "$property", "$qlength", "$qsubscript",
    //"$query", "$random", "$replace", "$reverse", "$sconvert", "$select",
    //"$sortbegin", "$sortend", "$stack", "$text", "$translate", "$view",
    //"$wascii", "$wchar", "$wextract", "$wfind", "$wiswide", "$wlength",
    //"$wreverse", "$xecute", "$zabs", "$zarccos", "$zarcsin", "$zarctan",
    //"$zcos", "$zcot", "$zcsc", "$zdate", "$zdateh", "$zdatetime",
    //"$zdatetimeh", "$zexp", "$zhex", "$zln", "$zlog", "$zpower", "$zsec",
    //"$zsin", "$zsqr", "$ztan", "$ztime", "$ztimeh", "$zboolean",
    //"$zconvert", "$zcrc", "$zcyc", "$zdascii", "$zdchar", "$zf",
    //"$ziswide", "$zlascii", "$zlchar", "$zname", "$zposition", "$zqascii",
    //"$zqchar", "$zsearch", "$zseek", "$zstrip", "$zwascii", "$zwchar",
    //"$zwidth", "$zwpack", "$zwbpack", "$zwunpack", "$zwbunpack", "$zzenkaku",
    //"$change", "$mv", "$mvat", "$mvfmt", "$mvfmts", "$mviconv",
    //"$mviconvs", "$mvinmat", "$mvlover", "$mvoconv", "$mvoconvs", "$mvraise",
    //"$mvtrans", "$mvv", "$mvname", "$zbitand", "$zbitcount", "$zbitfind",
    //"$zbitget", "$zbitlen", "$zbitnot", "$zbitor", "$zbitset", "$zbitstr",
    //"$zbitxor", "$zincrement", "$znext", "$zorder", "$zprevious", "$zsort",
    //"device", "$ecode", "$estack", "$etrap", "$halt", "$horolog",
    //"$io", "$job", "$key", "$namespace", "$principal", "$quit", "$roles",
    //"$storage", "$system", "$test", "$this", "$tlevel", "$username",
    //"$x", "$y", "$za", "$zb", "$zchild", "$zeof", "$zeos", "$zerror",
    //"$zhorolog", "$zio", "$zjob", "$zmode", "$znspace", "$zparent", "$zpi",
    //"$zpos", "$zreference", "$zstorage", "$ztimestamp", "$ztimezone",
    //"$ztrap", "$zversion"

  return {
    name: 'Caché Object Script',
    case_insensitive: true,
    aliases: ["cos", "cls"],
    keywords: COS_KEYWORDS,
    contains: [
      NUMBERS,
      STRINGS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: "comment",
        begin: /;/, end: "$",
        relevance: 0
      },
      { // Functions and user-defined functions: write $ztime(60*60*3), $$myFunc(10), $$^Val(1)
        className: "built_in",
        begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
      },
      { // Macro command: quit $$$OK
        className: "built_in",
        begin: /\$\$\$[a-zA-Z]+/
      },
      { // Special (global) variables: write %request.Content; Built-in classes: %Library.Integer
        className: "built_in",
        begin: /%[a-z]+(?:\.[a-z]+)*/
      },
      { // Global variable: set ^globalName = 12 write ^globalName
        className: "symbol",
        begin: /\^%?[a-zA-Z][\w]*/
      },
      { // Some control constructions: do ##class(Package.ClassName).Method(), ##super()
        className: "keyword",
        begin: /##class|##super|#define|#dim/
      },

      // sub-languages: are not fully supported by hljs by 11/15/2015
      // left for the future implementation.
      {
        begin: /&sql\(/,    end: /\)/,
        excludeBegin: true, excludeEnd: true,
        subLanguage: "sql"
      },
      {
        begin: /&(js|jscript|javascript)</, end: />/,
        excludeBegin: true, excludeEnd: true,
        subLanguage: "javascript"
      },
      {
        // this brakes first and last tag, but this is the only way to embed a valid html
        begin: /&html<\s*</, end: />\s*>/,
        subLanguage: "xml"
      }
    ]
  };
}

module.exports = cos;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxPQUFPLHVEQUF1RDtBQUM5RDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2Nvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQ2FjaMOpIE9iamVjdCBTY3JpcHRcbkF1dGhvcjogTmlraXRhIFNhdmNoZW5rbyA8eml0cm9zLmxhYkBnbWFpbC5jb20+XG5DYXRlZ29yeTogZW50ZXJwcmlzZSwgc2NyaXB0aW5nXG5XZWJzaXRlOiBodHRwczovL2NlZG9jcy5pbnRlcnN5c3RlbXMuY29tL2xhdGVzdC9jc3AvZG9jYm9vay9Eb2NCb29rLlVJLlBhZ2UuY2xzXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY29zIChobGpzKSB7XG5cbiAgdmFyIFNUUklOR1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJ1wiJyxcbiAgICAgICAgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW3sgLy8gZXNjYXBlZFxuICAgICAgICAgIGJlZ2luOiBcIlxcXCJcXFwiXCIsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBOVU1CRVJTID0ge1xuICAgIGNsYXNzTmFtZTogXCJudW1iZXJcIixcbiAgICBiZWdpbjogXCJcXFxcYihcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKylcIixcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgQ09TX0tFWVdPUkRTID1cbiAgICAncHJvcGVydHkgcGFyYW1ldGVyIGNsYXNzIGNsYXNzbWV0aG9kIGNsaWVudG1ldGhvZCBleHRlbmRzIGFzIGJyZWFrICcgK1xuICAgICdjYXRjaCBjbG9zZSBjb250aW51ZSBkbyBkfDAgZWxzZSBlbHNlaWYgZm9yIGdvdG8gaGFsdCBoYW5nIGh8MCBpZiBqb2IgJyArXG4gICAgJ2p8MCBraWxsIGt8MCBsb2NrIGx8MCBtZXJnZSBuZXcgb3BlbiBxdWl0IHF8MCByZWFkIHJ8MCByZXR1cm4gc2V0IHN8MCAnICtcbiAgICAndGNvbW1pdCB0aHJvdyB0cm9sbGJhY2sgdHJ5IHRzdGFydCB1c2UgdmlldyB3aGlsZSB3cml0ZSB3fDAgeGVjdXRlIHh8MCAnICtcbiAgICAnemtpbGwgem5zcGFjZSB6biB6dHJhcCB6d3JpdGUgencgenpkdW1wIHp6d3JpdGUgcHJpbnQgemJyZWFrIHppbnNlcnQgJyArXG4gICAgJ3psb2FkIHpwcmludCB6cmVtb3ZlIHpzYXZlIHp6cHJpbnQgbXYgbXZjYWxsIG12Y3J0IG12ZGltIG12cHJpbnQgenF1aXQgJyArXG4gICAgJ3pzeW5jIGFzY2lpJztcblxuICAgIC8vIHJlZ2lzdGVyZWQgZnVuY3Rpb24gLSBubyBuZWVkIGluIHRoZW0gZHVlIHRvIGFsbCBmdW5jdGlvbnMgYXJlIGhpZ2hsaWdodGVkLFxuICAgIC8vIGJ1dCBJJ2xsIGp1c3QgbGVhdmUgdGhpcyBoZXJlLlxuXG4gICAgLy9cIiRiaXRcIiwgXCIkYml0Y291bnRcIixcbiAgICAvL1wiJGJpdGZpbmRcIiwgXCIkYml0bG9naWNcIiwgXCIkY2FzZVwiLCBcIiRjaGFyXCIsIFwiJGNsYXNzbWV0aG9kXCIsIFwiJGNsYXNzbmFtZVwiLFxuICAgIC8vXCIkY29tcGlsZVwiLCBcIiRkYXRhXCIsIFwiJGRlY2ltYWxcIiwgXCIkZG91YmxlXCIsIFwiJGV4dHJhY3RcIiwgXCIkZmFjdG9yXCIsXG4gICAgLy9cIiRmaW5kXCIsIFwiJGZudW1iZXJcIiwgXCIkZ2V0XCIsIFwiJGluY3JlbWVudFwiLCBcIiRpbnVtYmVyXCIsIFwiJGlzb2JqZWN0XCIsXG4gICAgLy9cIiRpc3ZhbGlkZG91YmxlXCIsIFwiJGlzdmFsaWRudW1cIiwgXCIkanVzdGlmeVwiLCBcIiRsZW5ndGhcIiwgXCIkbGlzdFwiLFxuICAgIC8vXCIkbGlzdGJ1aWxkXCIsIFwiJGxpc3RkYXRhXCIsIFwiJGxpc3RmaW5kXCIsIFwiJGxpc3Rmcm9tc3RyaW5nXCIsIFwiJGxpc3RnZXRcIixcbiAgICAvL1wiJGxpc3RsZW5ndGhcIiwgXCIkbGlzdG5leHRcIiwgXCIkbGlzdHNhbWVcIiwgXCIkbGlzdHRvc3RyaW5nXCIsIFwiJGxpc3R2YWxpZFwiLFxuICAgIC8vXCIkbG9jYXRlXCIsIFwiJG1hdGNoXCIsIFwiJG1ldGhvZFwiLCBcIiRuYW1lXCIsIFwiJG5jb252ZXJ0XCIsIFwiJG5leHRcIixcbiAgICAvL1wiJG5vcm1hbGl6ZVwiLCBcIiRub3dcIiwgXCIkbnVtYmVyXCIsIFwiJG9yZGVyXCIsIFwiJHBhcmFtZXRlclwiLCBcIiRwaWVjZVwiLFxuICAgIC8vXCIkcHJlZmV0Y2hvZmZcIiwgXCIkcHJlZmV0Y2hvblwiLCBcIiRwcm9wZXJ0eVwiLCBcIiRxbGVuZ3RoXCIsIFwiJHFzdWJzY3JpcHRcIixcbiAgICAvL1wiJHF1ZXJ5XCIsIFwiJHJhbmRvbVwiLCBcIiRyZXBsYWNlXCIsIFwiJHJldmVyc2VcIiwgXCIkc2NvbnZlcnRcIiwgXCIkc2VsZWN0XCIsXG4gICAgLy9cIiRzb3J0YmVnaW5cIiwgXCIkc29ydGVuZFwiLCBcIiRzdGFja1wiLCBcIiR0ZXh0XCIsIFwiJHRyYW5zbGF0ZVwiLCBcIiR2aWV3XCIsXG4gICAgLy9cIiR3YXNjaWlcIiwgXCIkd2NoYXJcIiwgXCIkd2V4dHJhY3RcIiwgXCIkd2ZpbmRcIiwgXCIkd2lzd2lkZVwiLCBcIiR3bGVuZ3RoXCIsXG4gICAgLy9cIiR3cmV2ZXJzZVwiLCBcIiR4ZWN1dGVcIiwgXCIkemFic1wiLCBcIiR6YXJjY29zXCIsIFwiJHphcmNzaW5cIiwgXCIkemFyY3RhblwiLFxuICAgIC8vXCIkemNvc1wiLCBcIiR6Y290XCIsIFwiJHpjc2NcIiwgXCIkemRhdGVcIiwgXCIkemRhdGVoXCIsIFwiJHpkYXRldGltZVwiLFxuICAgIC8vXCIkemRhdGV0aW1laFwiLCBcIiR6ZXhwXCIsIFwiJHpoZXhcIiwgXCIkemxuXCIsIFwiJHpsb2dcIiwgXCIkenBvd2VyXCIsIFwiJHpzZWNcIixcbiAgICAvL1wiJHpzaW5cIiwgXCIkenNxclwiLCBcIiR6dGFuXCIsIFwiJHp0aW1lXCIsIFwiJHp0aW1laFwiLCBcIiR6Ym9vbGVhblwiLFxuICAgIC8vXCIkemNvbnZlcnRcIiwgXCIkemNyY1wiLCBcIiR6Y3ljXCIsIFwiJHpkYXNjaWlcIiwgXCIkemRjaGFyXCIsIFwiJHpmXCIsXG4gICAgLy9cIiR6aXN3aWRlXCIsIFwiJHpsYXNjaWlcIiwgXCIkemxjaGFyXCIsIFwiJHpuYW1lXCIsIFwiJHpwb3NpdGlvblwiLCBcIiR6cWFzY2lpXCIsXG4gICAgLy9cIiR6cWNoYXJcIiwgXCIkenNlYXJjaFwiLCBcIiR6c2Vla1wiLCBcIiR6c3RyaXBcIiwgXCIkendhc2NpaVwiLCBcIiR6d2NoYXJcIixcbiAgICAvL1wiJHp3aWR0aFwiLCBcIiR6d3BhY2tcIiwgXCIkendicGFja1wiLCBcIiR6d3VucGFja1wiLCBcIiR6d2J1bnBhY2tcIiwgXCIkenplbmtha3VcIixcbiAgICAvL1wiJGNoYW5nZVwiLCBcIiRtdlwiLCBcIiRtdmF0XCIsIFwiJG12Zm10XCIsIFwiJG12Zm10c1wiLCBcIiRtdmljb252XCIsXG4gICAgLy9cIiRtdmljb252c1wiLCBcIiRtdmlubWF0XCIsIFwiJG12bG92ZXJcIiwgXCIkbXZvY29udlwiLCBcIiRtdm9jb252c1wiLCBcIiRtdnJhaXNlXCIsXG4gICAgLy9cIiRtdnRyYW5zXCIsIFwiJG12dlwiLCBcIiRtdm5hbWVcIiwgXCIkemJpdGFuZFwiLCBcIiR6Yml0Y291bnRcIiwgXCIkemJpdGZpbmRcIixcbiAgICAvL1wiJHpiaXRnZXRcIiwgXCIkemJpdGxlblwiLCBcIiR6Yml0bm90XCIsIFwiJHpiaXRvclwiLCBcIiR6Yml0c2V0XCIsIFwiJHpiaXRzdHJcIixcbiAgICAvL1wiJHpiaXR4b3JcIiwgXCIkemluY3JlbWVudFwiLCBcIiR6bmV4dFwiLCBcIiR6b3JkZXJcIiwgXCIkenByZXZpb3VzXCIsIFwiJHpzb3J0XCIsXG4gICAgLy9cImRldmljZVwiLCBcIiRlY29kZVwiLCBcIiRlc3RhY2tcIiwgXCIkZXRyYXBcIiwgXCIkaGFsdFwiLCBcIiRob3JvbG9nXCIsXG4gICAgLy9cIiRpb1wiLCBcIiRqb2JcIiwgXCIka2V5XCIsIFwiJG5hbWVzcGFjZVwiLCBcIiRwcmluY2lwYWxcIiwgXCIkcXVpdFwiLCBcIiRyb2xlc1wiLFxuICAgIC8vXCIkc3RvcmFnZVwiLCBcIiRzeXN0ZW1cIiwgXCIkdGVzdFwiLCBcIiR0aGlzXCIsIFwiJHRsZXZlbFwiLCBcIiR1c2VybmFtZVwiLFxuICAgIC8vXCIkeFwiLCBcIiR5XCIsIFwiJHphXCIsIFwiJHpiXCIsIFwiJHpjaGlsZFwiLCBcIiR6ZW9mXCIsIFwiJHplb3NcIiwgXCIkemVycm9yXCIsXG4gICAgLy9cIiR6aG9yb2xvZ1wiLCBcIiR6aW9cIiwgXCIkempvYlwiLCBcIiR6bW9kZVwiLCBcIiR6bnNwYWNlXCIsIFwiJHpwYXJlbnRcIiwgXCIkenBpXCIsXG4gICAgLy9cIiR6cG9zXCIsIFwiJHpyZWZlcmVuY2VcIiwgXCIkenN0b3JhZ2VcIiwgXCIkenRpbWVzdGFtcFwiLCBcIiR6dGltZXpvbmVcIixcbiAgICAvL1wiJHp0cmFwXCIsIFwiJHp2ZXJzaW9uXCJcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDYWNow6kgT2JqZWN0IFNjcmlwdCcsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBhbGlhc2VzOiBbXCJjb3NcIiwgXCJjbHNcIl0sXG4gICAga2V5d29yZHM6IENPU19LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgTlVNQkVSUyxcbiAgICAgIFNUUklOR1MsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFwiY29tbWVudFwiLFxuICAgICAgICBiZWdpbjogLzsvLCBlbmQ6IFwiJFwiLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8vIEZ1bmN0aW9ucyBhbmQgdXNlci1kZWZpbmVkIGZ1bmN0aW9uczogd3JpdGUgJHp0aW1lKDYwKjYwKjMpLCAkJG15RnVuYygxMCksICQkXlZhbCgxKVxuICAgICAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICAgICAgYmVnaW46IC8oPzpcXCRcXCQ/fFxcLlxcLilcXF4/W2EtekEtWl0rL1xuICAgICAgfSxcbiAgICAgIHsgLy8gTWFjcm8gY29tbWFuZDogcXVpdCAkJCRPS1xuICAgICAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICAgICAgYmVnaW46IC9cXCRcXCRcXCRbYS16QS1aXSsvXG4gICAgICB9LFxuICAgICAgeyAvLyBTcGVjaWFsIChnbG9iYWwpIHZhcmlhYmxlczogd3JpdGUgJXJlcXVlc3QuQ29udGVudDsgQnVpbHQtaW4gY2xhc3NlczogJUxpYnJhcnkuSW50ZWdlclxuICAgICAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICAgICAgYmVnaW46IC8lW2Etel0rKD86XFwuW2Etel0rKSovXG4gICAgICB9LFxuICAgICAgeyAvLyBHbG9iYWwgdmFyaWFibGU6IHNldCBeZ2xvYmFsTmFtZSA9IDEyIHdyaXRlIF5nbG9iYWxOYW1lXG4gICAgICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgYmVnaW46IC9cXF4lP1thLXpBLVpdW1xcd10qL1xuICAgICAgfSxcbiAgICAgIHsgLy8gU29tZSBjb250cm9sIGNvbnN0cnVjdGlvbnM6IGRvICMjY2xhc3MoUGFja2FnZS5DbGFzc05hbWUpLk1ldGhvZCgpLCAjI3N1cGVyKClcbiAgICAgICAgY2xhc3NOYW1lOiBcImtleXdvcmRcIixcbiAgICAgICAgYmVnaW46IC8jI2NsYXNzfCMjc3VwZXJ8I2RlZmluZXwjZGltL1xuICAgICAgfSxcblxuICAgICAgLy8gc3ViLWxhbmd1YWdlczogYXJlIG5vdCBmdWxseSBzdXBwb3J0ZWQgYnkgaGxqcyBieSAxMS8xNS8yMDE1XG4gICAgICAvLyBsZWZ0IGZvciB0aGUgZnV0dXJlIGltcGxlbWVudGF0aW9uLlxuICAgICAge1xuICAgICAgICBiZWdpbjogLyZzcWxcXCgvLCAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiBcInNxbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLyYoanN8anNjcmlwdHxqYXZhc2NyaXB0KTwvLCBlbmQ6IC8+LyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBzdWJMYW5ndWFnZTogXCJqYXZhc2NyaXB0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMgYnJha2VzIGZpcnN0IGFuZCBsYXN0IHRhZywgYnV0IHRoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIGVtYmVkIGEgdmFsaWQgaHRtbFxuICAgICAgICBiZWdpbjogLyZodG1sPFxccyo8LywgZW5kOiAvPlxccyo+LyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6IFwieG1sXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==