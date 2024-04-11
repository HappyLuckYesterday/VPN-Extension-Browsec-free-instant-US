require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./config":[function(require,module,exports){
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
    defaultCountry: "nl",
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
        }
      }
    }
  }
};

},{}],1:[function(require,module,exports){
(function (global){
var config = require('./config').ga;

if (config.enabled) {
  // Google Analytics
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  global._gaq = global._gaq || [];
  _gaq.push(['_setAccount', config.tracking_id]);
  _gaq.push(['_trackPageview']);

  var ga = {
    trackEvent : function (category, action, label, value, noninteraction) {
      // Track events only in production
      console.log("Track event: " + JSON.stringify([category, action, label, value, noninteraction]));
      if (chrome.i18n.getMessage("@@extension_id") === config.extension_id) {
        _gaq.push(['_trackEvent', category, action, label, value, noninteraction]);
      }
    }
  };
} else {
  var ga = {
    trackEvent: function() {
      console.log("ga.trackEvent", "[DISABLED]", arguments);
    }
  };
}

module.exports = ga;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./config":"./config"}],2:[function(require,module,exports){
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
      setTimeout(function() {
        callback(null);
      }, 0);
    }
  } catch(e) {
    if (typeof callback === 'function') {
      setTimeout(function() {
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
      setTimeout(function() {
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
      setTimeout(function() {
        callback(null, defaultConfig);
      }, 0);
    }
  } else {
    setTimeout(function() {
      callback(null, defaultConfig);
    }, 0);
  }
};

exports.clear = function(callback) {
  delete localStorage.currentConfig;
  if (typeof callback === 'function') { setTimeout(callback, 0); }
};

},{"./config":"./config","./ga":1}],3:[function(require,module,exports){
var config = require('./config');
var manifest = chrome.runtime.getManifest();
var server_list = require('./server_list');
var $ = require('jquery');

$(document).ready(function() {
  server_list.get(function(err, settings) {
    var data = {
      browsec_version: manifest.version,
      bundled_config_version: config.proxy.settings.version,
      current_config_version: settings.version
    };

    $("[data-var]").each(function() {
      var e = $(this);
      var k = e.attr('data-var');
      if (k && data[k]) {
        e.text(data[k]);
      } else {
        e.text('n/a');
      }
    });
  });
});

},{"./config":"./config","./server_list":2,"jquery":"jquery"}]},{},[3]);
