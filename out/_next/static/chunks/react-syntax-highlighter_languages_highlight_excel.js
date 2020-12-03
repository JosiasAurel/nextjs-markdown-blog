(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_excel"],{

/***/ "./node_modules/highlight.js/lib/languages/excel.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/excel.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Excel formulae
Author: Victor Zhou <OiCMudkips@users.noreply.github.com>
Description: Excel formulae
Website: https://products.office.com/en-us/excel/
*/

function excel(hljs) {
  return {
    name: 'Excel formulae',
    aliases: ['xlsx', 'xls'],
    case_insensitive: true,
    // built-in functions imported from https://web.archive.org/web/20160513042710/https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188
    keywords: {
        $pattern: /[a-zA-Z][\w\.]*/,
        built_in: 'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'
    },
    contains: [
      {
        /* matches a beginning equal sign found in Excel formula examples */
        begin: /^=/,
        end: /[^=]/, returnEnd: true, illegal: /=/, /* only allow single equal sign at front of line */
        relevance: 10
      },
      /* technically, there can be more than 2 letters in column names, but this prevents conflict with some keywords */
      {
        /* matches a reference to a single cell */
        className: 'symbol',
        begin: /\b[A-Z]{1,2}\d+\b/,
        end: /[^\d]/, excludeEnd: true,
        relevance: 0
      },
      {
        /* matches a reference to a range of cells */
        className: 'symbol',
        begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
        relevance: 0
      },
      hljs.BACKSLASH_ESCAPE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        begin: hljs.NUMBER_RE + '(%)?',
        relevance: 0
      },
      /* Excel formula comments are done by putting the comment in a function call to N() */
      hljs.COMMENT(/\bN\(/,/\)/,
      {
        excludeBegin: true,
        excludeEnd: true,
        illegal: /\n/
      })
    ]
  };
}

