(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_puppet"],{

/***/ "./node_modules/highlight.js/lib/languages/puppet.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/puppet.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Puppet
Author: Jose Molina Colmenero <gaudy41@gmail.com>
Website: https://puppet.com/docs
Category: config
*/

function puppet(hljs) {

  var PUPPET_KEYWORDS = {
    keyword:
    /* language keywords */
      'and case default else elsif false if in import enherits node or true undef unless main settings $string ',
    literal:
    /* metaparameters */
      'alias audit before loglevel noop require subscribe tag ' +
    /* normal attributes */
      'owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check ' +
      'en_address ip_address realname command environment hour monute month monthday special target weekday '+
      'creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore ' +
      'links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source ' +
      'souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid '+
      'ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel ' +
      'native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options ' +
      'device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use ' +
      'message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform ' +
      'responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running ' +
      'start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age ' +
      'password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled ' +
      'enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist ' +
      'priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey ' +
      'sslverify mounted',
    built_in:
    /* core facts */
      'architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers ' +
      'domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces '+
      'ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion ' +
      'kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease ' +
      'lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major ' +
      'macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease '+
      'operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion '+
      'rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced '+
      'selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime '+
      'uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version'
  };

  var COMMENT = hljs.COMMENT('#', '$');

  var IDENT_RE = '([A-Za-z_]|::)(\\w|::)*';

  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE});

  var VARIABLE = {className: 'variable', begin: '\\$' + IDENT_RE};

  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, VARIABLE],
    variants: [
      {begin: /'/, end: /'/},
      {begin: /"/, end: /"/}
    ]
  };

  return {
    name: 'Puppet',
    aliases: ['pp'],
    contains: [
      COMMENT,
      VARIABLE,
      STRING,
      {
        beginKeywords: 'class', end: '\\{|;',
        illegal: /=/,
        contains: [TITLE, COMMENT]
      },
      {
        beginKeywords: 'define', end: /\{/,
        contains: [
          {
            className: 'section', begin: hljs.IDENT_RE, endsParent: true
          }
        ]
      },
      {
        begin: hljs.IDENT_RE + '\\s+\\{', returnBegin: true,
        end: /\S/,
        contains: [
          {
            className: 'keyword',
            begin: hljs.IDENT_RE
          },
          {
            begin: /\{/, end: /\}/,
            keywords: PUPPET_KEYWORDS,
            relevance: 0,
            contains: [
              STRING,
              COMMENT,
              {
                begin:'[a-zA-Z_]+\\s*=>',
                returnBegin: true, end: '=>',
                contains: [
                  {
                    className: 'attr',
                    begin: hljs.IDENT_RE,
                  }
                ]
              },
              {
                className: 'number',
                begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
                relevance: 0
              },
              VARIABLE
            ]
          }
        ],
        relevance: 0
      }
    ]
  }
}

