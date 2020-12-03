(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_sas"],{

/***/ "./node_modules/highlight.js/lib/languages/sas.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/sas.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: SAS
Author: Mauricio Caceres <mauricio.caceres.bravo@gmail.com>
Description: Syntax Highlighting for SAS
*/

function sas(hljs) {

    // Data step and PROC SQL statements
    var SAS_KEYWORDS = ''+
        'do if then else end until while '+
        ''+
        'abort array attrib by call cards cards4 catname continue '+
        'datalines datalines4 delete delim delimiter display dm drop '+
        'endsas error file filename footnote format goto in infile '+
        'informat input keep label leave length libname link list '+
        'lostcard merge missing modify options output out page put '+
        'redirect remove rename replace retain return select set skip '+
        'startsas stop title update waitsas where window x systask '+
        ''+
        'add and alter as cascade check create delete describe '+
        'distinct drop foreign from group having index insert into in '+
        'key like message modify msgtype not null on or order primary '+
        'references reset restrict select set table unique update '+
        'validate view where';

    // Built-in SAS functions
    var SAS_FUN = ''+
        'abs|addr|airy|arcos|arsin|atan|attrc|attrn|band|'+
        'betainv|blshift|bnot|bor|brshift|bxor|byte|cdf|ceil|'+
        'cexist|cinv|close|cnonct|collate|compbl|compound|'+
        'compress|cos|cosh|css|curobs|cv|daccdb|daccdbsl|'+
        'daccsl|daccsyd|dacctab|dairy|date|datejul|datepart|'+
        'datetime|day|dclose|depdb|depdbsl|depdbsl|depsl|'+
        'depsl|depsyd|depsyd|deptab|deptab|dequote|dhms|dif|'+
        'digamma|dim|dinfo|dnum|dopen|doptname|doptnum|dread|'+
        'dropnote|dsname|erf|erfc|exist|exp|fappend|fclose|'+
        'fcol|fdelete|fetch|fetchobs|fexist|fget|fileexist|'+
        'filename|fileref|finfo|finv|fipname|fipnamel|'+
        'fipstate|floor|fnonct|fnote|fopen|foptname|foptnum|'+
        'fpoint|fpos|fput|fread|frewind|frlen|fsep|fuzz|'+
        'fwrite|gaminv|gamma|getoption|getvarc|getvarn|hbound|'+
        'hms|hosthelp|hour|ibessel|index|indexc|indexw|input|'+
        'inputc|inputn|int|intck|intnx|intrr|irr|jbessel|'+
        'juldate|kurtosis|lag|lbound|left|length|lgamma|'+
        'libname|libref|log|log10|log2|logpdf|logpmf|logsdf|'+
        'lowcase|max|mdy|mean|min|minute|mod|month|mopen|'+
        'mort|n|netpv|nmiss|normal|note|npv|open|ordinal|'+
        'pathname|pdf|peek|peekc|pmf|point|poisson|poke|'+
        'probbeta|probbnml|probchi|probf|probgam|probhypr|'+
        'probit|probnegb|probnorm|probt|put|putc|putn|qtr|'+
        'quote|ranbin|rancau|ranexp|rangam|range|rank|rannor|'+
        'ranpoi|rantbl|rantri|ranuni|repeat|resolve|reverse|'+
        'rewind|right|round|saving|scan|sdf|second|sign|'+
        'sin|sinh|skewness|soundex|spedis|sqrt|std|stderr|'+
        'stfips|stname|stnamel|substr|sum|symget|sysget|'+
        'sysmsg|sysprod|sysrc|system|tan|tanh|time|timepart|'+
        'tinv|tnonct|today|translate|tranwrd|trigamma|'+
        'trim|trimn|trunc|uniform|upcase|uss|var|varfmt|'+
        'varinfmt|varlabel|varlen|varname|varnum|varray|'+
        'varrayx|vartype|verify|vformat|vformatd|vformatdx|'+
        'vformatn|vformatnx|vformatw|vformatwx|vformatx|'+
        'vinarray|vinarrayx|vinformat|vinformatd|vinformatdx|'+
        'vinformatn|vinformatnx|vinformatw|vinformatwx|'+
        'vinformatx|vlabel|vlabelx|vlength|vlengthx|vname|'+
        'vnamex|vtype|vtypex|weekday|year|yyq|zipfips|zipname|'+
        'zipnamel|zipstate';

    // Built-in macro functions
    var SAS_MACRO_FUN = 'bquote|nrbquote|cmpres|qcmpres|compstor|'+
        'datatyp|display|do|else|end|eval|global|goto|'+
        'if|index|input|keydef|label|left|length|let|'+
        'local|lowcase|macro|mend|nrbquote|nrquote|'+
        'nrstr|put|qcmpres|qleft|qlowcase|qscan|'+
        'qsubstr|qsysfunc|qtrim|quote|qupcase|scan|str|'+
        'substr|superq|syscall|sysevalf|sysexec|sysfunc|'+
        'sysget|syslput|sysprod|sysrc|sysrput|then|to|'+
        'trim|unquote|until|upcase|verify|while|window';

    return {
        name: 'SAS',
        aliases: ['sas', 'SAS'],
        case_insensitive: true, // SAS is case-insensitive
        keywords: {
            literal:
                'null missing _all_ _automatic_ _character_ _infile_ '+
                '_n_ _name_ _null_ _numeric_ _user_ _webout_',
            meta:
                SAS_KEYWORDS
        },
        contains: [
            {
                // Distinct highlight for proc <proc>, data, run, quit
                className: 'keyword',
                begin: /^\s*(proc [\w\d_]+|data|run|quit)[\s\;]/
            },
            {
                // Macro variables
                className: 'variable',
                begin: /\&[a-zA-Z_\&][a-zA-Z0-9_]*\.?/
            },
            {
                // Special emphasis for datalines|cards
                className: 'emphasis',
                begin: /^\s*datalines|cards.*;/,
                end: /^\s*;\s*$/
            },
            {   // Built-in macro variables take precedence
                className: 'built_in',
                begin: '%(' + SAS_MACRO_FUN + ')'
            },
            {
                // User-defined macro functions highlighted after
                className: 'name',
                begin: /%[a-zA-Z_][a-zA-Z_0-9]*/
            },
            {
                className: 'meta',
                begin: '[^%](' + SAS_FUN + ')[\(]'
            },
            {
                className: 'string',
                variants: [
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE
                ]
            },
            hljs.COMMENT('\\*', ';'),
            hljs.C_BLOCK_COMMENT_MODE
        ]
    };
}

module.exports = sas;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Nhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFNBU1xuQXV0aG9yOiBNYXVyaWNpbyBDYWNlcmVzIDxtYXVyaWNpby5jYWNlcmVzLmJyYXZvQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBTeW50YXggSGlnaGxpZ2h0aW5nIGZvciBTQVNcbiovXG5cbmZ1bmN0aW9uIHNhcyhobGpzKSB7XG5cbiAgICAvLyBEYXRhIHN0ZXAgYW5kIFBST0MgU1FMIHN0YXRlbWVudHNcbiAgICB2YXIgU0FTX0tFWVdPUkRTID0gJycrXG4gICAgICAgICdkbyBpZiB0aGVuIGVsc2UgZW5kIHVudGlsIHdoaWxlICcrXG4gICAgICAgICcnK1xuICAgICAgICAnYWJvcnQgYXJyYXkgYXR0cmliIGJ5IGNhbGwgY2FyZHMgY2FyZHM0IGNhdG5hbWUgY29udGludWUgJytcbiAgICAgICAgJ2RhdGFsaW5lcyBkYXRhbGluZXM0IGRlbGV0ZSBkZWxpbSBkZWxpbWl0ZXIgZGlzcGxheSBkbSBkcm9wICcrXG4gICAgICAgICdlbmRzYXMgZXJyb3IgZmlsZSBmaWxlbmFtZSBmb290bm90ZSBmb3JtYXQgZ290byBpbiBpbmZpbGUgJytcbiAgICAgICAgJ2luZm9ybWF0IGlucHV0IGtlZXAgbGFiZWwgbGVhdmUgbGVuZ3RoIGxpYm5hbWUgbGluayBsaXN0ICcrXG4gICAgICAgICdsb3N0Y2FyZCBtZXJnZSBtaXNzaW5nIG1vZGlmeSBvcHRpb25zIG91dHB1dCBvdXQgcGFnZSBwdXQgJytcbiAgICAgICAgJ3JlZGlyZWN0IHJlbW92ZSByZW5hbWUgcmVwbGFjZSByZXRhaW4gcmV0dXJuIHNlbGVjdCBzZXQgc2tpcCAnK1xuICAgICAgICAnc3RhcnRzYXMgc3RvcCB0aXRsZSB1cGRhdGUgd2FpdHNhcyB3aGVyZSB3aW5kb3cgeCBzeXN0YXNrICcrXG4gICAgICAgICcnK1xuICAgICAgICAnYWRkIGFuZCBhbHRlciBhcyBjYXNjYWRlIGNoZWNrIGNyZWF0ZSBkZWxldGUgZGVzY3JpYmUgJytcbiAgICAgICAgJ2Rpc3RpbmN0IGRyb3AgZm9yZWlnbiBmcm9tIGdyb3VwIGhhdmluZyBpbmRleCBpbnNlcnQgaW50byBpbiAnK1xuICAgICAgICAna2V5IGxpa2UgbWVzc2FnZSBtb2RpZnkgbXNndHlwZSBub3QgbnVsbCBvbiBvciBvcmRlciBwcmltYXJ5ICcrXG4gICAgICAgICdyZWZlcmVuY2VzIHJlc2V0IHJlc3RyaWN0IHNlbGVjdCBzZXQgdGFibGUgdW5pcXVlIHVwZGF0ZSAnK1xuICAgICAgICAndmFsaWRhdGUgdmlldyB3aGVyZSc7XG5cbiAgICAvLyBCdWlsdC1pbiBTQVMgZnVuY3Rpb25zXG4gICAgdmFyIFNBU19GVU4gPSAnJytcbiAgICAgICAgJ2Fic3xhZGRyfGFpcnl8YXJjb3N8YXJzaW58YXRhbnxhdHRyY3xhdHRybnxiYW5kfCcrXG4gICAgICAgICdiZXRhaW52fGJsc2hpZnR8Ym5vdHxib3J8YnJzaGlmdHxieG9yfGJ5dGV8Y2RmfGNlaWx8JytcbiAgICAgICAgJ2NleGlzdHxjaW52fGNsb3NlfGNub25jdHxjb2xsYXRlfGNvbXBibHxjb21wb3VuZHwnK1xuICAgICAgICAnY29tcHJlc3N8Y29zfGNvc2h8Y3NzfGN1cm9ic3xjdnxkYWNjZGJ8ZGFjY2Ric2x8JytcbiAgICAgICAgJ2RhY2NzbHxkYWNjc3lkfGRhY2N0YWJ8ZGFpcnl8ZGF0ZXxkYXRlanVsfGRhdGVwYXJ0fCcrXG4gICAgICAgICdkYXRldGltZXxkYXl8ZGNsb3NlfGRlcGRifGRlcGRic2x8ZGVwZGJzbHxkZXBzbHwnK1xuICAgICAgICAnZGVwc2x8ZGVwc3lkfGRlcHN5ZHxkZXB0YWJ8ZGVwdGFifGRlcXVvdGV8ZGhtc3xkaWZ8JytcbiAgICAgICAgJ2RpZ2FtbWF8ZGltfGRpbmZvfGRudW18ZG9wZW58ZG9wdG5hbWV8ZG9wdG51bXxkcmVhZHwnK1xuICAgICAgICAnZHJvcG5vdGV8ZHNuYW1lfGVyZnxlcmZjfGV4aXN0fGV4cHxmYXBwZW5kfGZjbG9zZXwnK1xuICAgICAgICAnZmNvbHxmZGVsZXRlfGZldGNofGZldGNob2JzfGZleGlzdHxmZ2V0fGZpbGVleGlzdHwnK1xuICAgICAgICAnZmlsZW5hbWV8ZmlsZXJlZnxmaW5mb3xmaW52fGZpcG5hbWV8ZmlwbmFtZWx8JytcbiAgICAgICAgJ2ZpcHN0YXRlfGZsb29yfGZub25jdHxmbm90ZXxmb3Blbnxmb3B0bmFtZXxmb3B0bnVtfCcrXG4gICAgICAgICdmcG9pbnR8ZnBvc3xmcHV0fGZyZWFkfGZyZXdpbmR8ZnJsZW58ZnNlcHxmdXp6fCcrXG4gICAgICAgICdmd3JpdGV8Z2FtaW52fGdhbW1hfGdldG9wdGlvbnxnZXR2YXJjfGdldHZhcm58aGJvdW5kfCcrXG4gICAgICAgICdobXN8aG9zdGhlbHB8aG91cnxpYmVzc2VsfGluZGV4fGluZGV4Y3xpbmRleHd8aW5wdXR8JytcbiAgICAgICAgJ2lucHV0Y3xpbnB1dG58aW50fGludGNrfGludG54fGludHJyfGlycnxqYmVzc2VsfCcrXG4gICAgICAgICdqdWxkYXRlfGt1cnRvc2lzfGxhZ3xsYm91bmR8bGVmdHxsZW5ndGh8bGdhbW1hfCcrXG4gICAgICAgICdsaWJuYW1lfGxpYnJlZnxsb2d8bG9nMTB8bG9nMnxsb2dwZGZ8bG9ncG1mfGxvZ3NkZnwnK1xuICAgICAgICAnbG93Y2FzZXxtYXh8bWR5fG1lYW58bWlufG1pbnV0ZXxtb2R8bW9udGh8bW9wZW58JytcbiAgICAgICAgJ21vcnR8bnxuZXRwdnxubWlzc3xub3JtYWx8bm90ZXxucHZ8b3BlbnxvcmRpbmFsfCcrXG4gICAgICAgICdwYXRobmFtZXxwZGZ8cGVla3xwZWVrY3xwbWZ8cG9pbnR8cG9pc3Nvbnxwb2tlfCcrXG4gICAgICAgICdwcm9iYmV0YXxwcm9iYm5tbHxwcm9iY2hpfHByb2JmfHByb2JnYW18cHJvYmh5cHJ8JytcbiAgICAgICAgJ3Byb2JpdHxwcm9ibmVnYnxwcm9ibm9ybXxwcm9idHxwdXR8cHV0Y3xwdXRufHF0cnwnK1xuICAgICAgICAncXVvdGV8cmFuYmlufHJhbmNhdXxyYW5leHB8cmFuZ2FtfHJhbmdlfHJhbmt8cmFubm9yfCcrXG4gICAgICAgICdyYW5wb2l8cmFudGJsfHJhbnRyaXxyYW51bml8cmVwZWF0fHJlc29sdmV8cmV2ZXJzZXwnK1xuICAgICAgICAncmV3aW5kfHJpZ2h0fHJvdW5kfHNhdmluZ3xzY2FufHNkZnxzZWNvbmR8c2lnbnwnK1xuICAgICAgICAnc2lufHNpbmh8c2tld25lc3N8c291bmRleHxzcGVkaXN8c3FydHxzdGR8c3RkZXJyfCcrXG4gICAgICAgICdzdGZpcHN8c3RuYW1lfHN0bmFtZWx8c3Vic3RyfHN1bXxzeW1nZXR8c3lzZ2V0fCcrXG4gICAgICAgICdzeXNtc2d8c3lzcHJvZHxzeXNyY3xzeXN0ZW18dGFufHRhbmh8dGltZXx0aW1lcGFydHwnK1xuICAgICAgICAndGludnx0bm9uY3R8dG9kYXl8dHJhbnNsYXRlfHRyYW53cmR8dHJpZ2FtbWF8JytcbiAgICAgICAgJ3RyaW18dHJpbW58dHJ1bmN8dW5pZm9ybXx1cGNhc2V8dXNzfHZhcnx2YXJmbXR8JytcbiAgICAgICAgJ3ZhcmluZm10fHZhcmxhYmVsfHZhcmxlbnx2YXJuYW1lfHZhcm51bXx2YXJyYXl8JytcbiAgICAgICAgJ3ZhcnJheXh8dmFydHlwZXx2ZXJpZnl8dmZvcm1hdHx2Zm9ybWF0ZHx2Zm9ybWF0ZHh8JytcbiAgICAgICAgJ3Zmb3JtYXRufHZmb3JtYXRueHx2Zm9ybWF0d3x2Zm9ybWF0d3h8dmZvcm1hdHh8JytcbiAgICAgICAgJ3ZpbmFycmF5fHZpbmFycmF5eHx2aW5mb3JtYXR8dmluZm9ybWF0ZHx2aW5mb3JtYXRkeHwnK1xuICAgICAgICAndmluZm9ybWF0bnx2aW5mb3JtYXRueHx2aW5mb3JtYXR3fHZpbmZvcm1hdHd4fCcrXG4gICAgICAgICd2aW5mb3JtYXR4fHZsYWJlbHx2bGFiZWx4fHZsZW5ndGh8dmxlbmd0aHh8dm5hbWV8JytcbiAgICAgICAgJ3ZuYW1leHx2dHlwZXx2dHlwZXh8d2Vla2RheXx5ZWFyfHl5cXx6aXBmaXBzfHppcG5hbWV8JytcbiAgICAgICAgJ3ppcG5hbWVsfHppcHN0YXRlJztcblxuICAgIC8vIEJ1aWx0LWluIG1hY3JvIGZ1bmN0aW9uc1xuICAgIHZhciBTQVNfTUFDUk9fRlVOID0gJ2JxdW90ZXxucmJxdW90ZXxjbXByZXN8cWNtcHJlc3xjb21wc3RvcnwnK1xuICAgICAgICAnZGF0YXR5cHxkaXNwbGF5fGRvfGVsc2V8ZW5kfGV2YWx8Z2xvYmFsfGdvdG98JytcbiAgICAgICAgJ2lmfGluZGV4fGlucHV0fGtleWRlZnxsYWJlbHxsZWZ0fGxlbmd0aHxsZXR8JytcbiAgICAgICAgJ2xvY2FsfGxvd2Nhc2V8bWFjcm98bWVuZHxucmJxdW90ZXxucnF1b3RlfCcrXG4gICAgICAgICducnN0cnxwdXR8cWNtcHJlc3xxbGVmdHxxbG93Y2FzZXxxc2NhbnwnK1xuICAgICAgICAncXN1YnN0cnxxc3lzZnVuY3xxdHJpbXxxdW90ZXxxdXBjYXNlfHNjYW58c3RyfCcrXG4gICAgICAgICdzdWJzdHJ8c3VwZXJxfHN5c2NhbGx8c3lzZXZhbGZ8c3lzZXhlY3xzeXNmdW5jfCcrXG4gICAgICAgICdzeXNnZXR8c3lzbHB1dHxzeXNwcm9kfHN5c3JjfHN5c3JwdXR8dGhlbnx0b3wnK1xuICAgICAgICAndHJpbXx1bnF1b3RlfHVudGlsfHVwY2FzZXx2ZXJpZnl8d2hpbGV8d2luZG93JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdTQVMnLFxuICAgICAgICBhbGlhc2VzOiBbJ3NhcycsICdTQVMnXSxcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSwgLy8gU0FTIGlzIGNhc2UtaW5zZW5zaXRpdmVcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgIGxpdGVyYWw6XG4gICAgICAgICAgICAgICAgJ251bGwgbWlzc2luZyBfYWxsXyBfYXV0b21hdGljXyBfY2hhcmFjdGVyXyBfaW5maWxlXyAnK1xuICAgICAgICAgICAgICAgICdfbl8gX25hbWVfIF9udWxsXyBfbnVtZXJpY18gX3VzZXJfIF93ZWJvdXRfJyxcbiAgICAgICAgICAgIG1ldGE6XG4gICAgICAgICAgICAgICAgU0FTX0tFWVdPUkRTXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gRGlzdGluY3QgaGlnaGxpZ2h0IGZvciBwcm9jIDxwcm9jPiwgZGF0YSwgcnVuLCBxdWl0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9eXFxzKihwcm9jIFtcXHdcXGRfXSt8ZGF0YXxydW58cXVpdClbXFxzXFw7XS9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gTWFjcm8gdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwmW2EtekEtWl9cXCZdW2EtekEtWjAtOV9dKlxcLj8vXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgZW1waGFzaXMgZm9yIGRhdGFsaW5lc3xjYXJkc1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2VtcGhhc2lzJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL15cXHMqZGF0YWxpbmVzfGNhcmRzLio7LyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9eXFxzKjtcXHMqJC9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7ICAgLy8gQnVpbHQtaW4gbWFjcm8gdmFyaWFibGVzIHRha2UgcHJlY2VkZW5jZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJyUoJyArIFNBU19NQUNST19GVU4gKyAnKSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gVXNlci1kZWZpbmVkIG1hY3JvIGZ1bmN0aW9ucyBoaWdobGlnaHRlZCBhZnRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvJVthLXpBLVpfXVthLXpBLVpfMC05XSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnW14lXSgnICsgU0FTX0ZVTiArICcpW1xcKF0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhsanMuQ09NTUVOVCgnXFxcXConLCAnOycpLFxuICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYXM7XG4iXSwic291cmNlUm9vdCI6IiJ9