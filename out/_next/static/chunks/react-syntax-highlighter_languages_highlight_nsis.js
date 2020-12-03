(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_nsis"],{

/***/ "./node_modules/highlight.js/lib/languages/nsis.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nsis.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: NSIS
Description: Nullsoft Scriptable Install System
Author: Jan T. Sott <jan.sott@gmail.com>
Website: https://nsis.sourceforge.io/Main_Page
*/

function nsis(hljs) {
  var CONSTANTS = {
    className: 'variable',
    begin: /\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)/
  };

  var DEFINES = {
    // ${defines}
    className: 'variable',
    begin: /\$+{[\w\.:-]+}/
  };

  var VARIABLES = {
    // $variables
    className: 'variable',
    begin: /\$+\w+/,
    illegal: /\(\){}/
  };

  var LANGUAGES = {
    // $(language_strings)
    className: 'variable',
    begin: /\$+\([\w\^\.:-]+\)/
  };

  var PARAMETERS = {
    // command parameters
    className: 'params',
    begin: '(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)'
  };

  var COMPILER = {
    // !compiler_flags
    className: 'keyword',
    begin: /\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|if|ifdef|ifmacrodef|ifmacrondef|ifndef|include|insertmacro|macro|macroend|makensis|packhdr|searchparse|searchreplace|system|tempfile|undef|verbose|warning)/
  };

  var METACHARS = {
    // $\n, $\r, $\t, $$
    className: 'meta',
    begin: /\$(\\[nrt]|\$)/
  };

  var PLUGINS = {
    // plug::ins
    className: 'class',
    begin: /\w+\:\:\w+/
  };

    var STRING = {
      className: 'string',
      variants: [
        {
          begin: '"', end: '"'
        },
        {
          begin: '\'', end: '\''
        },
        {
          begin: '`', end: '`'
        }
      ],
      illegal: /\n/,
      contains: [
        METACHARS,
        CONSTANTS,
        DEFINES,
        VARIABLES,
        LANGUAGES
      ]
  };

  return {
    name: 'NSIS',
    case_insensitive: false,
    keywords: {
      keyword:
      'Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecShellWait ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileWriteUTF16LE FileSeek FileWrite FileWriteByte FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetKnownFolderPath GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfRtlLanguage IfShellVarContextAll IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText Int64Cmp Int64CmpU Int64Fmt IntCmp IntCmpU IntFmt IntOp IntPtrCmp IntPtrCmpU IntPtrOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadAndSetImage LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestLongPathAware ManifestMaxVersionTested ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PEAddResource PEDllCharacteristics PERemoveResource PESubsysVer Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegMultiStr WriteRegNone WriteRegStr WriteUninstaller XPStyle',
      literal:
      'admin all auto both bottom bzip2 colored components current custom directory false force hide highest ifdiff ifnewer instfiles lastused leave left license listonly lzma nevershow none normal notset off on open print right show silent silentlog smooth textonly top true try un.components un.custom un.directory un.instfiles un.license uninstConfirm user Win10 Win7 Win8 WinVista zlib'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.COMMENT(
        ';',
        '$',
        {
          relevance: 0
        }
      ),
      {
        className: 'function',
        beginKeywords: 'Function PageEx Section SectionGroup', end: '$'
      },
      STRING,
      COMPILER,
      DEFINES,
      VARIABLES,
      LANGUAGES,
      PARAMETERS,
      PLUGINS,
      hljs.NUMBER_MODE
    ]
  };
}

