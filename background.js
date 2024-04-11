require = (function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
  "./config": [function (require, module, exports) {
    module.exports = {
      name: "Browsec",
      browsec: {
        apiPrefix: "https://d1blmth2c5vbem.cloudfront.net/v1/",
        locationApiPrefix: "http://d2nib9hpvmumkf.cloudfront.net/v1/"
      },
      ga: {
        enabled: true,
        extension_id: "omghfjlpggmjjaagoclmmobgdodcjboh",
        tracking_id: 'UA-43024042-1'
      },
      proxy: {
        defaultCountry: "us",
        settings: {
          version: 4,
          countries: {
            nl: {
              servers: [
                {
                  host: "nl1.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl2.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl3.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl4.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl5.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl6.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl7.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl8.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl9.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl10.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl11.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl12.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl13.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl14.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl15.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl16.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl17.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl18.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl19.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl20.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "nl22.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                }
              ]
            },
            sg: {
              servers: [
                {
                  host: "sg1.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg2.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg3.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg4.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg5.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg6.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg7.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg8.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg9.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg10.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "sg11.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                }
              ]
            },
            uk: {
              servers: [
                {
                  host: "uk1.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk2.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk3.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk4.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk5.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk6.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk7.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk8.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk9.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk10.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk11.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk12.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "uk13.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                }
              ]
            },
            us: {
              servers: [
                {
                  host: "us1.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us2.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us3.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us4.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us5.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us6.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us7.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us8.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us9.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us10.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us11.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us12.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us13.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us14.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us15.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us16.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us17.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us18.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us19.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us20.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us21.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us22.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us23.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us24.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                },
                {
                  host: "us25.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                }
              ]
            },
            us_test: {
              hidden: true,
              servers: [
                {
                  host: "us-test-1.postls.com",
                  port: 443,
                  alt_ports: [444, 8443]
                }
              ]
            },
            direct: {
              hidden: true,
              servers: [
                {
                  host: "direct",
                  port: 443,
                  alt_ports: [444, 8443]
                }
              ]
            }
          }
        }
      }
    };

  }, {}], 1: [function (require, module, exports) {
    /*
      Returns random int value between 0 (inclusive) and the specified value (exclusive)
      TODO(grig): more accurate randomInt
    */
    function randomInt(max) {
      return Math.floor(Math.random() * max);
    }

    /*
      Returns random array element using weights. Element weight should be stored in 'weight' property of array element.
      If 'weight' property is absent then weight for this element is 1.
    */
    function weightedRandom(array) {
      var map = [];
      var totalWeight = 0;

      for (var i = 0; i < array.length; i++) {
        var weight = array[i].weight || 1;

        map.push({
          start: totalWeight,
          end: totalWeight + weight
        });

        totalWeight += weight;
      }

      var random = randomInt(totalWeight);

      for (i = 0; i < map.length; i++) {
        if ((random >= map[i].start) && (random < map[i].end)) {
          return array[i];
        }
      }
    }

    /*
      Clone array
    */
    function clone(array) {
      return array.slice(0);
    }

    /*
      Return shuffled array without modifying original one
      TODO(grig): replace cloning with a new empty array
    */
    function shuffle(array) {
      var arrayClone = clone(array);
      var currentIndex = arrayClone.length;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        var randomIndex = randomInt(currentIndex);
        currentIndex--;

        // And swap it with the current element.
        var temporaryValue = arrayClone[currentIndex];
        arrayClone[currentIndex] = arrayClone[randomIndex];
        arrayClone[randomIndex] = temporaryValue;
      }

      return arrayClone;
    }

    /*
      Return shuffled array with attention to element weights.
      Element weight should be stored in 'weight' property of array element.
      If 'weight' property is absent then weight for this element is 1.
      Original array is not modified.
    */
    function weightedShuffle(array) {
      var arrayClone = clone(array);
      var result = [];

      for (var i = 0; i < array.length; i++) {
        var item = weightedRandom(arrayClone);
        result.push(item);
        arrayClone.splice(arrayClone.indexOf(item), 1);
      }

      return result;
    }

    exports.weightedShuffle = weightedShuffle;
    exports.shuffle = shuffle;

  }, {}], 2: [function (require, module, exports) {
    (function (global) {
      var $ = require('jquery');
      require('./common');
      var proxy = global.proxy = require('./proxy');

      var scheduler = global.scheduler = require('./update_scheduler');

      chrome.proxy.settings.onChange.addListener(proxy.onChange.bind(proxy));

      var ui = global.ui = require('./ui');

      var browsec = global.browsec = require('./browsec');
      var ga = require('./ga');
      browsec.init();

      chrome.webRequest.onAuthRequired.addListener(
        function (details, callback) {
          try {
            console.group("onAuthRequired");
            console.log(details);

            if (details.isProxy && details.realm == 'Browsec' && (details.challenger.host == 'postlm.com' || details.challenger.host.endsWith(".postlm.com") || details.challenger.host == 'postls.com' || details.challenger.host.endsWith(".postls.com"))) {

              var username = localStorage.userId || localStorage.email;
              var password = localStorage.password;

              // If we don't have username/password 
              // OR 
              // username is email and password is incorrect
              if (!username || !password || (username.indexOf('@') > 0 && checkAuthLimitExceeded(details))) {

                var result = browsec.signup();

                if (result) {
                  delete localStorage.email;
                  localStorage.userId = username = result.user_id;
                  localStorage.password = password = result.password;
                } else {
                  proxy.clearProxySettings();
                  alert(chrome.i18n.getMessage("signup_error"));
                  return;
                }
              }

              console.log("Authenticate with username '%s'", username);
              callback({ authCredentials: { username: username, password: password } });
            } else {
              // If auth request is not from browsec proxy, do not handle it.
              callback();
            }
          } finally {
            console.groupEnd();
          }
        },
        { urls: ["<all_urls>"] },
        ["asyncBlocking"]
      );

      var statusLineRegexp = new RegExp("^HTTP/1.[01] 408");
      chrome.webRequest.onHeadersReceived.addListener(
        function (details) {
          if (localStorage.connected && localStorage.connected != "off") {
            if (statusLineRegexp.test(details.statusLine)) {
              ga.trackEvent("extension", "http_error", details.statusLine);
            }
          }
        },
        { urls: ["<all_urls>"] }
      );

      function checkAuthLimitExceeded(details) {
        var timeFrameMs = 15000;
        var authRequestsLimit = 3;
        var authHistory = localStorage.authHistory ? JSON.parse(localStorage.authHistory) : {};

        try {
          console.group("checkAuthLimitExceeded");

          var hostAuthHistory = authHistory[details.challenger.host];
          if (!hostAuthHistory || !hostAuthHistory.periodStart || !hostAuthHistory.authRequestsNum) {
            hostAuthHistory = authHistory[details.challenger.host] = { periodStart: details.timeStamp, authRequestsNum: 1 };
            console.log("No host auth history. Create record: %s", JSON.stringify(hostAuthHistory));
          } else {
            console.log("Host history record already exists: %s", JSON.stringify(hostAuthHistory));
            var periodStart = hostAuthHistory.periodStart;
            if (details.timeStamp - periodStart > timeFrameMs) {
              console.log("Time frame already finished. Create new row.");
              hostAuthHistory.periodStart = details.timeStamp;
              hostAuthHistory.authRequestsNum = 1;
            } else {
              console.log("We are still in tracked time frame. Increase auth requests counter");
              hostAuthHistory.authRequestsNum++;

              if (hostAuthHistory.authRequestsNum >= authRequestsLimit) {
                console.log("Limit exceeded. Return true and clear host auth history.");

                delete hostAuthHistory.periodStart;
                delete hostAuthHistory.authRequestsNum;

                ga.trackEvent("auth_request_limit_exceeded", localStorage.userId || localStorage.email);

                return true;
              }
            }
          }

          return false;
        } finally {
          console.log("Save auth history: %O", authHistory);
          localStorage.authHistory = JSON.stringify(authHistory);
          console.groupEnd();
        }
      }

      chrome.runtime.onInstalled.addListener(function (details) {
        console.log("chrome.runtime.onInstalled", details);

        ga.trackEvent("extension", details.reason, chrome.runtime.getManifest().version);

        if (details.reason == "install") {
          proxy.detectDefaultCountry(function () {
            proxy.setProxySettings(proxy.lastConnected(), function (result) {
              // Workaroung for Chrome bug
              $.ajax({
                url: "http://www.google.com/favicon.ico",
                cache: false,
                complete: function (jqXHR, textStatus) {
                  console.log("Complete test request: %s", textStatus);
                }
              });
            });
          });
        } else if (details.reason == "update") {

          var previousVersion = details.previousVersion;
          var currentVersion = chrome.runtime.getManifest().version;

          if (previousVersion <= "2.2.99" && currentVersion >= "2.3.0") {
            // Upgrade from 2.2 and earlier up to 2.3 and later
            if (proxy.connected() === "de") {
              proxy.setProxySettings("uk");
            }
          } else {
            if (proxy.connected()) {
              proxy.setProxySettings(proxy.lastConnected(), function () {
                ui.updateUiConnectionStatus();
              });
            }
          }
        } else {
          if (proxy.connected()) {
            proxy.setProxySettings(proxy.lastConnected(), function () {
              ui.updateUiConnectionStatus();
            });
          }
        }

        ui.updateUiConnectionStatus();

        var lastConnected = proxy.lastConnected();

        proxy.setProxySettings(lastConnected, function() {
            proxy.connected();
          });
          
      });

      chrome.proxy.onProxyError.addListener(function (details) {
        proxy.checkProxySet(function (isConnected) {
          if (isConnected) {
            console.error("Proxy on error: " + JSON.stringify(details));
            ga.trackEvent("extension", "proxy_error", JSON.stringify(details));
          }
        });
      });

      chrome.runtime.onStartup.addListener(function () {
        console.log("chrome.runtime.onStartup");

        delete localStorage.lastRedirectOnError;
        ui.updateUiConnectionStatus();
        ga.trackEvent("extension", "start", chrome.runtime.getManifest().version);
      });

      // TODO if/when we switch to event page, this should be changed
      scheduler.init();

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, { "./browsec": 3, "./common": 4, "./ga": 5, "./proxy": 6, "./ui": 8, "./update_scheduler": 9, "jquery": "jquery" }], 3: [function (require, module, exports) {
    var $ = require('jquery');
    var config = require('./config').browsec;
    var ga = require('./ga');

    var browsec = function () {
      var apiPrefix = config.apiPrefix || "https://d1blmth2c5vbem.cloudfront.net/v1/";
      var locationApiPrefix = config.locationApiPrefix || "http://d1blmth2c5vbem.cloudfront.net/v1/";

      return {
        init: function () {
          $.ajaxSetup({
            tryCount: 0,
            retryLimit: 1,
            timeout: 10000,
            retry: function () {
              this.tryCount++;
              if (this.tryCount <= this.retryLimit) {
                //try again
                $.ajax(this);
                return true;
              } else {
                return false;
              }
            }
          });
        },

        checkCredentials: function (username, password) {
          try {
            console.group("checkCredentials");

            var result = false;

            $.ajax({
              type: "POST",
              url: apiPrefix + "auth",
              data: {
                email: username,
                password: password
              },
              async: false,
              success: function (data, textStatus, jqXHR) {
                console.log("Response status: %d", data.status);
                if (data.status === 0) {
                  result = true;
                }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                if (!this.retry()) {
                  ga.trackEvent("check_credentials_error", textStatus, errorThrown);
                  throw errorThrown;
                }
              }
            });

            return result;
          } finally {
            console.groupEnd();
          }
        },

        clearCredentials: function () {
          delete localStorage.userId;
          delete localStorage.email;
          delete localStorage.password;
        },

        ipInfo: function (callback) {
          var start;

          $.ajax({
            type: "GET",
            url: locationApiPrefix + "location?locale=" + chrome.runtime.getManifest().current_locale,
            async: true,
            success: function (data, textStatus, jqXHR) {
              callback(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              this.retry();
            },
            beforeSend: function () {
              start = Date.now();
            },
            complete: function () {
              var duration = Date.now() - start;
              console.debug("Location request duration %d ms", duration);
            }
          });
        },

        signup: function () {
          try {
            console.group("Signing up new user");

            var result = null;

            $.ajax({
              type: "POST",
              url: apiPrefix + "signup",
              async: false,
              success: function (data, textStatus, jqXHR) {
                console.log("Response status: %d", data.status);
                if (data.status === 0) {
                  result = data.result;
                } else {
                  ga.trackEvent("error_signup", data);
                }
              },
              error: function (jqXHR, textStatus, errorThrown) {
                if (!this.retry()) {
                  ga.trackEvent("error_signup", textStatus, errorThrown);
                }
              }
            });

            return result;
          } finally {
            console.groupEnd();
          }
        },

        servers: function (callback) {
          var canceled = false;

          var xhr = $.ajax({
            type: "GET",
            url: apiPrefix + "servers",
            async: true,
            success: function (data, textStatus, jqXHR) {
              if (canceled) {
                if (typeof callback === 'function') {
                  callback('canceled');
                }
                return;
              }

              if (typeof callback === 'function') {
                callback(null, data);
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (canceled) {
                // Aborted request return textStatus == 'abort', errorThrown == 'abort'.
                // We might have checked for these statuses; however, once a task
                // has been canceled, any status should be ignored.
                console.log('servers', 'request canceled: status:', textStatus, 'error:', errorThrown);
                // may check for XHR
                if (typeof callback === 'function') {
                  callback('canceled');
                }
                return;
              }
              var error = { status: textStatus, error: errorThrown };
              console.error("browsec.servers", JSON.stringify(error));
              ga.trackEvent("error", "browsec.servers", JSON.stringify(error));
              callback(error);
            }
          });
          var task = {
            cancel: function () {
              canceled = true;
              xhr.abort();
            }
          };
          return task;
        }
      };
    }();

    module.exports = browsec;

  }, { "./config": "./config", "./ga": 5, "jquery": "jquery" }], 4: [function (require, module, exports) {
    require('./utils/format');
    require('./utils/ends_with');
    require('./utils/starts_with');
    require('./utils/error_handler');

  }, { "./utils/ends_with": 11, "./utils/error_handler": 12, "./utils/format": 13, "./utils/starts_with": 14 }], 5: [function (require, module, exports) {
    (function (global) {
      var config = require('./config').ga;

      if (config.enabled) {
        // Google Analytics
        global._gaq = global._gaq || [];
        _gaq.push(['_setAccount', config.tracking_id]);
        _gaq.push(['_trackPageview']);

        var ga = {
          trackEvent: function (category, action, label, value, noninteraction) {
            // Track events only in production
            console.log("Track event: " + JSON.stringify([category, action, label, value, noninteraction]));
            if (chrome.i18n.getMessage("@@extension_id") === config.extension_id) {
              _gaq.push(['_trackEvent', category, action, label, value, noninteraction]);
            }
          }
        };
      } else {
        var ga = {
          trackEvent: function () {
            console.log("ga.trackEvent", "[DISABLED]", arguments);
          }
        };
      }

      module.exports = ga;

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, { "./config": "./config" }], 6: [function (require, module, exports) {
    (function (global) {
      var ga = require('./ga');
      var weightedShuffle = require('./array').weightedShuffle;
      var config = require('./config').proxy;
      var servers = require('./server_list');

      var proxy = function () {

        var bypassList = ["google-analytics.com"];

        var pacScript = 'function domainIs(host,domain){return host==domain||dnsDomainIs(host,"."+domain)}function FindProxyForURL(url,host){var config="{0}";var bypass={1};host=host.toLowerCase();if(isPlainHostName(host)||isInNetEx(host,"127.0.0.0/8")||isInNetEx(host,"10.0.0.0/8")||isInNetEx(host,"172.16.0.0/12")||isInNetEx(host,"192.168.0.0/16")||isInNetEx(host,"fc00::/7")||isInNetEx(host,"fe80::/10")){return"DIRECT"}for(var i=0;i<bypass.length;i++){if(domainIs(host,bypass[i])){return"DIRECT"}}return config}';

        var defaultCountry = config.defaultCountry || "us";

        function getServerString(countryConfig, altPort) {
          var serverString = "";

          var servers = weightedShuffle(countryConfig.servers);
          /* jshint -W004 */
          for (var i = 0; i < servers.length; i++) {
            var server = servers[i];
            var port = getServerPort(server, altPort);
            serverString += "HTTPS " + server.host + ":" + port + "; ";
          }

          if (countryConfig.backupServers) {
            var backupServers = weightedShuffle(countryConfig.backupServers);
            for (var i = 0; i < backupServers.length; i++) {
              var server = backupServers[i];
              var port = getServerPort(server, altPort);
              serverString += "HTTPS " + server.host + ":" + port + "; ";
            }
          }
          /* jshint +W004 */

          console.log("Srv string: " + serverString);

          return serverString;
        }

        function getServerPort(server, altPort) {
          if (altPort && Array.isArray(server.alt_ports) && server.alt_ports.indexOf(altPort) >= 0) {
            return altPort;
          } else {
            return server.port;
          }
        }

        return {
          countryCodes: function (callback, includeHidden) {
            if (typeof includeHidden === 'undefined') {
              includeHidden = this.isIncludeHidden();
            }
            servers.get(function (err, settings) {
              if (err) {
                console.error(err);
                callback([]);
                return;
              }

              var countries = settings.countries;
              var countryCodes = Object.keys(countries).filter(function (countryCode) {
                return includeHidden || !countries[countryCode].hidden;
              }).filter(function (countryCode) {
                return Array.isArray(countries[countryCode].servers);
              });
              callback(countryCodes);
            });
          },

          isIncludeHidden: function () {
            return localStorage.includeHidden && JSON.parse(localStorage.includeHidden);
          },

          setIncludeHidden: function (value) {
            localStorage.includeHidden = JSON.stringify(value);
          },

          isProxySet: function (config) {
            if (config.levelOfControl == "controlled_by_this_extension")
              if (config.value.mode == 'pac_script')
                return true;

            return false;
          },

          checkProxySet: function (callback) {
            chrome.proxy.settings.get({ incognito: false }, function (config) {
              var isConnected = this.isProxySet(config);
              callback(isConnected);
            }.bind(this));
          },

          setProxySettings: function (countryCode, callback) {
            chrome.proxy.settings.get({ incognito: false }, function (config) {

              if (typeof config != 'undefined' && config.levelOfControl != "controllable_by_this_extension" && config.levelOfControl != "controlled_by_this_extension") {

                console.warn("Proxy settings levelOfControl is: " + config.levelOfControl);
                ga.trackEvent("extension", "alert", "error_unable_change_proxy_settings " + config.levelOfControl);
                alert(chrome.i18n.getMessage('error_unable_change_proxy_settings'));

                if (typeof callback == "function") {
                  callback(false);
                }
              } else {
                var altPort = localStorage.altPort && Number(localStorage.altPort);
                servers.get(function (err, settings) {
                  if (err) {
                    callback(false);
                    return;
                  }
                  var countries = settings.countries;
                  var countryConfig = countries[countryCode];
                  if (!countryConfig) {
                    console.warn("No servers for country: " + countryCode + ", rolling back to default country");
                    countryCode = defaultCountry;
                    countryConfig = countries[countryCode];
                  }
                  if (!countryConfig) {
                    console.error("Failed to find any suitable servers, turning off");
                    delete localStorage.lastConnected;
                    localStorage.connected = 'off';
                    callback(false);
                    return;
                  }
                  var serverString = getServerString(countryConfig, altPort);

                  var proxyConfig = {
                    mode: "pac_script",
                    pacScript: {
                      data: pacScript.format(serverString, JSON.stringify(bypassList))
                    }
                  };

                  chrome.proxy.settings.set({ scope: 'regular', value: proxyConfig }, function () {
                    localStorage.connected = localStorage.lastConnected = countryCode;

                    if (typeof callback == "function") {
                      callback(true);
                    }
                  });
                });
              }
            }.bind(this));
          },

          clearProxySettings: function (callback) {
            chrome.proxy.settings.clear({ scope: 'regular' }, function () {
              localStorage.connected = "off";

              if (typeof callback == "function") {
                callback(true);
              }
            });
          },

          logProxySettings: function () {
            chrome.proxy.settings.get({ incognito: false }, function (config) {
              console.log(JSON.stringify(config));
            });
          },

          onChange: function (details) {
            console.log("Proxy on change: " + JSON.stringify(details));

            this.checkProxySet(function (isConnected) {
              ui.setUiConnectionStatus(isConnected);

              if (!isConnected) {
                localStorage.connected = "off";
              }
            });
          },

          connected: function (localStorage) {
            localStorage = localStorage || global.localStorage;
            var status = localStorage.connected;

            if (status === "off") {
              return false;
            } else {
              return status;
            }
          },

          lastConnected: function (localStorage) {
            localStorage = localStorage || global.localStorage;
            return localStorage.lastConnected || defaultCountry;
          },

          detectDefaultCountry: function (callback) {
            browsec.ipInfo(function (location) {
              /* jshint laxbreak:true */
              if (location.continent_code === "NA" || location.continent_code === "SA") {
                // If user isfrom North or South America send him to US server
                defaultCountry = "us";
              } else if (location.country_code === "SG" // Singapore
                || location.country_code === "MY" // Malaysia
                || location.country_code === "ID" // Indonesia
                || location.country_code === "PH" // Philippines
                || location.country_code === "TH" // Thailand
              ) {
                defaultCountry = "sg";
              } else if (location.country_code === "UK" || location.country_code === "IE") {
                defaultCountry = "uk";
              }
              /* jshint laxbreak:false */

              callback();
            });
          }
        };
      }();

      module.exports = proxy;


    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, { "./array": 1, "./config": "./config", "./ga": 5, "./server_list": 7 }], 7: [function (require, module, exports) {
    /**
     * Manages list of servers
     *
     * TODO(grig): transaction / last known good support
     *
     * @module ./server_list
     */

    var ga = require('./ga');

    var defaultConfig = require('./config').proxy.settings || {};

    /*
     * TODO(grig): test callback status
     */
    exports.set = function set(value, callback) {
      var error = validate(value);
      if (error) {
        throw new ValidationError(error);
      }
      try {
        localStorage.currentConfig = JSON.stringify(value);
        if (typeof callback === 'function') {
          setTimeout(function () {
            callback(null);
          }, 0);
        }
      } catch (e) {
        if (typeof callback === 'function') {
          setTimeout(function () {
            callback(e);
          }, 0);
        }
      }
    };

    function validate(settings) {
      if (typeof settings !== 'object' || settings === null) {
        return 'settings should be an object';
      }

      if (!settings.hasOwnProperty('countries')) {
        return 'settings should have a "countries" property';
      }

      var config = settings.countries;
      if (Object.keys(config).length === 0) {
        return "config should have at least one key (country)";
      }
      for (var countryCode in config) {
        if (!config.hasOwnProperty(countryCode)) {
          continue;
        }
        var country = config[countryCode];
        if (!Array.isArray(country.servers) && !Array.isArray(country.premium_servers)) {
          return "country must have either 'servers' or 'premium_servers' fields set to an array of servers";
        }

        var error;
        if (Array.isArray(country.servers)) {
          error = validateServers(country.servers);
          if (error) {
            return error;
          }
        }

        if (Array.isArray(country.premium_servers)) {
          error = validateServers(country.premium_servers);
          if (error) {
            return error;
          }
        }
      }
      return null;
    }

    function validateServers(servers) {
      for (var i = 0; i < servers.length; i++) {
        var server = servers[i];
        if (typeof server.host !== 'string') {
          return "server must have a 'host' property";
        }
        if (!(typeof server.port === 'string' || typeof server.port === 'number')) {
          return "server must have a 'port' property";
        }
      }
      return null;
    }

    function ValidationError(message) {
      this.name = 'ValidationError';
      this.message = message || '';
      this.stack = (new Error()).stack;
    }

    ValidationError.prototype = Object.create(Error.prototype);
    ValidationError.prototype.constructor = ValidationError;

    /*
     * TODO(grig): test no countries in default config
     * TODO(grig): test no proxy config
     * TODO(grig): test errors
     */
    exports.get = function get(callback) {
      var value = localStorage.currentConfig;
      if (typeof value === 'string') {
        try {
          var currentConfig = JSON.parse(value);
          var error = validate(currentConfig);
          if (error) {
            throw new ValidationError(error);
          }
          setTimeout(function () {
            callback(null, currentConfig || defaultConfig);
          }, 0);
        } catch (e) {
          var version = 'n/a';
          if (chrome.runtime && chrome.runtime.getManifest()) {
            version = chrome.runtime.getManifest().version;
          }
          var message = e.toString();
          try {
            // find application-level file name and line number from the stack
            var stack = e.stack.split("\n");
            for (var i = 0; i < stack.length; i++) {
              if (/ at .*\.js:.*/.test(stack[i])) {
                message = message + stack[i];
                break;
              }
            }
          } catch (_) {
            // nothing
          }
          ga.trackEvent("error", version, message, 0, false);

          console.warn("invalid current configuration, fall back to default: ", e);
          delete localStorage.currentConfig;
          setTimeout(function () {
            callback(null, defaultConfig);
          }, 0);
        }
      } else {
        setTimeout(function () {
          callback(null, defaultConfig);
        }, 0);
      }
    };

    exports.clear = function (callback) {
      delete localStorage.currentConfig;
      if (typeof callback === 'function') { setTimeout(callback, 0); }
    };

  }, { "./config": "./config", "./ga": 5 }], 8: [function (require, module, exports) {
    var proxy = require('./proxy');

    var ui = {
      setUiConnectionStatus: function (connected) {
        if (connected) {
          chrome.browserAction.setIcon({ path: 'images/icon-enabled.png' });
          // chrome.browserAction.setTitle({title: chrome.i18n.getMessage('browser_action_active_title')});
        } else {
          chrome.browserAction.setIcon({ path: 'images/icon-disabled.png' });
          // chrome.browserAction.setTitle({title: chrome.i18n.getMessage('browser_inaction_active_title')});
        }
      },

      updateUiConnectionStatus: function () {
        proxy.checkProxySet(function (isConnected) {
          this.setUiConnectionStatus(isConnected);
        }.bind(this));
      }
    };

    module.exports = ui;

  }, { "./proxy": 6 }], 9: [function (require, module, exports) {
    /**
     * @module ./update_scheduler
     */

    var update_task = require('./update_task');

    var REFRESH_TIMEOUT = 6 * 3600 * 1000;
    var RETRY_TIMEOUT = 5 * 60 * 1000;

    var retryTimeout = RETRY_TIMEOUT;
    var refreshTimeout = REFRESH_TIMEOUT;

    function run() {
      var task;
      var canceled = false;

      var timeoutId = setTimeout(function () {
        console.log("retry");
        run(); // TODO schedule on next tick
        canceled = true;
        if (task) {
          task.cancel();
        }
      }, retryTimeout);

      task = update_task.start(function (err) {
        if (err) {
          console.warn("Error updating severs, retrying in " + retryTimeout / (60 * 1000) + " minutes", err);
          // nothing; retry will be triggered anyway
          return;
        }
        if (canceled) {
          console.error("Attempting to complete an already-canceled update task");
          return;
        }

        clearTimeout(timeoutId);
        setTimeout(function () {
          console.log("refresh");
          // TODO(grig): possible parallel task executions?
          run();
        }, refreshTimeout);
      });
    }

    exports.init = function init(options) {
      console.log("init");
      options = options || {};
      retryTimeout = options.retryTimeout || retryTimeout;
      refreshTimeout = options.refreshTimeout || refreshTimeout;

      setTimeout(run, 0);
    };

  }, { "./update_task": 10 }], 10: [function (require, module, exports) {
    /**
     * @module ./update_task
     */

    var server_list = require('./server_list');
    var proxy = require('./proxy');
    var browsec = require('./browsec');

    exports.start = function update(callback) {
      console.log("update");

      var task = function () {
        var canceled = false;
        var subtask;

        subtask = browsec.servers(function (err, servers) {
          if (err) {
            if (typeof callback === 'function') {
              callback(err);
            }
            return;
          }
          if (canceled) {
            if (typeof callback === 'function') {
              callback("canceled");
            }
            return;
          }
          server_list.set(servers, function (err) {
            if (err) {
              if (typeof callback === 'function') {
                callback(err);
              }
              return;
            }
            if (canceled) {
              if (typeof callback === 'function') {
                callback("canceled");
              }
              return;
            }
            if (proxy.connected(localStorage)) {
              // update proxy settings
              var currentCountry = proxy.lastConnected(localStorage);
              proxy.setProxySettings(currentCountry, function (result) {
                if (canceled) {
                  if (typeof callback === 'function') {
                    callback("canceled");
                  }
                  return;
                }

                if (typeof callback === 'function') {
                  if (result) {
                    callback();
                  } else {
                    callback(new Error("failed to update proxy settings"));
                  }
                }
              });
            } else {
              if (canceled) {
                if (typeof callback === 'function') {
                  callback("canceled");
                }
                return;
              } else {
                if (typeof callback === 'function') {
                  callback(null);
                  return;
                }
              }
            }
          });
        });
        var task = {
          cancel: function cancel() {
            canceled = true;
            if (subtask) {
              subtask.cancel();
            }
          }
        };
        return task;
      }();
      return task;
    };

  }, { "./browsec": 3, "./proxy": 6, "./server_list": 7 }], 11: [function (require, module, exports) {
    if (!String.prototype.endsWith) {
      String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
      };
    }


  }, {}], 12: [function (require, module, exports) {
    var ga = require('../ga');

    // Error handler
    window.onerror = function (message, filename, lineno) {
      try {
        console.error("message: {0}\nfilename: {1}\nlineno: {2}".format(message, filename, lineno));

        var version = 'n/a';
        if (chrome.runtime.getManifest()) {
          version = chrome.runtime.getManifest().version;
        }
        ga.trackEvent("error", version, "{0} at {1}:{2}".format(message, filename, lineno), 0, false);

      } catch (e) {
        console.error(e);
      }

      return false;
    };


  }, { "../ga": 5 }], 13: [function (require, module, exports) {
    // Helper functions
    function format(str, args) {
      return str.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
      });
    }

    if (!String.prototype.format) {
      String.prototype.format = function () {
        return format(this, arguments);
      };
    }

    module.exports = format;

  }, {}], 14: [function (require, module, exports) {
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function (prefix) {
        return this.indexOf(prefix) === 0;
      };
    }


  }, {}]
}, {}, [2]);
