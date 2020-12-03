(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_routeros"],{

/***/ "./node_modules/highlight.js/lib/languages/routeros.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/routeros.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Microtik RouterOS script
Author: Ivan Dementev <ivan_div@mail.ru>
Description: Scripting host provides a way to automate some router maintenance tasks by means of executing user-defined scripts bounded to some event occurrence
Website: https://wiki.mikrotik.com/wiki/Manual:Scripting
*/

// Colors from RouterOS terminal:
//   green        - #0E9A00
//   teal         - #0C9A9A
//   purple       - #99069A
//   light-brown  - #9A9900

function routeros(hljs) {

  var STATEMENTS = 'foreach do while for if from to step else on-error and or not in';

  // Global commands: Every global command should start with ":" token, otherwise it will be treated as variable.
  var GLOBAL_COMMANDS = 'global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime';

  // Common commands: Following commands available from most sub-menus:
  var COMMON_COMMANDS = 'add remove enable disable set get print export edit find run debug error info warning';

  var LITERALS = 'true false yes no nothing nil null';

  var OBJECTS = 'traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw';

  var VAR = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };

  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };

  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };
  //////////////////////////////////////////////////////////////////////
  return {
    name: 'Microtik RouterOS script',
    aliases: ['routeros', 'mikrotik'],
    case_insensitive: true,
    keywords: {
      $pattern: /:?[\w-]+/,
      literal: LITERALS,
      keyword: STATEMENTS + ' :' + STATEMENTS.split(' ').join(' :') + ' :' + GLOBAL_COMMANDS.split(' ').join(' :'),
    },
    contains: [
      { // недопустимые конструкции
        variants: [
          { begin: /^@/, end: /$/, },               // dns
          { begin: /\/\*/, end: /\*\//, },          // -- comment
          { begin: /%%/, end: /$/, },               // -- comment
          { begin: /^'/, end: /$/, },               // Monkey one line comment
          { begin: /^\s*\/[\w-]+=/, end: /$/, },    // jboss-cli
          { begin: /\/\//, end: /$/, },             // Stan comment
          { begin: /^\[\</, end: /\>\]$/, },        // F# class declaration?
          { begin: /<\//, end: />/, },              // HTML tags
          { begin: /^facet /, end: /\}/, },         // roboconf - лютый костыль )))
          { begin: '^1\\.\\.(\\d+)$', end: /$/, },  // tap
        ],
        illegal: /./,
      },
      hljs.COMMENT('^#', '$'),
      QUOTE_STRING,
      APOS_STRING,
      VAR,
      { // attribute=value
        begin: /[\w-]+\=([^\s\{\}\[\]\(\)]+)/,
        relevance: 0,
        returnBegin: true,
        contains: [
          {
            className: 'attribute',
            begin: /[^=]+/
          },
          {
            begin: /=/,
            endsWithParent:  true,
            relevance: 0,
            contains: [
              QUOTE_STRING,
              APOS_STRING,
              VAR,
              {
                className: 'literal',
                begin: '\\b(' + LITERALS.split(' ').join('|') + ')\\b',
              },
              /*{
                // IPv4 addresses and subnets
                className: 'number',
                variants: [
                  {begin: IPADDR_wBITMASK+'(,'+IPADDR_wBITMASK+')*'}, //192.168.0.0/24,1.2.3.0/24
                  {begin: IPADDR+'-'+IPADDR},       // 192.168.0.1-192.168.0.3
                  {begin: IPADDR+'(,'+IPADDR+')*'}, // 192.168.0.1,192.168.0.34,192.168.24.1,192.168.0.1
                ]
              }, // */
              /*{
                // MAC addresses and DHCP Client IDs
                className: 'number',
                begin: /\b(1:)?([0-9A-Fa-f]{1,2}[:-]){5}([0-9A-Fa-f]){1,2}\b/,
              }, //*/
              {
                // Не форматировать не классифицированные значения. Необходимо для исключения подсветки значений как built_in.
                // className: 'number',
                begin: /("[^"]*"|[^\s\{\}\[\]]+)/,
              }, //*/
            ]
          } //*/
        ]
      },//*/
      {
        // HEX values
        className: 'number',
        begin: /\*[0-9a-fA-F]+/,
      }, //*/

      {
        begin: '\\b(' + COMMON_COMMANDS.split(' ').join('|') + ')([\\s\[\(]|\])',
        returnBegin: true,
        contains: [
          {
            className: 'builtin-name', //'function',
            begin: /\w+/,
          },
        ],
      },

      {
        className: 'built_in',
        variants: [
          {begin: '(\\.\\./|/|\\s)((' + OBJECTS.split(' ').join('|') + ');?\\s)+',relevance: 10,},
          {begin: /\.\./,},
        ],
      },//*/
    ]
  };
}

module.exports = routeros;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JvdXRlcm9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRCQUE0QjtBQUNuQyxPQUFPLFlBQVksTUFBTTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEMsV0FBVyw4QkFBOEI7QUFDekMsV0FBVyx5QkFBeUI7QUFDcEMsV0FBVyx5QkFBeUI7QUFDcEMsV0FBVyxvQ0FBb0M7QUFDL0MsV0FBVywyQkFBMkI7QUFDdEMsV0FBVyxnQ0FBZ0M7QUFDM0MsV0FBVywwQkFBMEI7QUFDckMsV0FBVywyQkFBMkIsSUFBSTtBQUMxQyxXQUFXLHNDQUFzQztBQUNqRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLCtCQUErQixFQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFpRDtBQUNwRSxtQkFBbUIseUJBQXlCO0FBQzVDLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUksTUFBTSxFQUFFLGNBQWMsSUFBSTtBQUMxRSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEVBQUU7QUFDekMsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsV0FBVywrREFBK0QsdUJBQXVCO0FBQ2pHLFdBQVcsZUFBZTtBQUMxQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9yb3V0ZXJvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTWljcm90aWsgUm91dGVyT1Mgc2NyaXB0XG5BdXRob3I6IEl2YW4gRGVtZW50ZXYgPGl2YW5fZGl2QG1haWwucnU+XG5EZXNjcmlwdGlvbjogU2NyaXB0aW5nIGhvc3QgcHJvdmlkZXMgYSB3YXkgdG8gYXV0b21hdGUgc29tZSByb3V0ZXIgbWFpbnRlbmFuY2UgdGFza3MgYnkgbWVhbnMgb2YgZXhlY3V0aW5nIHVzZXItZGVmaW5lZCBzY3JpcHRzIGJvdW5kZWQgdG8gc29tZSBldmVudCBvY2N1cnJlbmNlXG5XZWJzaXRlOiBodHRwczovL3dpa2kubWlrcm90aWsuY29tL3dpa2kvTWFudWFsOlNjcmlwdGluZ1xuKi9cblxuLy8gQ29sb3JzIGZyb20gUm91dGVyT1MgdGVybWluYWw6XG4vLyAgIGdyZWVuICAgICAgICAtICMwRTlBMDBcbi8vICAgdGVhbCAgICAgICAgIC0gIzBDOUE5QVxuLy8gICBwdXJwbGUgICAgICAgLSAjOTkwNjlBXG4vLyAgIGxpZ2h0LWJyb3duICAtICM5QTk5MDBcblxuZnVuY3Rpb24gcm91dGVyb3MoaGxqcykge1xuXG4gIHZhciBTVEFURU1FTlRTID0gJ2ZvcmVhY2ggZG8gd2hpbGUgZm9yIGlmIGZyb20gdG8gc3RlcCBlbHNlIG9uLWVycm9yIGFuZCBvciBub3QgaW4nO1xuXG4gIC8vIEdsb2JhbCBjb21tYW5kczogRXZlcnkgZ2xvYmFsIGNvbW1hbmQgc2hvdWxkIHN0YXJ0IHdpdGggXCI6XCIgdG9rZW4sIG90aGVyd2lzZSBpdCB3aWxsIGJlIHRyZWF0ZWQgYXMgdmFyaWFibGUuXG4gIHZhciBHTE9CQUxfQ09NTUFORFMgPSAnZ2xvYmFsIGxvY2FsIGJlZXAgZGVsYXkgcHV0IGxlbiB0eXBlb2YgcGljayBsb2cgdGltZSBzZXQgZmluZCBlbnZpcm9ubWVudCB0ZXJtaW5hbCBlcnJvciBleGVjdXRlIHBhcnNlIHJlc29sdmUgdG9hcnJheSB0b2Jvb2wgdG9pZCB0b2lwIHRvaXA2IHRvbnVtIHRvc3RyIHRvdGltZSc7XG5cbiAgLy8gQ29tbW9uIGNvbW1hbmRzOiBGb2xsb3dpbmcgY29tbWFuZHMgYXZhaWxhYmxlIGZyb20gbW9zdCBzdWItbWVudXM6XG4gIHZhciBDT01NT05fQ09NTUFORFMgPSAnYWRkIHJlbW92ZSBlbmFibGUgZGlzYWJsZSBzZXQgZ2V0IHByaW50IGV4cG9ydCBlZGl0IGZpbmQgcnVuIGRlYnVnIGVycm9yIGluZm8gd2FybmluZyc7XG5cbiAgdmFyIExJVEVSQUxTID0gJ3RydWUgZmFsc2UgeWVzIG5vIG5vdGhpbmcgbmlsIG51bGwnO1xuXG4gIHZhciBPQkpFQ1RTID0gJ3RyYWZmaWMtZmxvdyB0cmFmZmljLWdlbmVyYXRvciBmaXJld2FsbCBzY2hlZHVsZXIgYWFhIGFjY291bnRpbmcgYWRkcmVzcy1saXN0IGFkZHJlc3MgYWxpZ24gYXJlYSBiYW5kd2lkdGgtc2VydmVyIGJmZCBiZ3AgYnJpZGdlIGNsaWVudCBjbG9jayBjb21tdW5pdHkgY29uZmlnIGNvbm5lY3Rpb24gY29uc29sZSBjdXN0b21lciBkZWZhdWx0IGRoY3AtY2xpZW50IGRoY3Atc2VydmVyIGRpc2NvdmVyeSBkbnMgZS1tYWlsIGV0aGVybmV0IGZpbHRlciBmaXJld2FsbCBmaXJtd2FyZSBncHMgZ3JhcGhpbmcgZ3JvdXAgaGFyZHdhcmUgaGVhbHRoIGhvdHNwb3QgaWRlbnRpdHkgaWdtcC1wcm94eSBpbmNvbWluZyBpbnN0YW5jZSBpbnRlcmZhY2UgaXAgaXBzZWMgaXB2NiBpcnEgbDJ0cC1zZXJ2ZXIgbGNkIGxkcCBsb2dnaW5nIG1hYy1zZXJ2ZXIgbWFjLXdpbmJveCBtYW5nbGUgbWFudWFsIG1pcnJvciBtbWUgbXBscyBuYXQgbmQgbmVpZ2hib3IgbmV0d29yayBub3RlIG50cCBvc3BmIG9zcGYtdjMgb3Zwbi1zZXJ2ZXIgcGFnZSBwZWVyIHBpbSBwaW5nIHBvbGljeSBwb29sIHBvcnQgcHBwIHBwcG9lLWNsaWVudCBwcHRwLXNlcnZlciBwcmVmaXggcHJvZmlsZSBwcm9wb3NhbCBwcm94eSBxdWV1ZSByYWRpdXMgcmVzb3VyY2UgcmlwIHJpcG5nIHJvdXRlIHJvdXRpbmcgc2NyZWVuIHNjcmlwdCBzZWN1cml0eS1wcm9maWxlcyBzZXJ2ZXIgc2VydmljZSBzZXJ2aWNlLXBvcnQgc2V0dGluZ3Mgc2hhcmVzIHNtYiBzbXMgc25pZmZlciBzbm1wIHNub29wZXIgc29ja3Mgc3N0cC1zZXJ2ZXIgc3lzdGVtIHRvb2wgdHJhY2tpbmcgdHlwZSB1cGdyYWRlIHVwbnAgdXNlci1tYW5hZ2VyIHVzZXJzIHVzZXIgdmxhbiBzZWNyZXQgdnJycCB3YXRjaGRvZyB3ZWItYWNjZXNzIHdpcmVsZXNzIHBwdHAgcHBwb2UgbGFuIHdhbiBsYXllcjctcHJvdG9jb2wgbGVhc2Ugc2ltcGxlIHJhdyc7XG5cbiAgdmFyIFZBUiA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL30sXG4gICAgICB7YmVnaW46IC9cXCRcXHsoLio/KX0vfVxuICAgIF1cbiAgfTtcblxuICB2YXIgUVVPVEVfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cIi8sIGVuZDogL1wiLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgVkFSLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvXFwkXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBBUE9TX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvJy8sIGVuZDogLycvXG4gIH07XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnTWljcm90aWsgUm91dGVyT1Mgc2NyaXB0JyxcbiAgICBhbGlhc2VzOiBbJ3JvdXRlcm9zJywgJ21pa3JvdGlrJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC86P1tcXHctXSsvLFxuICAgICAgbGl0ZXJhbDogTElURVJBTFMsXG4gICAgICBrZXl3b3JkOiBTVEFURU1FTlRTICsgJyA6JyArIFNUQVRFTUVOVFMuc3BsaXQoJyAnKS5qb2luKCcgOicpICsgJyA6JyArIEdMT0JBTF9DT01NQU5EUy5zcGxpdCgnICcpLmpvaW4oJyA6JyksXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgeyAvLyDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0LUg0LrQvtC90YHRgtGA0YPQutGG0LjQuFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgYmVnaW46IC9eQC8sIGVuZDogLyQvLCB9LCAgICAgICAgICAgICAgIC8vIGRuc1xuICAgICAgICAgIHsgYmVnaW46IC9cXC9cXCovLCBlbmQ6IC9cXCpcXC8vLCB9LCAgICAgICAgICAvLyAtLSBjb21tZW50XG4gICAgICAgICAgeyBiZWdpbjogLyUlLywgZW5kOiAvJC8sIH0sICAgICAgICAgICAgICAgLy8gLS0gY29tbWVudFxuICAgICAgICAgIHsgYmVnaW46IC9eJy8sIGVuZDogLyQvLCB9LCAgICAgICAgICAgICAgIC8vIE1vbmtleSBvbmUgbGluZSBjb21tZW50XG4gICAgICAgICAgeyBiZWdpbjogL15cXHMqXFwvW1xcdy1dKz0vLCBlbmQ6IC8kLywgfSwgICAgLy8gamJvc3MtY2xpXG4gICAgICAgICAgeyBiZWdpbjogL1xcL1xcLy8sIGVuZDogLyQvLCB9LCAgICAgICAgICAgICAvLyBTdGFuIGNvbW1lbnRcbiAgICAgICAgICB7IGJlZ2luOiAvXlxcW1xcPC8sIGVuZDogL1xcPlxcXSQvLCB9LCAgICAgICAgLy8gRiMgY2xhc3MgZGVjbGFyYXRpb24/XG4gICAgICAgICAgeyBiZWdpbjogLzxcXC8vLCBlbmQ6IC8+LywgfSwgICAgICAgICAgICAgIC8vIEhUTUwgdGFnc1xuICAgICAgICAgIHsgYmVnaW46IC9eZmFjZXQgLywgZW5kOiAvXFx9LywgfSwgICAgICAgICAvLyByb2JvY29uZiAtINC70Y7RgtGL0Lkg0LrQvtGB0YLRi9C70YwgKSkpXG4gICAgICAgICAgeyBiZWdpbjogJ14xXFxcXC5cXFxcLihcXFxcZCspJCcsIGVuZDogLyQvLCB9LCAgLy8gdGFwXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC8uLyxcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJ14jJywgJyQnKSxcbiAgICAgIFFVT1RFX1NUUklORyxcbiAgICAgIEFQT1NfU1RSSU5HLFxuICAgICAgVkFSLFxuICAgICAgeyAvLyBhdHRyaWJ1dGU9dmFsdWVcbiAgICAgICAgYmVnaW46IC9bXFx3LV0rXFw9KFteXFxzXFx7XFx9XFxbXFxdXFwoXFwpXSspLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgYmVnaW46IC9bXj1dKy9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvPS8sXG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogIHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBRVU9URV9TVFJJTkcsXG4gICAgICAgICAgICAgIEFQT1NfU1RSSU5HLFxuICAgICAgICAgICAgICBWQVIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBMSVRFUkFMUy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpXFxcXGInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvKntcbiAgICAgICAgICAgICAgICAvLyBJUHY0IGFkZHJlc3NlcyBhbmQgc3VibmV0c1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtiZWdpbjogSVBBRERSX3dCSVRNQVNLKycoLCcrSVBBRERSX3dCSVRNQVNLKycpKid9LCAvLzE5Mi4xNjguMC4wLzI0LDEuMi4zLjAvMjRcbiAgICAgICAgICAgICAgICAgIHtiZWdpbjogSVBBRERSKyctJytJUEFERFJ9LCAgICAgICAvLyAxOTIuMTY4LjAuMS0xOTIuMTY4LjAuM1xuICAgICAgICAgICAgICAgICAge2JlZ2luOiBJUEFERFIrJygsJytJUEFERFIrJykqJ30sIC8vIDE5Mi4xNjguMC4xLDE5Mi4xNjguMC4zNCwxOTIuMTY4LjI0LjEsMTkyLjE2OC4wLjFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sIC8vICovXG4gICAgICAgICAgICAgIC8qe1xuICAgICAgICAgICAgICAgIC8vIE1BQyBhZGRyZXNzZXMgYW5kIERIQ1AgQ2xpZW50IElEc1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXGIoMTopPyhbMC05QS1GYS1mXXsxLDJ9WzotXSl7NX0oWzAtOUEtRmEtZl0pezEsMn1cXGIvLFxuICAgICAgICAgICAgICB9LCAvLyovXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyDQndC1INGE0L7RgNC80LDRgtC40YDQvtCy0LDRgtGMINC90LUg0LrQu9Cw0YHRgdC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9C1INC30L3QsNGH0LXQvdC40Y8uINCd0LXQvtCx0YXQvtC00LjQvNC+INC00LvRjyDQuNGB0LrQu9GO0YfQtdC90LjRjyDQv9C+0LTRgdCy0LXRgtC60Lgg0LfQvdCw0YfQtdC90LjQuSDQutCw0LogYnVpbHRfaW4uXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogLyhcIlteXCJdKlwifFteXFxzXFx7XFx9XFxbXFxdXSspLyxcbiAgICAgICAgICAgICAgfSwgLy8qL1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0gLy8qL1xuICAgICAgICBdXG4gICAgICB9LC8vKi9cbiAgICAgIHtcbiAgICAgICAgLy8gSEVYIHZhbHVlc1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogL1xcKlswLTlhLWZBLUZdKy8sXG4gICAgICB9LCAvLyovXG5cbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQ09NTU9OX0NPTU1BTkRTLnNwbGl0KCcgJykuam9pbignfCcpICsgJykoW1xcXFxzXFxbXFwoXXxcXF0pJyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRpbi1uYW1lJywgLy8nZnVuY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46IC9cXHcrLyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiAnKFxcXFwuXFxcXC4vfC98XFxcXHMpKCgnICsgT0JKRUNUUy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpOz9cXFxccykrJyxyZWxldmFuY2U6IDEwLH0sXG4gICAgICAgICAge2JlZ2luOiAvXFwuXFwuLyx9LFxuICAgICAgICBdLFxuICAgICAgfSwvLyovXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcm9zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==