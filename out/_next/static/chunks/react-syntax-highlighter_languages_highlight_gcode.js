(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_gcode"],{

/***/ "./node_modules/highlight.js/lib/languages/gcode.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gcode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: G-code (ISO 6983)
 Contributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>
 Description: G-code syntax highlighter for Fanuc and other common CNC machine tool controls.
 Website: https://www.sis.se/api/document/preview/911952/
 */

function gcode(hljs) {
    var GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
    var GCODE_CLOSE_RE = '\\%';
    var GCODE_KEYWORDS = {
      $pattern: GCODE_IDENT_RE,
      keyword: 'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +
      'EQ LT GT NE GE LE OR XOR'
    };
    var GCODE_START = {
        className: 'meta',
        begin: '([O])([0-9]+)'
    };
    var GCODE_CODE = [
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.COMMENT(/\(/, /\)/),
        hljs.inherit(hljs.C_NUMBER_MODE, {begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + hljs.C_NUMBER_RE}),
        hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
        hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
        {
            className: 'name',
            begin: '([G])([0-9]+\\.?[0-9]?)'
        },
        {
            className: 'name',
            begin: '([M])([0-9]+\\.?[0-9]?)'
        },
        {
            className: 'attr',
            begin: '(VC|VS|#)',
            end: '(\\d+)'
        },
        {
            className: 'attr',
            begin: '(VZOFX|VZOFY|VZOFZ)'
        },
        {
            className: 'built_in',
            begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
            end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
        },
        {
            className: 'symbol',
            variants: [
                {
                    begin: 'N', end: '\\d+',
                    illegal: '\\W'
                }
            ]
        }
    ];

    return {
        name: 'G-code (ISO 6983)',
        aliases: ['nc'],
        // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
        // However, most prefer all uppercase and uppercase is customary.
        case_insensitive: true,
        keywords: GCODE_KEYWORDS,
        contains: [
            {
                className: 'meta',
                begin: GCODE_CLOSE_RE
            },
            GCODE_START
        ].concat(GCODE_CODE)
    };
}

module.exports = gcode;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2djb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyREFBMkQ7QUFDckcsNkNBQTZDLGNBQWM7QUFDM0QsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2djb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBMYW5ndWFnZTogRy1jb2RlIChJU08gNjk4MylcbiBDb250cmlidXRvcnM6IEFkYW0gSm9zZXBoIENvb2sgPGFkYW0uam9zZXBoLmNvb2tAZ21haWwuY29tPlxuIERlc2NyaXB0aW9uOiBHLWNvZGUgc3ludGF4IGhpZ2hsaWdodGVyIGZvciBGYW51YyBhbmQgb3RoZXIgY29tbW9uIENOQyBtYWNoaW5lIHRvb2wgY29udHJvbHMuXG4gV2Vic2l0ZTogaHR0cHM6Ly93d3cuc2lzLnNlL2FwaS9kb2N1bWVudC9wcmV2aWV3LzkxMTk1Mi9cbiAqL1xuXG5mdW5jdGlvbiBnY29kZShobGpzKSB7XG4gICAgdmFyIEdDT0RFX0lERU5UX1JFID0gJ1tBLVpfXVtBLVowLTlfLl0qJztcbiAgICB2YXIgR0NPREVfQ0xPU0VfUkUgPSAnXFxcXCUnO1xuICAgIHZhciBHQ09ERV9LRVlXT1JEUyA9IHtcbiAgICAgICRwYXR0ZXJuOiBHQ09ERV9JREVOVF9SRSxcbiAgICAgIGtleXdvcmQ6ICdJRiBETyBXSElMRSBFTkRXSElMRSBDQUxMIEVORElGIFNVQiBFTkRTVUIgR09UTyBSRVBFQVQgRU5EUkVQRUFUICcgK1xuICAgICAgJ0VRIExUIEdUIE5FIEdFIExFIE9SIFhPUidcbiAgICB9O1xuICAgIHZhciBHQ09ERV9TVEFSVCA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnKFtPXSkoWzAtOV0rKSdcbiAgICB9O1xuICAgIHZhciBHQ09ERV9DT0RFID0gW1xuICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgIGhsanMuQ09NTUVOVCgvXFwoLywgL1xcKS8pLFxuICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5DX05VTUJFUl9NT0RFLCB7YmVnaW46ICcoWy0rXT8oWzAtOV0qXFxcXC4/WzAtOV0rXFxcXC4/KSl8JyArIGhsanMuQ19OVU1CRVJfUkV9KSxcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSksXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgYmVnaW46ICcoW0ddKShbMC05XStcXFxcLj9bMC05XT8pJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIGJlZ2luOiAnKFtNXSkoWzAtOV0rXFxcXC4/WzAtOV0/KSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgICAgICBiZWdpbjogJyhWQ3xWU3wjKScsXG4gICAgICAgICAgICBlbmQ6ICcoXFxcXGQrKSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgICAgICBiZWdpbjogJyhWWk9GWHxWWk9GWXxWWk9GWiknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgICAgIGJlZ2luOiAnKEFUQU58QUJTfEFDT1N8QVNJTnxTSU58Q09TfEVYUHxGSVh8RlVQfFJPVU5EfExOfFRBTikoXFxcXFspJyxcbiAgICAgICAgICAgIGVuZDogJyhbLStdPyhbMC05XSpcXFxcLj9bMC05XStcXFxcLj8pKShcXFxcXSknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdOJywgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxXJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnRy1jb2RlIChJU08gNjk4MyknLFxuICAgICAgICBhbGlhc2VzOiBbJ25jJ10sXG4gICAgICAgIC8vIFNvbWUgaW1wbGVtZW50YXRpb25zIChDTkMgY29udHJvbHMpIG9mIEctY29kZSBhcmUgaW50ZXJvcGVyYWJsZSB3aXRoIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMgc2VhbWxlc3NseS5cbiAgICAgICAgLy8gSG93ZXZlciwgbW9zdCBwcmVmZXIgYWxsIHVwcGVyY2FzZSBhbmQgdXBwZXJjYXNlIGlzIGN1c3RvbWFyeS5cbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IEdDT0RFX0tFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiBHQ09ERV9DTE9TRV9SRVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEdDT0RFX1NUQVJUXG4gICAgICAgIF0uY29uY2F0KEdDT0RFX0NPREUpXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnY29kZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=