module.exports = puppet;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3B1cHBldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDZDQUE2QyxnQkFBZ0I7O0FBRTdELGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFCQUFxQjtBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEVBQUU7QUFDM0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X3B1cHBldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUHVwcGV0XG5BdXRob3I6IEpvc2UgTW9saW5hIENvbG1lbmVybyA8Z2F1ZHk0MUBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL3B1cHBldC5jb20vZG9jc1xuQ2F0ZWdvcnk6IGNvbmZpZ1xuKi9cblxuZnVuY3Rpb24gcHVwcGV0KGhsanMpIHtcblxuICB2YXIgUFVQUEVUX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgLyogbGFuZ3VhZ2Uga2V5d29yZHMgKi9cbiAgICAgICdhbmQgY2FzZSBkZWZhdWx0IGVsc2UgZWxzaWYgZmFsc2UgaWYgaW4gaW1wb3J0IGVuaGVyaXRzIG5vZGUgb3IgdHJ1ZSB1bmRlZiB1bmxlc3MgbWFpbiBzZXR0aW5ncyAkc3RyaW5nICcsXG4gICAgbGl0ZXJhbDpcbiAgICAvKiBtZXRhcGFyYW1ldGVycyAqL1xuICAgICAgJ2FsaWFzIGF1ZGl0IGJlZm9yZSBsb2dsZXZlbCBub29wIHJlcXVpcmUgc3Vic2NyaWJlIHRhZyAnICtcbiAgICAvKiBub3JtYWwgYXR0cmlidXRlcyAqL1xuICAgICAgJ293bmVyIGVuc3VyZSBncm91cCBtb2RlIG5hbWV8MCBjaGFuZ2VzIGNvbnRleHQgZm9yY2UgaW5jbCBsZW5zIGxvYWRfcGF0aCBvbmx5aWYgcHJvdmlkZXIgcmV0dXJucyByb290IHNob3dfZGlmZiB0eXBlX2NoZWNrICcgK1xuICAgICAgJ2VuX2FkZHJlc3MgaXBfYWRkcmVzcyByZWFsbmFtZSBjb21tYW5kIGVudmlyb25tZW50IGhvdXIgbW9udXRlIG1vbnRoIG1vbnRoZGF5IHNwZWNpYWwgdGFyZ2V0IHdlZWtkYXkgJytcbiAgICAgICdjcmVhdGVzIGN3ZCBvZ291dHB1dCByZWZyZXNoIHJlZnJlc2hvbmx5IHRyaWVzIHRyeV9zbGVlcCB1bWFzayBiYWNrdXAgY2hlY2tzdW0gY29udGVudCBjdGltZSBmb3JjZSBpZ25vcmUgJyArXG4gICAgICAnbGlua3MgbXRpbWUgcHVyZ2UgcmVjdXJzZSByZWN1cnNlbGltaXQgcmVwbGFjZSBzZWxpbnV4X2lnbm9yZV9kZWZhdWx0cyBzZWxyYW5nZSBzZWxyb2xlIHNlbHR5cGUgc2VsdXNlciBzb3VyY2UgJyArXG4gICAgICAnc291aXJjZV9wZXJtaXNzaW9ucyBzb3VyY2VzZWxlY3QgdmFsaWRhdGVfY21kIHZhbGlkYXRlX3JlcGxhY2VtZW50IGFsbG93ZHVwZSBhdHRyaWJ1dGVfbWVtYmVyc2hpcCBhdXRoX21lbWJlcnNoaXAgZm9yY2Vsb2NhbCBnaWQgJytcbiAgICAgICdpYV9sb2FkX21vZHVsZSBtZW1iZXJzIHN5c3RlbSBob3N0X2FsaWFzZXMgaXAgYWxsb3dlZF90cnVua192bGFucyBkZXNjcmlwdGlvbiBkZXZpY2VfdXJsIGR1cGxleCBlbmNhcHN1bGF0aW9uIGV0aGVyY2hhbm5lbCAnICtcbiAgICAgICduYXRpdmVfdmxhbiBzcGVlZCBwcmluY2lwYWxzIGFsbG93X3Jvb3QgYXV0aF9jbGFzcyBhdXRoX3R5cGUgYXV0aGVudGljYXRlX3VzZXIga19vZl9uIG1lY2hhbmlzbXMgcnVsZSBzZXNzaW9uX293bmVyIHNoYXJlZCBvcHRpb25zICcgK1xuICAgICAgJ2RldmljZSBmc3R5cGUgZW5hYmxlIGhhc3Jlc3RhcnQgZGlyZWN0b3J5IHByZXNlbnQgYWJzZW50IGxpbmsgYXRib290IGJsb2NrZGV2aWNlIGRldmljZSBkdW1wIHBhc3MgcmVtb3VudHMgcG9sbGVyX3RhZyB1c2UgJyArXG4gICAgICAnbWVzc2FnZSB3aXRocGF0aCBhZG1pbmZpbGUgYWxsb3dfdmlydHVhbCBhbGxvd2Nkcm9tIGNhdGVnb3J5IGNvbmZpZ2ZpbGVzIGZsYXZvciBpbnN0YWxsX29wdGlvbnMgaW5zdGFuY2UgcGFja2FnZV9zZXR0aW5ncyBwbGF0Zm9ybSAnICtcbiAgICAgICdyZXNwb25zZWZpbGUgc3RhdHVzIHVuaW5zdGFsbF9vcHRpb25zIHZlbmRvciB1bmxlc3Nfc3lzdGVtX3VzZXIgdW5sZXNzX3VpZCBiaW5hcnkgY29udHJvbCBmbGFncyBoYXNzdGF0dXMgbWFuaWZlc3QgcGF0dGVybiByZXN0YXJ0IHJ1bm5pbmcgJyArXG4gICAgICAnc3RhcnQgc3RvcCBhbGxvd2R1cGUgYXV0aHMgZXhwaXJ5IGdpZCBncm91cHMgaG9tZSBpdGVyYXRpb25zIGtleV9tZW1iZXJzaGlwIGtleXMgbWFuYWdlaG9tZSBtZW1iZXJzaGlwIHBhc3N3b3JkIHBhc3N3b3JkX21heF9hZ2UgJyArXG4gICAgICAncGFzc3dvcmRfbWluX2FnZSBwcm9maWxlX21lbWJlcnNoaXAgcHJvZmlsZXMgcHJvamVjdCBwdXJnZV9zc2hfa2V5cyByb2xlX21lbWJlcnNoaXAgcm9sZXMgc2FsdCBzaGVsbCB1aWQgYmFzZXVybCBjb3N0IGRlc2NyIGVuYWJsZWQgJyArXG4gICAgICAnZW5hYmxlZ3JvdXBzIGV4Y2x1ZGUgZmFpbG92ZXJtZXRob2QgZ3BnY2hlY2sgZ3Bna2V5IGh0dHBfY2FjaGluZyBpbmNsdWRlIGluY2x1ZGVwa2dzIGtlZXBhbGl2ZSBtZXRhZGF0YV9leHBpcmUgbWV0YWxpbmsgbWlycm9ybGlzdCAnICtcbiAgICAgICdwcmlvcml0eSBwcm90ZWN0IHByb3h5IHByb3h5X3Bhc3N3b3JkIHByb3h5X3VzZXJuYW1lIHJlcG9fZ3BnY2hlY2sgczNfZW5hYmxlZCBza2lwX2lmX3VuYXZhaWxhYmxlIHNzbGNhY2VydCBzc2xjbGllbnRjZXJ0IHNzbGNsaWVudGtleSAnICtcbiAgICAgICdzc2x2ZXJpZnkgbW91bnRlZCcsXG4gICAgYnVpbHRfaW46XG4gICAgLyogY29yZSBmYWN0cyAqL1xuICAgICAgJ2FyY2hpdGVjdHVyZSBhdWdlYXN2ZXJzaW9uIGJsb2NrZGV2aWNlcyBib2FyZG1hbnVmYWN0dXJlciBib2FyZHByb2R1Y3RuYW1lIGJvYXJkc2VyaWFsbnVtYmVyIGNma2V5IGRoY3Bfc2VydmVycyAnICtcbiAgICAgICdkb21haW4gZWMyXyBlYzJfdXNlcmRhdGEgZmFjdGVydmVyc2lvbiBmaWxlc3lzdGVtcyBsZG9tIGZxZG4gZ2lkIGhhcmR3YXJlaXNhIGhhcmR3YXJlbW9kZWwgaG9zdG5hbWUgaWR8MCBpbnRlcmZhY2VzICcrXG4gICAgICAnaXBhZGRyZXNzIGlwYWRkcmVzc18gaXBhZGRyZXNzNiBpcGFkZHJlc3M2XyBpcGhvc3RudW1iZXIgaXNfdmlydHVhbCBrZXJuZWwga2VybmVsbWFqdmVyc2lvbiBrZXJuZWxyZWxlYXNlIGtlcm5lbHZlcnNpb24gJyArXG4gICAgICAna2VybmVscmVsZWFzZSBrZXJuZWx2ZXJzaW9uIGxzYmRpc3Rjb2RlbmFtZSBsc2JkaXN0ZGVzY3JpcHRpb24gbHNiZGlzdGlkIGxzYmRpc3RyZWxlYXNlIGxzYm1hamRpc3RyZWxlYXNlIGxzYm1pbm9yZGlzdHJlbGVhc2UgJyArXG4gICAgICAnbHNicmVsZWFzZSBtYWNhZGRyZXNzIG1hY2FkZHJlc3NfIG1hY29zeF9idWlsZHZlcnNpb24gbWFjb3N4X3Byb2R1Y3RuYW1lIG1hY29zeF9wcm9kdWN0dmVyc2lvbiBtYWNvc3hfcHJvZHVjdHZlcnNvbl9tYWpvciAnICtcbiAgICAgICdtYWNvc3hfcHJvZHVjdHZlcnNpb25fbWlub3IgbWFudWZhY3R1cmVyIG1lbW9yeWZyZWUgbWVtb3J5c2l6ZSBuZXRtYXNrIG1ldG1hc2tfIG5ldHdvcmtfIG9wZXJhdGluZ3N5c3RlbSBvcGVyYXRpbmdzeXN0ZW1tYWpyZWxlYXNlICcrXG4gICAgICAnb3BlcmF0aW5nc3lzdGVtcmVsZWFzZSBvc2ZhbWlseSBwYXJ0aXRpb25zIHBhdGggcGh5c2ljYWxwcm9jZXNzb3Jjb3VudCBwcm9jZXNzb3IgcHJvY2Vzc29yY291bnQgcHJvZHVjdG5hbWUgcHMgcHVwcGV0dmVyc2lvbiAnK1xuICAgICAgJ3J1YnlzaXRlZGlyIHJ1Ynl2ZXJzaW9uIHNlbGludXggc2VsaW51eF9jb25maWdfbW9kZSBzZWxpbnV4X2NvbmZpZ19wb2xpY3kgc2VsaW51eF9jdXJyZW50X21vZGUgc2VsaW51eF9jdXJyZW50X21vZGUgc2VsaW51eF9lbmZvcmNlZCAnK1xuICAgICAgJ3NlbGludXhfcG9saWN5dmVyc2lvbiBzZXJpYWxudW1iZXIgc3BfIHNzaGRzYWtleSBzc2hlY2RzYWtleSBzc2hyc2FrZXkgc3dhcGVuY3J5cHRlZCBzd2FwZnJlZSBzd2Fwc2l6ZSB0aW1lem9uZSB0eXBlIHVuaXF1ZWlkIHVwdGltZSAnK1xuICAgICAgJ3VwdGltZV9kYXlzIHVwdGltZV9ob3VycyB1cHRpbWVfc2Vjb25kcyB1dWlkIHZpcnR1YWwgdmxhbnMgeGVuZG9tYWlucyB6ZnNfdmVyc2lvbiB6b25lbmFlIHpvbmVzIHpwb29sX3ZlcnNpb24nXG4gIH07XG5cbiAgdmFyIENPTU1FTlQgPSBobGpzLkNPTU1FTlQoJyMnLCAnJCcpO1xuXG4gIHZhciBJREVOVF9SRSA9ICcoW0EtWmEtel9dfDo6KShcXFxcd3w6OikqJztcblxuICB2YXIgVElUTEUgPSBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46IElERU5UX1JFfSk7XG5cbiAgdmFyIFZBUklBQkxFID0ge2NsYXNzTmFtZTogJ3ZhcmlhYmxlJywgYmVnaW46ICdcXFxcJCcgKyBJREVOVF9SRX07XG5cbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBWQVJJQUJMRV0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogLycvLCBlbmQ6IC8nL30sXG4gICAgICB7YmVnaW46IC9cIi8sIGVuZDogL1wiL31cbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnUHVwcGV0JyxcbiAgICBhbGlhc2VzOiBbJ3BwJ10sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIENPTU1FTlQsXG4gICAgICBWQVJJQUJMRSxcbiAgICAgIFNUUklORyxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzJywgZW5kOiAnXFxcXHt8OycsXG4gICAgICAgIGlsbGVnYWw6IC89LyxcbiAgICAgICAgY29udGFpbnM6IFtUSVRMRSwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdkZWZpbmUnLCBlbmQ6IC9cXHsvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLCBiZWdpbjogaGxqcy5JREVOVF9SRSwgZW5kc1BhcmVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnXFxcXHMrXFxcXHsnLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgZW5kOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcey8sIGVuZDogL1xcfS8sXG4gICAgICAgICAgICBrZXl3b3JkczogUFVQUEVUX0tFWVdPUkRTLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgICBDT01NRU5ULFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46J1thLXpBLVpfXStcXFxccyo9PicsXG4gICAgICAgICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsIGVuZDogJz0+JyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJyhcXFxcYjBbMC03X10rKXwoXFxcXGIweFswLTlhLWZBLUZfXSspfChcXFxcYlsxLTldWzAtOV9dKihcXFxcLlswLTlfXSspPyl8WzBfXVxcXFxiJyxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgVkFSSUFCTEVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHB1cHBldDtcbiJdLCJzb3VyY2VSb290IjoiIn0=