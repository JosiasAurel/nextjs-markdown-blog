(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_powershell"],{

/***/ "./node_modules/highlight.js/lib/languages/powershell.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/powershell.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: PowerShell
Description: PowerShell is a task-based command-line shell and scripting language built on .NET.
Author: David Mohundro <david@mohundro.com>
Contributors: Nicholas Blumhardt <nblumhardt@nblumhardt.com>, Victor Zhou <OiCMudkips@users.noreply.github.com>, Nicolas Le Gall <contact@nlegall.fr>
Website: https://docs.microsoft.com/en-us/powershell/
*/

function powershell(hljs) {

  var TYPES =
    ["string", "char", "byte", "int", "long", "bool",  "decimal",  "single",
     "double", "DateTime", "xml", "array", "hashtable", "void"];

  // https://msdn.microsoft.com/en-us/library/ms714428(v=vs.85).aspx
  var VALID_VERBS =
    'Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|' +
    'Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|' +
    'Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|' +
    'Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|' +
    'ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|' +
    'Limit|Merge|New|Out|Publish|Restore|Save|Sync|Unpublish|Update|' +
    'Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|' +
    'Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|' +
    'Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|' +
    'Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|' +
    'Unprotect|Use|ForEach|Sort|Tee|Where';

  var COMPARISON_OPERATORS =
    '-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|' +
    '-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|' +
    '-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|' +
    '-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|' +
    '-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|' +
    '-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|' +
    '-split|-wildcard|-xor';

  var KEYWORDS = {
    $pattern: /-?[A-z\.\-]+\b/,
    keyword: 'if else foreach return do while until elseif begin for trap data dynamicparam ' +
    'end break throw param continue finally in switch exit filter try process catch ' +
    'hidden static parameter',
    // "echo" relevance has been set to 0 to avoid auto-detect conflicts with shell transcripts
    built_in: 'ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp ' +
    'cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx ' +
    'fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group ' +
    'gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi ' +
    'iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh ' +
    'popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp ' +
    'rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp ' +
    'spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write'
    // TODO: 'validate[A-Z]+' can't work in keywords
  };

  var TITLE_NAME_RE = /\w[\w\d]*((-)[\w\d]+)*/;

  var BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]',
    relevance: 0
  };

  var VAR = {
    className: 'variable',
    variants: [
      { begin: /\$\B/ },
      { className: 'keyword', begin: /\$this/ },
      { begin: /\$[\w\d][\w\d_:]*/ }
    ]
  };

  var LITERAL = {
    className: 'literal',
    begin: /\$(null|true|false)\b/
  };

  var QUOTE_STRING = {
    className: "string",
    variants: [{ begin: /"/, end: /"/ }, { begin: /@"/, end: /^"@/ }],
    contains: [
      BACKTICK_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$[A-z]/, end: /[^A-z]/
      }
    ]
  };

  var APOS_STRING = {
    className: 'string',
    variants: [
      { begin: /'/, end: /'/ },
      { begin: /@'/, end: /^'@/ }
    ]
  };

  var PS_HELPTAGS = {
    className: "doctag",
    variants: [
      /* no paramater help tags */
      {
        begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
      },
      /* one parameter help tags */
      { begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/ }
    ]
  };

  var PS_COMMENT = hljs.inherit(
    hljs.COMMENT(null, null),
    {
      variants: [
        /* single-line comment */
        { begin: /#/, end: /$/ },
        /* multi-line comment */
        { begin: /<#/, end: /#>/ }
      ],
      contains: [PS_HELPTAGS]
    }
  );

  var CMDLETS = {
    className: 'built_in',
    variants: [
      { begin: '('.concat(VALID_VERBS, ')+(-)[\\w\\d]+') }
    ]
  };

  var PS_CLASS = {
    className: 'class',
    beginKeywords: 'class enum', end: /\s*[{]/, excludeEnd: true,
    relevance: 0,
    contains: [hljs.TITLE_MODE]
  };

  var PS_FUNCTION = {
    className: 'function',
    begin: /function\s+/, end: /\s*\{|$/,
    excludeEnd: true,
    returnBegin: true,
    relevance: 0,
    contains: [
      { begin: "function", relevance: 0, className: "keyword" },
      { className: "title",
        begin: TITLE_NAME_RE, relevance:0 },
      { begin: /\(/, end: /\)/, className: "params",
        relevance: 0,
        contains: [VAR] }
      // CMDLETS
    ]
  };

  // Using statment, plus type, plus assembly name.
  var PS_USING = {
    begin: /using\s/, end: /$/,
    returnBegin: true,
    contains: [
      QUOTE_STRING,
      APOS_STRING,
      { className: 'keyword', begin: /(using|assembly|command|module|namespace|type)/ }
    ]
  };

  // Comperison operators & function named parameters.
  var PS_ARGUMENTS = {
    variants: [
      // PS literals are pretty verbose so it's a good idea to accent them a bit.
      { className: 'operator', begin: '('.concat(COMPARISON_OPERATORS, ')\\b') },
      { className: 'literal', begin: /(-)[\w\d]+/, relevance:0 }
    ]
  };

  var HASH_SIGNS = {
    className: 'selector-tag',
    begin: /\@\B/,
    relevance: 0
  };

  // It's a very general rule so I'll narrow it a bit with some strict boundaries
  // to avoid any possible false-positive collisions!
  var PS_METHODS = {
    className: 'function',
    begin: /\[.*\]\s*[\w]+[ ]??\(/, end: /$/,
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'keyword', begin: '('.concat(
        KEYWORDS.keyword.toString().replace(/\s/g, '|'
        ), ')\\b'),
        endsParent: true,
        relevance: 0
      },
      hljs.inherit(hljs.TITLE_MODE, { endsParent: true })
    ]
  };

  var GENTLEMANS_SET = [
    // STATIC_MEMBER,
    PS_METHODS,
    PS_COMMENT,
    BACKTICK_ESCAPE,
    hljs.NUMBER_MODE,
    QUOTE_STRING,
    APOS_STRING,
    // PS_NEW_OBJECT_TYPE,
    CMDLETS,
    VAR,
    LITERAL,
    HASH_SIGNS
  ];

  var PS_TYPE = {
    begin: /\[/, end: /\]/,
    excludeBegin: true,
    excludeEnd: true,
    relevance: 0,
    contains: [].concat(
      'self',
      GENTLEMANS_SET,
      { begin: "(" + TYPES.join("|") + ")", className: "built_in", relevance:0 },
      { className: 'type', begin: /[\.\w\d]+/, relevance: 0 }
    )
  };

  PS_METHODS.contains.unshift(PS_TYPE);

  return {
    name: 'PowerShell',
    aliases: ["ps", "ps1"],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: GENTLEMANS_SET.concat(
      PS_CLASS,
      PS_FUNCTION,
      PS_USING,
      PS_ARGUMENTS,
      PS_TYPE
    )
  };
}

module.exports = powershell;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Bvd2Vyc2hlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyx3Q0FBd0M7QUFDL0MsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUIsR0FBRywwQkFBMEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3REFBd0Q7QUFDL0QsT0FBTztBQUNQLDJDQUEyQztBQUMzQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBeUU7QUFDaEYsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHFDQUFxQyxtQkFBbUI7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlFQUF5RTtBQUNoRixPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfcG93ZXJzaGVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUG93ZXJTaGVsbFxuRGVzY3JpcHRpb246IFBvd2VyU2hlbGwgaXMgYSB0YXNrLWJhc2VkIGNvbW1hbmQtbGluZSBzaGVsbCBhbmQgc2NyaXB0aW5nIGxhbmd1YWdlIGJ1aWx0IG9uIC5ORVQuXG5BdXRob3I6IERhdmlkIE1vaHVuZHJvIDxkYXZpZEBtb2h1bmRyby5jb20+XG5Db250cmlidXRvcnM6IE5pY2hvbGFzIEJsdW1oYXJkdCA8bmJsdW1oYXJkdEBuYmx1bWhhcmR0LmNvbT4sIFZpY3RvciBaaG91IDxPaUNNdWRraXBzQHVzZXJzLm5vcmVwbHkuZ2l0aHViLmNvbT4sIE5pY29sYXMgTGUgR2FsbCA8Y29udGFjdEBubGVnYWxsLmZyPlxuV2Vic2l0ZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXJzaGVsbC9cbiovXG5cbmZ1bmN0aW9uIHBvd2Vyc2hlbGwoaGxqcykge1xuXG4gIHZhciBUWVBFUyA9XG4gICAgW1wic3RyaW5nXCIsIFwiY2hhclwiLCBcImJ5dGVcIiwgXCJpbnRcIiwgXCJsb25nXCIsIFwiYm9vbFwiLCAgXCJkZWNpbWFsXCIsICBcInNpbmdsZVwiLFxuICAgICBcImRvdWJsZVwiLCBcIkRhdGVUaW1lXCIsIFwieG1sXCIsIFwiYXJyYXlcIiwgXCJoYXNodGFibGVcIiwgXCJ2b2lkXCJdO1xuXG4gIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM3MTQ0Mjgodj12cy44NSkuYXNweFxuICB2YXIgVkFMSURfVkVSQlMgPVxuICAgICdBZGR8Q2xlYXJ8Q2xvc2V8Q29weXxFbnRlcnxFeGl0fEZpbmR8Rm9ybWF0fEdldHxIaWRlfEpvaW58TG9ja3wnICtcbiAgICAnTW92ZXxOZXd8T3BlbnxPcHRpbWl6ZXxQb3B8UHVzaHxSZWRvfFJlbW92ZXxSZW5hbWV8UmVzZXR8UmVzaXplfCcgK1xuICAgICdTZWFyY2h8U2VsZWN0fFNldHxTaG93fFNraXB8U3BsaXR8U3RlcHxTd2l0Y2h8VW5kb3xVbmxvY2t8JyArXG4gICAgJ1dhdGNofEJhY2t1cHxDaGVja3BvaW50fENvbXBhcmV8Q29tcHJlc3N8Q29udmVydHxDb252ZXJ0RnJvbXwnICtcbiAgICAnQ29udmVydFRvfERpc21vdW50fEVkaXR8RXhwYW5kfEV4cG9ydHxHcm91cHxJbXBvcnR8SW5pdGlhbGl6ZXwnICtcbiAgICAnTGltaXR8TWVyZ2V8TmV3fE91dHxQdWJsaXNofFJlc3RvcmV8U2F2ZXxTeW5jfFVucHVibGlzaHxVcGRhdGV8JyArXG4gICAgJ0FwcHJvdmV8QXNzZXJ0fENvbXBsZXRlfENvbmZpcm18RGVueXxEaXNhYmxlfEVuYWJsZXxJbnN0YWxsfEludm9rZXxSZWdpc3RlcnwnICtcbiAgICAnUmVxdWVzdHxSZXN0YXJ0fFJlc3VtZXxTdGFydHxTdG9wfFN1Ym1pdHxTdXNwZW5kfFVuaW5zdGFsbHwnICtcbiAgICAnVW5yZWdpc3RlcnxXYWl0fERlYnVnfE1lYXN1cmV8UGluZ3xSZXBhaXJ8UmVzb2x2ZXxUZXN0fFRyYWNlfENvbm5lY3R8JyArXG4gICAgJ0Rpc2Nvbm5lY3R8UmVhZHxSZWNlaXZlfFNlbmR8V3JpdGV8QmxvY2t8R3JhbnR8UHJvdGVjdHxSZXZva2V8VW5ibG9ja3wnICtcbiAgICAnVW5wcm90ZWN0fFVzZXxGb3JFYWNofFNvcnR8VGVlfFdoZXJlJztcblxuICB2YXIgQ09NUEFSSVNPTl9PUEVSQVRPUlMgPVxuICAgICctYW5kfC1hc3wtYmFuZHwtYm5vdHwtYm9yfC1ieG9yfC1jYXNlc2Vuc2l0aXZlfC1jY29udGFpbnN8LWNlcXwtY2dlfC1jZ3R8JyArXG4gICAgJy1jbGV8LWNsaWtlfC1jbHR8LWNtYXRjaHwtY25lfC1jbm90Y29udGFpbnN8LWNub3RsaWtlfC1jbm90bWF0Y2h8LWNvbnRhaW5zfCcgK1xuICAgICctY3JlcGxhY2V8LWNzcGxpdHwtZXF8LWV4YWN0fC1mfC1maWxlfC1nZXwtZ3R8LWljb250YWluc3wtaWVxfC1pZ2V8LWlndHwnICtcbiAgICAnLWlsZXwtaWxpa2V8LWlsdHwtaW1hdGNofC1pbnwtaW5lfC1pbm90Y29udGFpbnN8LWlub3RsaWtlfC1pbm90bWF0Y2h8JyArXG4gICAgJy1pcmVwbGFjZXwtaXN8LWlzbm90fC1pc3BsaXR8LWpvaW58LWxlfC1saWtlfC1sdHwtbWF0Y2h8LW5lfC1ub3R8JyArXG4gICAgJy1ub3Rjb250YWluc3wtbm90aW58LW5vdGxpa2V8LW5vdG1hdGNofC1vcnwtcmVnZXh8LXJlcGxhY2V8LXNobHwtc2hyfCcgK1xuICAgICctc3BsaXR8LXdpbGRjYXJkfC14b3InO1xuXG4gIHZhciBLRVlXT1JEUyA9IHtcbiAgICAkcGF0dGVybjogLy0/W0EtelxcLlxcLV0rXFxiLyxcbiAgICBrZXl3b3JkOiAnaWYgZWxzZSBmb3JlYWNoIHJldHVybiBkbyB3aGlsZSB1bnRpbCBlbHNlaWYgYmVnaW4gZm9yIHRyYXAgZGF0YSBkeW5hbWljcGFyYW0gJyArXG4gICAgJ2VuZCBicmVhayB0aHJvdyBwYXJhbSBjb250aW51ZSBmaW5hbGx5IGluIHN3aXRjaCBleGl0IGZpbHRlciB0cnkgcHJvY2VzcyBjYXRjaCAnICtcbiAgICAnaGlkZGVuIHN0YXRpYyBwYXJhbWV0ZXInLFxuICAgIC8vIFwiZWNob1wiIHJlbGV2YW5jZSBoYXMgYmVlbiBzZXQgdG8gMCB0byBhdm9pZCBhdXRvLWRldGVjdCBjb25mbGljdHMgd2l0aCBzaGVsbCB0cmFuc2NyaXB0c1xuICAgIGJ1aWx0X2luOiAnYWMgYXNucCBjYXQgY2QgQ0ZTIGNoZGlyIGNsYyBjbGVhciBjbGh5IGNsaSBjbHAgY2xzIGNsdiBjbnNuIGNvbXBhcmUgY29weSBjcCAnICtcbiAgICAnY3BpIGNwcCBjdXJsIGN2cGEgZGJwIGRlbCBkaWZmIGRpciBkbnNuIGVicCBlY2hvfDAgZXBhbCBlcGNzdiBlcHNuIGVyYXNlIGV0c24gZXhzbiBmYyBmaHggJyArXG4gICAgJ2ZsIGZ0IGZ3IGdhbCBnYnAgZ2MgZ2NiIGdjaSBnY20gZ2NzIGdkciBnZXJyIGdoeSBnaSBnaW4gZ2piIGdsIGdtIGdtbyBncCBncHMgZ3B2IGdyb3VwICcgK1xuICAgICdnc24gZ3NucCBnc3YgZ3R6IGd1IGd2IGd3bWkgaCBoaXN0b3J5IGljbSBpZXggaWh5IGlpIGlwYWwgaXBjc3YgaXBtbyBpcHNuIGlybSBpc2UgaXdtaSAnICtcbiAgICAnaXdyIGtpbGwgbHAgbHMgbWFuIG1kIG1lYXN1cmUgbWkgbW91bnQgbW92ZSBtcCBtdiBuYWwgbmRyIG5pIG5tbyBucHNzYyBuc24gbnYgb2d2IG9oICcgK1xuICAgICdwb3BkIHBzIHB1c2hkIHB3ZCByIHJicCByY2piIHJjc24gcmQgcmRyIHJlbiByaSByamIgcm0gcm1kaXIgcm1vIHJuaSBybnAgcnAgcnNuIHJzbnAgJyArXG4gICAgJ3J1amIgcnYgcnZwYSByd21pIHNhamIgc2FsIHNhcHMgc2FzdiBzYnAgc2Mgc2NiIHNlbGVjdCBzZXQgc2hjbSBzaSBzbCBzbGVlcCBzbHMgc29ydCBzcCAnICtcbiAgICAnc3BqYiBzcHBzIHNwc3Ygc3RhcnQgc3R6IHN1amIgc3Ygc3dtaSB0ZWUgdHJjbSB0eXBlIHdnZXQgd2hlcmUgd2piIHdyaXRlJ1xuICAgIC8vIFRPRE86ICd2YWxpZGF0ZVtBLVpdKycgY2FuJ3Qgd29yayBpbiBrZXl3b3Jkc1xuICB9O1xuXG4gIHZhciBUSVRMRV9OQU1FX1JFID0gL1xcd1tcXHdcXGRdKigoLSlbXFx3XFxkXSspKi87XG5cbiAgdmFyIEJBQ0tUSUNLX0VTQ0FQRSA9IHtcbiAgICBiZWdpbjogJ2BbXFxcXHNcXFxcU10nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBWQVIgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAvXFwkXFxCLyB9LFxuICAgICAgeyBjbGFzc05hbWU6ICdrZXl3b3JkJywgYmVnaW46IC9cXCR0aGlzLyB9LFxuICAgICAgeyBiZWdpbjogL1xcJFtcXHdcXGRdW1xcd1xcZF86XSovIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIExJVEVSQUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46IC9cXCQobnVsbHx0cnVlfGZhbHNlKVxcYi9cbiAgfTtcblxuICB2YXIgUVVPVEVfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogXCJzdHJpbmdcIixcbiAgICB2YXJpYW50czogW3sgYmVnaW46IC9cIi8sIGVuZDogL1wiLyB9LCB7IGJlZ2luOiAvQFwiLywgZW5kOiAvXlwiQC8gfV0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEJBQ0tUSUNLX0VTQ0FQRSxcbiAgICAgIFZBUixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1xcJFtBLXpdLywgZW5kOiAvW15BLXpdL1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICB2YXIgQVBPU19TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgeyBiZWdpbjogL0AnLywgZW5kOiAvXidALyB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBQU19IRUxQVEFHUyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZG9jdGFnXCIsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIC8qIG5vIHBhcmFtYXRlciBoZWxwIHRhZ3MgKi9cbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXC4oc3lub3BzaXN8ZGVzY3JpcHRpb258ZXhhbXBsZXxpbnB1dHN8b3V0cHV0c3xub3Rlc3xsaW5rfGNvbXBvbmVudHxyb2xlfGZ1bmN0aW9uYWxpdHkpL1xuICAgICAgfSxcbiAgICAgIC8qIG9uZSBwYXJhbWV0ZXIgaGVscCB0YWdzICovXG4gICAgICB7IGJlZ2luOiAvXFwuKHBhcmFtZXRlcnxmb3J3YXJkaGVscHRhcmdldG5hbWV8Zm9yd2FyZGhlbHBjYXRlZ29yeXxyZW1vdGVoZWxwcnVuc3BhY2V8ZXh0ZXJuYWxoZWxwKVxccytcXFMrLyB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBQU19DT01NRU5UID0gaGxqcy5pbmhlcml0KFxuICAgIGhsanMuQ09NTUVOVChudWxsLCBudWxsKSxcbiAgICB7XG4gICAgICB2YXJpYW50czogW1xuICAgICAgICAvKiBzaW5nbGUtbGluZSBjb21tZW50ICovXG4gICAgICAgIHsgYmVnaW46IC8jLywgZW5kOiAvJC8gfSxcbiAgICAgICAgLyogbXVsdGktbGluZSBjb21tZW50ICovXG4gICAgICAgIHsgYmVnaW46IC88Iy8sIGVuZDogLyM+LyB9XG4gICAgICBdLFxuICAgICAgY29udGFpbnM6IFtQU19IRUxQVEFHU11cbiAgICB9XG4gICk7XG5cbiAgdmFyIENNRExFVFMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnKCcuY29uY2F0KFZBTElEX1ZFUkJTLCAnKSsoLSlbXFxcXHdcXFxcZF0rJykgfVxuICAgIF1cbiAgfTtcblxuICB2YXIgUFNfQ0xBU1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBlbnVtJywgZW5kOiAvXFxzKlt7XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5USVRMRV9NT0RFXVxuICB9O1xuXG4gIHZhciBQU19GVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46IC9mdW5jdGlvblxccysvLCBlbmQ6IC9cXHMqXFx7fCQvLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IGJlZ2luOiBcImZ1bmN0aW9uXCIsIHJlbGV2YW5jZTogMCwgY2xhc3NOYW1lOiBcImtleXdvcmRcIiB9LFxuICAgICAgeyBjbGFzc05hbWU6IFwidGl0bGVcIixcbiAgICAgICAgYmVnaW46IFRJVExFX05BTUVfUkUsIHJlbGV2YW5jZTowIH0sXG4gICAgICB7IGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgY2xhc3NOYW1lOiBcInBhcmFtc1wiLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbVkFSXSB9XG4gICAgICAvLyBDTURMRVRTXG4gICAgXVxuICB9O1xuXG4gIC8vIFVzaW5nIHN0YXRtZW50LCBwbHVzIHR5cGUsIHBsdXMgYXNzZW1ibHkgbmFtZS5cbiAgdmFyIFBTX1VTSU5HID0ge1xuICAgIGJlZ2luOiAvdXNpbmdcXHMvLCBlbmQ6IC8kLyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgUVVPVEVfU1RSSU5HLFxuICAgICAgQVBPU19TVFJJTkcsXG4gICAgICB7IGNsYXNzTmFtZTogJ2tleXdvcmQnLCBiZWdpbjogLyh1c2luZ3xhc3NlbWJseXxjb21tYW5kfG1vZHVsZXxuYW1lc3BhY2V8dHlwZSkvIH1cbiAgICBdXG4gIH07XG5cbiAgLy8gQ29tcGVyaXNvbiBvcGVyYXRvcnMgJiBmdW5jdGlvbiBuYW1lZCBwYXJhbWV0ZXJzLlxuICB2YXIgUFNfQVJHVU1FTlRTID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICAvLyBQUyBsaXRlcmFscyBhcmUgcHJldHR5IHZlcmJvc2Ugc28gaXQncyBhIGdvb2QgaWRlYSB0byBhY2NlbnQgdGhlbSBhIGJpdC5cbiAgICAgIHsgY2xhc3NOYW1lOiAnb3BlcmF0b3InLCBiZWdpbjogJygnLmNvbmNhdChDT01QQVJJU09OX09QRVJBVE9SUywgJylcXFxcYicpIH0sXG4gICAgICB7IGNsYXNzTmFtZTogJ2xpdGVyYWwnLCBiZWdpbjogLygtKVtcXHdcXGRdKy8sIHJlbGV2YW5jZTowIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIEhBU0hfU0lHTlMgPSB7XG4gICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItdGFnJyxcbiAgICBiZWdpbjogL1xcQFxcQi8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgLy8gSXQncyBhIHZlcnkgZ2VuZXJhbCBydWxlIHNvIEknbGwgbmFycm93IGl0IGEgYml0IHdpdGggc29tZSBzdHJpY3QgYm91bmRhcmllc1xuICAvLyB0byBhdm9pZCBhbnkgcG9zc2libGUgZmFsc2UtcG9zaXRpdmUgY29sbGlzaW9ucyFcbiAgdmFyIFBTX01FVEhPRFMgPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAvXFxbLipcXF1cXHMqW1xcd10rWyBdPz9cXCgvLCBlbmQ6IC8kLyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsIGJlZ2luOiAnKCcuY29uY2F0KFxuICAgICAgICBLRVlXT1JEUy5rZXl3b3JkLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzL2csICd8J1xuICAgICAgICApLCAnKVxcXFxiJyksXG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgZW5kc1BhcmVudDogdHJ1ZSB9KVxuICAgIF1cbiAgfTtcblxuICB2YXIgR0VOVExFTUFOU19TRVQgPSBbXG4gICAgLy8gU1RBVElDX01FTUJFUixcbiAgICBQU19NRVRIT0RTLFxuICAgIFBTX0NPTU1FTlQsXG4gICAgQkFDS1RJQ0tfRVNDQVBFLFxuICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgUVVPVEVfU1RSSU5HLFxuICAgIEFQT1NfU1RSSU5HLFxuICAgIC8vIFBTX05FV19PQkpFQ1RfVFlQRSxcbiAgICBDTURMRVRTLFxuICAgIFZBUixcbiAgICBMSVRFUkFMLFxuICAgIEhBU0hfU0lHTlNcbiAgXTtcblxuICB2YXIgUFNfVFlQRSA9IHtcbiAgICBiZWdpbjogL1xcWy8sIGVuZDogL1xcXS8sXG4gICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXS5jb25jYXQoXG4gICAgICAnc2VsZicsXG4gICAgICBHRU5UTEVNQU5TX1NFVCxcbiAgICAgIHsgYmVnaW46IFwiKFwiICsgVFlQRVMuam9pbihcInxcIikgKyBcIilcIiwgY2xhc3NOYW1lOiBcImJ1aWx0X2luXCIsIHJlbGV2YW5jZTowIH0sXG4gICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCBiZWdpbjogL1tcXC5cXHdcXGRdKy8sIHJlbGV2YW5jZTogMCB9XG4gICAgKVxuICB9O1xuXG4gIFBTX01FVEhPRFMuY29udGFpbnMudW5zaGlmdChQU19UWVBFKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQb3dlclNoZWxsJyxcbiAgICBhbGlhc2VzOiBbXCJwc1wiLCBcInBzMVwiXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogR0VOVExFTUFOU19TRVQuY29uY2F0KFxuICAgICAgUFNfQ0xBU1MsXG4gICAgICBQU19GVU5DVElPTixcbiAgICAgIFBTX1VTSU5HLFxuICAgICAgUFNfQVJHVU1FTlRTLFxuICAgICAgUFNfVFlQRVxuICAgIClcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb3dlcnNoZWxsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==