module.exports = nsis;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25zaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfbnNpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTlNJU1xuRGVzY3JpcHRpb246IE51bGxzb2Z0IFNjcmlwdGFibGUgSW5zdGFsbCBTeXN0ZW1cbkF1dGhvcjogSmFuIFQuIFNvdHQgPGphbi5zb3R0QGdtYWlsLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vbnNpcy5zb3VyY2Vmb3JnZS5pby9NYWluX1BhZ2VcbiovXG5cbmZ1bmN0aW9uIG5zaXMoaGxqcykge1xuICB2YXIgQ09OU1RBTlRTID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogL1xcJChBRE1JTlRPT0xTfEFQUERBVEF8Q0RCVVJOX0FSRUF8Q01ETElORXxDT01NT05GSUxFUzMyfENPTU1PTkZJTEVTNjR8Q09NTU9ORklMRVN8Q09PS0lFU3xERVNLVE9QfERPQ1VNRU5UU3xFWEVESVJ8RVhFRklMRXxFWEVQQVRIfEZBVk9SSVRFU3xGT05UU3xISVNUT1JZfEhXTkRQQVJFTlR8SU5TVERJUnxJTlRFUk5FVF9DQUNIRXxMQU5HVUFHRXxMT0NBTEFQUERBVEF8TVVTSUN8TkVUSE9PRHxPVVRESVJ8UElDVFVSRVN8UExVR0lOU0RJUnxQUklOVEhPT0R8UFJPRklMRXxQUk9HUkFNRklMRVMzMnxQUk9HUkFNRklMRVM2NHxQUk9HUkFNRklMRVN8UVVJQ0tMQVVOQ0h8UkVDRU5UfFJFU09VUkNFU19MT0NBTElaRUR8UkVTT1VSQ0VTfFNFTkRUT3xTTVBST0dSQU1TfFNNU1RBUlRVUHxTVEFSVE1FTlV8U1lTRElSfFRFTVB8VEVNUExBVEVTfFZJREVPU3xXSU5ESVIpL1xuICB9O1xuXG4gIHZhciBERUZJTkVTID0ge1xuICAgIC8vICR7ZGVmaW5lc31cbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC9cXCQre1tcXHdcXC46LV0rfS9cbiAgfTtcblxuICB2YXIgVkFSSUFCTEVTID0ge1xuICAgIC8vICR2YXJpYWJsZXNcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC9cXCQrXFx3Ky8sXG4gICAgaWxsZWdhbDogL1xcKFxcKXt9L1xuICB9O1xuXG4gIHZhciBMQU5HVUFHRVMgPSB7XG4gICAgLy8gJChsYW5ndWFnZV9zdHJpbmdzKVxuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogL1xcJCtcXChbXFx3XFxeXFwuOi1dK1xcKS9cbiAgfTtcblxuICB2YXIgUEFSQU1FVEVSUyA9IHtcbiAgICAvLyBjb21tYW5kIHBhcmFtZXRlcnNcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnKEFSQ0hJVkV8RklMRV9BVFRSSUJVVEVfQVJDSElWRXxGSUxFX0FUVFJJQlVURV9OT1JNQUx8RklMRV9BVFRSSUJVVEVfT0ZGTElORXxGSUxFX0FUVFJJQlVURV9SRUFET05MWXxGSUxFX0FUVFJJQlVURV9TWVNURU18RklMRV9BVFRSSUJVVEVfVEVNUE9SQVJZfEhLQ1J8SEtDVXxIS0REfEhLRVlfQ0xBU1NFU19ST09UfEhLRVlfQ1VSUkVOVF9DT05GSUd8SEtFWV9DVVJSRU5UX1VTRVJ8SEtFWV9EWU5fREFUQXxIS0VZX0xPQ0FMX01BQ0hJTkV8SEtFWV9QRVJGT1JNQU5DRV9EQVRBfEhLRVlfVVNFUlN8SEtMTXxIS1BEfEhLVXxJREFCT1JUfElEQ0FOQ0VMfElESUdOT1JFfElETk98SURPS3xJRFJFVFJZfElEWUVTfE1CX0FCT1JUUkVUUllJR05PUkV8TUJfREVGQlVUVE9OMXxNQl9ERUZCVVRUT04yfE1CX0RFRkJVVFRPTjN8TUJfREVGQlVUVE9ONHxNQl9JQ09ORVhDTEFNQVRJT058TUJfSUNPTklORk9STUFUSU9OfE1CX0lDT05RVUVTVElPTnxNQl9JQ09OU1RPUHxNQl9PS3xNQl9PS0NBTkNFTHxNQl9SRVRSWUNBTkNFTHxNQl9SSUdIVHxNQl9SVExSRUFESU5HfE1CX1NFVEZPUkVHUk9VTkR8TUJfVE9QTU9TVHxNQl9VU0VSSUNPTnxNQl9ZRVNOT3xOT1JNQUx8T0ZGTElORXxSRUFET05MWXxTSENUWHxTSEVMTF9DT05URVhUfFNZU1RFTXxURU1QT1JBUlkpJ1xuICB9O1xuXG4gIHZhciBDT01QSUxFUiA9IHtcbiAgICAvLyAhY29tcGlsZXJfZmxhZ3NcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogL1xcIShhZGRpbmNsdWRlZGlyfGFkZHBsdWdpbmRpcnxhcHBlbmRmaWxlfGNkfGRlZmluZXxkZWxmaWxlfGVjaG98ZWxzZXxlbmRpZnxlcnJvcnxleGVjdXRlfGZpbmFsaXplfGdldGRsbHZlcnNpb258Z2V0dGxidmVyc2lvbnxpZnxpZmRlZnxpZm1hY3JvZGVmfGlmbWFjcm9uZGVmfGlmbmRlZnxpbmNsdWRlfGluc2VydG1hY3JvfG1hY3JvfG1hY3JvZW5kfG1ha2Vuc2lzfHBhY2toZHJ8c2VhcmNocGFyc2V8c2VhcmNocmVwbGFjZXxzeXN0ZW18dGVtcGZpbGV8dW5kZWZ8dmVyYm9zZXx3YXJuaW5nKS9cbiAgfTtcblxuICB2YXIgTUVUQUNIQVJTID0ge1xuICAgIC8vICRcXG4sICRcXHIsICRcXHQsICQkXG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46IC9cXCQoXFxcXFtucnRdfFxcJCkvXG4gIH07XG5cbiAgdmFyIFBMVUdJTlMgPSB7XG4gICAgLy8gcGx1Zzo6aW5zXG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luOiAvXFx3K1xcOlxcOlxcdysvXG4gIH07XG5cbiAgICB2YXIgU1RSSU5HID0ge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIE1FVEFDSEFSUyxcbiAgICAgICAgQ09OU1RBTlRTLFxuICAgICAgICBERUZJTkVTLFxuICAgICAgICBWQVJJQUJMRVMsXG4gICAgICAgIExBTkdVQUdFU1xuICAgICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ05TSVMnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgJ0Fib3J0IEFkZEJyYW5kaW5nSW1hZ2UgQWRkU2l6ZSBBbGxvd1Jvb3REaXJJbnN0YWxsIEFsbG93U2tpcEZpbGVzIEF1dG9DbG9zZVdpbmRvdyBCR0ZvbnQgQkdHcmFkaWVudCBCcmFuZGluZ1RleHQgQnJpbmdUb0Zyb250IENhbGwgQ2FsbEluc3RETEwgQ2FwdGlvbiBDaGFuZ2VVSSBDaGVja0JpdG1hcCBDbGVhckVycm9ycyBDb21wbGV0ZWRUZXh0IENvbXBvbmVudFRleHQgQ29weUZpbGVzIENSQ0NoZWNrIENyZWF0ZURpcmVjdG9yeSBDcmVhdGVGb250IENyZWF0ZVNob3J0Q3V0IERlbGV0ZSBEZWxldGVJTklTZWMgRGVsZXRlSU5JU3RyIERlbGV0ZVJlZ0tleSBEZWxldGVSZWdWYWx1ZSBEZXRhaWxQcmludCBEZXRhaWxzQnV0dG9uVGV4dCBEaXJUZXh0IERpclZhciBEaXJWZXJpZnkgRW5hYmxlV2luZG93IEVudW1SZWdLZXkgRW51bVJlZ1ZhbHVlIEV4Y2ggRXhlYyBFeGVjU2hlbGwgRXhlY1NoZWxsV2FpdCBFeGVjV2FpdCBFeHBhbmRFbnZTdHJpbmdzIEZpbGUgRmlsZUJ1ZlNpemUgRmlsZUNsb3NlIEZpbGVFcnJvclRleHQgRmlsZU9wZW4gRmlsZVJlYWQgRmlsZVJlYWRCeXRlIEZpbGVSZWFkVVRGMTZMRSBGaWxlUmVhZFdvcmQgRmlsZVdyaXRlVVRGMTZMRSBGaWxlU2VlayBGaWxlV3JpdGUgRmlsZVdyaXRlQnl0ZSBGaWxlV3JpdGVXb3JkIEZpbmRDbG9zZSBGaW5kRmlyc3QgRmluZE5leHQgRmluZFdpbmRvdyBGbHVzaElOSSBHZXRDdXJJbnN0VHlwZSBHZXRDdXJyZW50QWRkcmVzcyBHZXREbGdJdGVtIEdldERMTFZlcnNpb24gR2V0RExMVmVyc2lvbkxvY2FsIEdldEVycm9yTGV2ZWwgR2V0RmlsZVRpbWUgR2V0RmlsZVRpbWVMb2NhbCBHZXRGdWxsUGF0aE5hbWUgR2V0RnVuY3Rpb25BZGRyZXNzIEdldEluc3REaXJFcnJvciBHZXRLbm93bkZvbGRlclBhdGggR2V0TGFiZWxBZGRyZXNzIEdldFRlbXBGaWxlTmFtZSBHb3RvIEhpZGVXaW5kb3cgSWNvbiBJZkFib3J0IElmRXJyb3JzIElmRmlsZUV4aXN0cyBJZlJlYm9vdEZsYWcgSWZSdGxMYW5ndWFnZSBJZlNoZWxsVmFyQ29udGV4dEFsbCBJZlNpbGVudCBJbml0UGx1Z2luc0RpciBJbnN0YWxsQnV0dG9uVGV4dCBJbnN0YWxsQ29sb3JzIEluc3RhbGxEaXIgSW5zdGFsbERpclJlZ0tleSBJbnN0UHJvZ3Jlc3NGbGFncyBJbnN0VHlwZSBJbnN0VHlwZUdldFRleHQgSW5zdFR5cGVTZXRUZXh0IEludDY0Q21wIEludDY0Q21wVSBJbnQ2NEZtdCBJbnRDbXAgSW50Q21wVSBJbnRGbXQgSW50T3AgSW50UHRyQ21wIEludFB0ckNtcFUgSW50UHRyT3AgSXNXaW5kb3cgTGFuZ1N0cmluZyBMaWNlbnNlQmtDb2xvciBMaWNlbnNlRGF0YSBMaWNlbnNlRm9yY2VTZWxlY3Rpb24gTGljZW5zZUxhbmdTdHJpbmcgTGljZW5zZVRleHQgTG9hZEFuZFNldEltYWdlIExvYWRMYW5ndWFnZUZpbGUgTG9ja1dpbmRvdyBMb2dTZXQgTG9nVGV4dCBNYW5pZmVzdERQSUF3YXJlIE1hbmlmZXN0TG9uZ1BhdGhBd2FyZSBNYW5pZmVzdE1heFZlcnNpb25UZXN0ZWQgTWFuaWZlc3RTdXBwb3J0ZWRPUyBNZXNzYWdlQm94IE1pc2NCdXR0b25UZXh0IE5hbWUgTm9wIE91dEZpbGUgUGFnZSBQYWdlQ2FsbGJhY2tzIFBFQWRkUmVzb3VyY2UgUEVEbGxDaGFyYWN0ZXJpc3RpY3MgUEVSZW1vdmVSZXNvdXJjZSBQRVN1YnN5c1ZlciBQb3AgUHVzaCBRdWl0IFJlYWRFbnZTdHIgUmVhZElOSVN0ciBSZWFkUmVnRFdPUkQgUmVhZFJlZ1N0ciBSZWJvb3QgUmVnRExMIFJlbmFtZSBSZXF1ZXN0RXhlY3V0aW9uTGV2ZWwgUmVzZXJ2ZUZpbGUgUmV0dXJuIFJNRGlyIFNlYXJjaFBhdGggU2VjdGlvbkdldEZsYWdzIFNlY3Rpb25HZXRJbnN0VHlwZXMgU2VjdGlvbkdldFNpemUgU2VjdGlvbkdldFRleHQgU2VjdGlvbkluIFNlY3Rpb25TZXRGbGFncyBTZWN0aW9uU2V0SW5zdFR5cGVzIFNlY3Rpb25TZXRTaXplIFNlY3Rpb25TZXRUZXh0IFNlbmRNZXNzYWdlIFNldEF1dG9DbG9zZSBTZXRCcmFuZGluZ0ltYWdlIFNldENvbXByZXNzIFNldENvbXByZXNzb3IgU2V0Q29tcHJlc3NvckRpY3RTaXplIFNldEN0bENvbG9ycyBTZXRDdXJJbnN0VHlwZSBTZXREYXRhYmxvY2tPcHRpbWl6ZSBTZXREYXRlU2F2ZSBTZXREZXRhaWxzUHJpbnQgU2V0RGV0YWlsc1ZpZXcgU2V0RXJyb3JMZXZlbCBTZXRFcnJvcnMgU2V0RmlsZUF0dHJpYnV0ZXMgU2V0Rm9udCBTZXRPdXRQYXRoIFNldE92ZXJ3cml0ZSBTZXRSZWJvb3RGbGFnIFNldFJlZ1ZpZXcgU2V0U2hlbGxWYXJDb250ZXh0IFNldFNpbGVudCBTaG93SW5zdERldGFpbHMgU2hvd1VuaW5zdERldGFpbHMgU2hvd1dpbmRvdyBTaWxlbnRJbnN0YWxsIFNpbGVudFVuSW5zdGFsbCBTbGVlcCBTcGFjZVRleHRzIFN0ckNtcCBTdHJDbXBTIFN0ckNweSBTdHJMZW4gU3ViQ2FwdGlvbiBVbmljb2RlIFVuaW5zdGFsbEJ1dHRvblRleHQgVW5pbnN0YWxsQ2FwdGlvbiBVbmluc3RhbGxJY29uIFVuaW5zdGFsbFN1YkNhcHRpb24gVW5pbnN0YWxsVGV4dCBVbmluc3RQYWdlIFVuUmVnRExMIFZhciBWSUFkZFZlcnNpb25LZXkgVklGaWxlVmVyc2lvbiBWSVByb2R1Y3RWZXJzaW9uIFdpbmRvd0ljb24gV3JpdGVJTklTdHIgV3JpdGVSZWdCaW4gV3JpdGVSZWdEV09SRCBXcml0ZVJlZ0V4cGFuZFN0ciBXcml0ZVJlZ011bHRpU3RyIFdyaXRlUmVnTm9uZSBXcml0ZVJlZ1N0ciBXcml0ZVVuaW5zdGFsbGVyIFhQU3R5bGUnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICdhZG1pbiBhbGwgYXV0byBib3RoIGJvdHRvbSBiemlwMiBjb2xvcmVkIGNvbXBvbmVudHMgY3VycmVudCBjdXN0b20gZGlyZWN0b3J5IGZhbHNlIGZvcmNlIGhpZGUgaGlnaGVzdCBpZmRpZmYgaWZuZXdlciBpbnN0ZmlsZXMgbGFzdHVzZWQgbGVhdmUgbGVmdCBsaWNlbnNlIGxpc3Rvbmx5IGx6bWEgbmV2ZXJzaG93IG5vbmUgbm9ybWFsIG5vdHNldCBvZmYgb24gb3BlbiBwcmludCByaWdodCBzaG93IHNpbGVudCBzaWxlbnRsb2cgc21vb3RoIHRleHRvbmx5IHRvcCB0cnVlIHRyeSB1bi5jb21wb25lbnRzIHVuLmN1c3RvbSB1bi5kaXJlY3RvcnkgdW4uaW5zdGZpbGVzIHVuLmxpY2Vuc2UgdW5pbnN0Q29uZmlybSB1c2VyIFdpbjEwIFdpbjcgV2luOCBXaW5WaXN0YSB6bGliJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnOycsXG4gICAgICAgICckJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdGdW5jdGlvbiBQYWdlRXggU2VjdGlvbiBTZWN0aW9uR3JvdXAnLCBlbmQ6ICckJ1xuICAgICAgfSxcbiAgICAgIFNUUklORyxcbiAgICAgIENPTVBJTEVSLFxuICAgICAgREVGSU5FUyxcbiAgICAgIFZBUklBQkxFUyxcbiAgICAgIExBTkdVQUdFUyxcbiAgICAgIFBBUkFNRVRFUlMsXG4gICAgICBQTFVHSU5TLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuc2lzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==