module.exports = excel;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2V4Y2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSSxVQUFVLElBQUk7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9leGNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRXhjZWwgZm9ybXVsYWVcbkF1dGhvcjogVmljdG9yIFpob3UgPE9pQ011ZGtpcHNAdXNlcnMubm9yZXBseS5naXRodWIuY29tPlxuRGVzY3JpcHRpb246IEV4Y2VsIGZvcm11bGFlXG5XZWJzaXRlOiBodHRwczovL3Byb2R1Y3RzLm9mZmljZS5jb20vZW4tdXMvZXhjZWwvXG4qL1xuXG5mdW5jdGlvbiBleGNlbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0V4Y2VsIGZvcm11bGFlJyxcbiAgICBhbGlhc2VzOiBbJ3hsc3gnLCAneGxzJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICAvLyBidWlsdC1pbiBmdW5jdGlvbnMgaW1wb3J0ZWQgZnJvbSBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNjA1MTMwNDI3MTAvaHR0cHM6Ly9zdXBwb3J0Lm9mZmljZS5jb20vZW4tdXMvYXJ0aWNsZS9FeGNlbC1mdW5jdGlvbnMtYWxwaGFiZXRpY2FsLWIzOTQ0NTcyLTI1NWQtNGVmYi1iYjk2LWM2ZDkwMDMzZTE4OFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAgICRwYXR0ZXJuOiAvW2EtekEtWl1bXFx3XFwuXSovLFxuICAgICAgICBidWlsdF9pbjogJ0FCUyBBQ0NSSU5UIEFDQ1JJTlRNIEFDT1MgQUNPU0ggQUNPVCBBQ09USCBBR0dSRUdBVEUgQUREUkVTUyBBTU9SREVHUkMgQU1PUkxJTkMgQU5EIEFSQUJJQyBBUkVBUyBBU0MgQVNJTiBBU0lOSCBBVEFOIEFUQU4yIEFUQU5IIEFWRURFViBBVkVSQUdFIEFWRVJBR0VBIEFWRVJBR0VJRiBBVkVSQUdFSUZTIEJBSFRURVhUIEJBU0UgQkVTU0VMSSBCRVNTRUxKIEJFU1NFTEsgQkVTU0VMWSBCRVRBRElTVCBCRVRBLkRJU1QgQkVUQUlOViBCRVRBLklOViBCSU4yREVDIEJJTjJIRVggQklOMk9DVCBCSU5PTURJU1QgQklOT00uRElTVCBCSU5PTS5ESVNULlJBTkdFIEJJTk9NLklOViBCSVRBTkQgQklUTFNISUZUIEJJVE9SIEJJVFJTSElGVCBCSVRYT1IgQ0FMTCBDRUlMSU5HIENFSUxJTkcuTUFUSCBDRUlMSU5HLlBSRUNJU0UgQ0VMTCBDSEFSIENISURJU1QgQ0hJSU5WIENISVRFU1QgQ0hJU1EuRElTVCBDSElTUS5ESVNULlJUIENISVNRLklOViBDSElTUS5JTlYuUlQgQ0hJU1EuVEVTVCBDSE9PU0UgQ0xFQU4gQ09ERSBDT0xVTU4gQ09MVU1OUyBDT01CSU4gQ09NQklOQSBDT01QTEVYIENPTkNBVCBDT05DQVRFTkFURSBDT05GSURFTkNFIENPTkZJREVOQ0UuTk9STSBDT05GSURFTkNFLlQgQ09OVkVSVCBDT1JSRUwgQ09TIENPU0ggQ09UIENPVEggQ09VTlQgQ09VTlRBIENPVU5UQkxBTksgQ09VTlRJRiBDT1VOVElGUyBDT1VQREFZQlMgQ09VUERBWVMgQ09VUERBWVNOQyBDT1VQTkNEIENPVVBOVU0gQ09VUFBDRCBDT1ZBUiBDT1ZBUklBTkNFLlAgQ09WQVJJQU5DRS5TIENSSVRCSU5PTSBDU0MgQ1NDSCBDVUJFS1BJTUVNQkVSIENVQkVNRU1CRVIgQ1VCRU1FTUJFUlBST1BFUlRZIENVQkVSQU5LRURNRU1CRVIgQ1VCRVNFVCBDVUJFU0VUQ09VTlQgQ1VCRVZBTFVFIENVTUlQTVQgQ1VNUFJJTkMgREFURSBEQVRFRElGIERBVEVWQUxVRSBEQVZFUkFHRSBEQVkgREFZUyBEQVlTMzYwIERCIERCQ1MgRENPVU5UIERDT1VOVEEgRERCIERFQzJCSU4gREVDMkhFWCBERUMyT0NUIERFQ0lNQUwgREVHUkVFUyBERUxUQSBERVZTUSBER0VUIERJU0MgRE1BWCBETUlOIERPTExBUiBET0xMQVJERSBET0xMQVJGUiBEUFJPRFVDVCBEU1RERVYgRFNUREVWUCBEU1VNIERVUkFUSU9OIERWQVIgRFZBUlAgRURBVEUgRUZGRUNUIEVOQ09ERVVSTCBFT01PTlRIIEVSRiBFUkYuUFJFQ0lTRSBFUkZDIEVSRkMuUFJFQ0lTRSBFUlJPUi5UWVBFIEVVUk9DT05WRVJUIEVWRU4gRVhBQ1QgRVhQIEVYUE9OLkRJU1QgRVhQT05ESVNUIEZBQ1QgRkFDVERPVUJMRSBGQUxTRXwwIEYuRElTVCBGRElTVCBGLkRJU1QuUlQgRklMVEVSWE1MIEZJTkQgRklOREIgRi5JTlYgRi5JTlYuUlQgRklOViBGSVNIRVIgRklTSEVSSU5WIEZJWEVEIEZMT09SIEZMT09SLk1BVEggRkxPT1IuUFJFQ0lTRSBGT1JFQ0FTVCBGT1JFQ0FTVC5FVFMgRk9SRUNBU1QuRVRTLkNPTkZJTlQgRk9SRUNBU1QuRVRTLlNFQVNPTkFMSVRZIEZPUkVDQVNULkVUUy5TVEFUIEZPUkVDQVNULkxJTkVBUiBGT1JNVUxBVEVYVCBGUkVRVUVOQ1kgRi5URVNUIEZURVNUIEZWIEZWU0NIRURVTEUgR0FNTUEgR0FNTUEuRElTVCBHQU1NQURJU1QgR0FNTUEuSU5WIEdBTU1BSU5WIEdBTU1BTE4gR0FNTUFMTi5QUkVDSVNFIEdBVVNTIEdDRCBHRU9NRUFOIEdFU1RFUCBHRVRQSVZPVERBVEEgR1JPV1RIIEhBUk1FQU4gSEVYMkJJTiBIRVgyREVDIEhFWDJPQ1QgSExPT0tVUCBIT1VSIEhZUEVSTElOSyBIWVBHRU9NLkRJU1QgSFlQR0VPTURJU1QgSUYgSUZFUlJPUiBJRk5BIElGUyBJTUFCUyBJTUFHSU5BUlkgSU1BUkdVTUVOVCBJTUNPTkpVR0FURSBJTUNPUyBJTUNPU0ggSU1DT1QgSU1DU0MgSU1DU0NIIElNRElWIElNRVhQIElNTE4gSU1MT0cxMCBJTUxPRzIgSU1QT1dFUiBJTVBST0RVQ1QgSU1SRUFMIElNU0VDIElNU0VDSCBJTVNJTiBJTVNJTkggSU1TUVJUIElNU1VCIElNU1VNIElNVEFOIElOREVYIElORElSRUNUIElORk8gSU5UIElOVEVSQ0VQVCBJTlRSQVRFIElQTVQgSVJSIElTQkxBTksgSVNFUlIgSVNFUlJPUiBJU0VWRU4gSVNGT1JNVUxBIElTTE9HSUNBTCBJU05BIElTTk9OVEVYVCBJU05VTUJFUiBJU09ERCBJU1JFRiBJU1RFWFQgSVNPLkNFSUxJTkcgSVNPV0VFS05VTSBJU1BNVCBKSVMgS1VSVCBMQVJHRSBMQ00gTEVGVCBMRUZUQiBMRU4gTEVOQiBMSU5FU1QgTE4gTE9HIExPRzEwIExPR0VTVCBMT0dJTlYgTE9HTk9STS5ESVNUIExPR05PUk1ESVNUIExPR05PUk0uSU5WIExPT0tVUCBMT1dFUiBNQVRDSCBNQVggTUFYQSBNQVhJRlMgTURFVEVSTSBNRFVSQVRJT04gTUVESUFOIE1JRCBNSURCcyBNSU4gTUlOSUZTIE1JTkEgTUlOVVRFIE1JTlZFUlNFIE1JUlIgTU1VTFQgTU9EIE1PREUgTU9ERS5NVUxUIE1PREUuU05HTCBNT05USCBNUk9VTkQgTVVMVElOT01JQUwgTVVOSVQgTiBOQSBORUdCSU5PTS5ESVNUIE5FR0JJTk9NRElTVCBORVRXT1JLREFZUyBORVRXT1JLREFZUy5JTlRMIE5PTUlOQUwgTk9STS5ESVNUIE5PUk1ESVNUIE5PUk1JTlYgTk9STS5JTlYgTk9STS5TLkRJU1QgTk9STVNESVNUIE5PUk0uUy5JTlYgTk9STVNJTlYgTk9UIE5PVyBOUEVSIE5QViBOVU1CRVJWQUxVRSBPQ1QyQklOIE9DVDJERUMgT0NUMkhFWCBPREQgT0RERlBSSUNFIE9EREZZSUVMRCBPRERMUFJJQ0UgT0RETFlJRUxEIE9GRlNFVCBPUiBQRFVSQVRJT04gUEVBUlNPTiBQRVJDRU5USUxFLkVYQyBQRVJDRU5USUxFLklOQyBQRVJDRU5USUxFIFBFUkNFTlRSQU5LLkVYQyBQRVJDRU5UUkFOSy5JTkMgUEVSQ0VOVFJBTksgUEVSTVVUIFBFUk1VVEFUSU9OQSBQSEkgUEhPTkVUSUMgUEkgUE1UIFBPSVNTT04uRElTVCBQT0lTU09OIFBPV0VSIFBQTVQgUFJJQ0UgUFJJQ0VESVNDIFBSSUNFTUFUIFBST0IgUFJPRFVDVCBQUk9QRVIgUFYgUVVBUlRJTEUgUVVBUlRJTEUuRVhDIFFVQVJUSUxFLklOQyBRVU9USUVOVCBSQURJQU5TIFJBTkQgUkFOREJFVFdFRU4gUkFOSy5BVkcgUkFOSy5FUSBSQU5LIFJBVEUgUkVDRUlWRUQgUkVHSVNURVIuSUQgUkVQTEFDRSBSRVBMQUNFQiBSRVBUIFJJR0hUIFJJR0hUQiBST01BTiBST1VORCBST1VORERPV04gUk9VTkRVUCBST1cgUk9XUyBSUkkgUlNRIFJURCBTRUFSQ0ggU0VBUkNIQiBTRUMgU0VDSCBTRUNPTkQgU0VSSUVTU1VNIFNIRUVUIFNIRUVUUyBTSUdOIFNJTiBTSU5IIFNLRVcgU0tFVy5QIFNMTiBTTE9QRSBTTUFMTCBTUUwuUkVRVUVTVCBTUVJUIFNRUlRQSSBTVEFOREFSRElaRSBTVERFViBTVERFVi5QIFNUREVWLlMgU1RERVZBIFNUREVWUCBTVERFVlBBIFNURVlYIFNVQlNUSVRVVEUgU1VCVE9UQUwgU1VNIFNVTUlGIFNVTUlGUyBTVU1QUk9EVUNUIFNVTVNRIFNVTVgyTVkyIFNVTVgyUFkyIFNVTVhNWTIgU1dJVENIIFNZRCBUIFRBTiBUQU5IIFRCSUxMRVEgVEJJTExQUklDRSBUQklMTFlJRUxEIFQuRElTVCBULkRJU1QuMlQgVC5ESVNULlJUIFRESVNUIFRFWFQgVEVYVEpPSU4gVElNRSBUSU1FVkFMVUUgVC5JTlYgVC5JTlYuMlQgVElOViBUT0RBWSBUUkFOU1BPU0UgVFJFTkQgVFJJTSBUUklNTUVBTiBUUlVFfDAgVFJVTkMgVC5URVNUIFRURVNUIFRZUEUgVU5JQ0hBUiBVTklDT0RFIFVQUEVSIFZBTFVFIFZBUiBWQVIuUCBWQVIuUyBWQVJBIFZBUlAgVkFSUEEgVkRCIFZMT09LVVAgV0VCU0VSVklDRSBXRUVLREFZIFdFRUtOVU0gV0VJQlVMTCBXRUlCVUxMLkRJU1QgV09SS0RBWSBXT1JLREFZLklOVEwgWElSUiBYTlBWIFhPUiBZRUFSIFlFQVJGUkFDIFlJRUxEIFlJRUxERElTQyBZSUVMRE1BVCBaLlRFU1QgWlRFU1QnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICAvKiBtYXRjaGVzIGEgYmVnaW5uaW5nIGVxdWFsIHNpZ24gZm91bmQgaW4gRXhjZWwgZm9ybXVsYSBleGFtcGxlcyAqL1xuICAgICAgICBiZWdpbjogL149LyxcbiAgICAgICAgZW5kOiAvW149XS8sIHJldHVybkVuZDogdHJ1ZSwgaWxsZWdhbDogLz0vLCAvKiBvbmx5IGFsbG93IHNpbmdsZSBlcXVhbCBzaWduIGF0IGZyb250IG9mIGxpbmUgKi9cbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8qIHRlY2huaWNhbGx5LCB0aGVyZSBjYW4gYmUgbW9yZSB0aGFuIDIgbGV0dGVycyBpbiBjb2x1bW4gbmFtZXMsIGJ1dCB0aGlzIHByZXZlbnRzIGNvbmZsaWN0IHdpdGggc29tZSBrZXl3b3JkcyAqL1xuICAgICAge1xuICAgICAgICAvKiBtYXRjaGVzIGEgcmVmZXJlbmNlIHRvIGEgc2luZ2xlIGNlbGwgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46IC9cXGJbQS1aXXsxLDJ9XFxkK1xcYi8sXG4gICAgICAgIGVuZDogL1teXFxkXS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLyogbWF0Y2hlcyBhIHJlZmVyZW5jZSB0byBhIHJhbmdlIG9mIGNlbGxzICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAvW0EtWl17MCwyfVxcZCo6W0EtWl17MCwyfVxcZCovLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogaGxqcy5OVU1CRVJfUkUgKyAnKCUpPycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8qIEV4Y2VsIGZvcm11bGEgY29tbWVudHMgYXJlIGRvbmUgYnkgcHV0dGluZyB0aGUgY29tbWVudCBpbiBhIGZ1bmN0aW9uIGNhbGwgdG8gTigpICovXG4gICAgICBobGpzLkNPTU1FTlQoL1xcYk5cXCgvLC9cXCkvLFxuICAgICAge1xuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vXG4gICAgICB9KVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleGNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=