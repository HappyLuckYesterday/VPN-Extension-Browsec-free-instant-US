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
        }
      }
    }
  }
};

},{}],1:[function(require,module,exports){
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));

},{}],2:[function(require,module,exports){
require('./utils/format');
require('./utils/ends_with');
require('./utils/starts_with');
require('./utils/error_handler');

},{"./utils/ends_with":7,"./utils/error_handler":8,"./utils/format":9,"./utils/starts_with":10}],3:[function(require,module,exports){
(function (global){
var config = require('./config').ga;

if (config.enabled) {
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
},{"./config":"./config"}],4:[function(require,module,exports){
var $ = require('jquery');

function internationalize(str) {
  return str.replace(/__MSG_(.+)__/g, function (m, key) {
    return chrome.i18n.getMessage(key);
  });
}

function internationalizePage() {
  document.title = internationalize(document.title);
  document.getElementsByTagName('body')[0].innerHTML = internationalize(document.getElementsByTagName('body')[0].innerHTML);  
}

$(document).ready(function () {
  internationalizePage();
});

},{"jquery":"jquery"}],5:[function(require,module,exports){
require('./common');
require('./i18n');
require('./select');
var Spinner = require('spin.js');

var $ = require('jquery');
var ga = require('./ga');

var bp = chrome.extension.getBackgroundPage();

var proxy = bp.proxy;
var browsec = bp.browsec;

function updatePage() {
  var connected = proxy.connected();

  console.log("Update page with connected = " + connected);

  if (!connected) {
    $(".content-box-other").removeClass("active");
  } else {
    $(".content-box-other").addClass("active");
    $("select option[value='" + connected + "']").attr("selected", "selected");
    $('select').select('destroy').select();
  }
}

$(document).ready (function () {

  console.time("ipinfo");
  browsec.ipInfo(function(data) {
    $(".country").html(chrome.i18n.getMessage("popup_your_location") + data.country_name);
  });
  console.timeEnd("ipinfo");

  console.time(".link-on click");
  $(".link-on").click(function () {
    var lastConnected = proxy.lastConnected();
    console.log("Set last connected proxy: " + lastConnected);
    proxy.setProxySettings(lastConnected, function() {
      updatePage();
    });
    //ga.trackEvent("extension", "enable");
  });
  console.timeEnd(".link-on click");

  console.time(".link-off click");
  $(".link-off").click(function () {
    proxy.clearProxySettings(function () {
      updatePage();
    });
    ga.trackEvent("extension", "disable");
  });
  console.timeEnd(".link-off click");

  console.time("update page");
  updatePage();
  console.timeEnd("update page");

  console.time("select change");
  $("select").change(function () {
    var selectedCountryCode = $("select option:selected").val();
    proxy.setProxySettings(selectedCountryCode);
    ga.trackEvent("extension", "change_country", selectedCountryCode);
  });
  console.timeEnd("select change");

  $(".link-appstore").click(function(e) {
    ga.trackEvent("extension", "appstore", e.target.text);
  });
  // $(".link-support").click(function () {
  //   $("select option[value='nl']").attr("selected", "selected");
  //   $('select').select('destroy').select();
  // });

  // spinner must be started after select.js has created the .selectmenu element
  var countrySpinner = new Spinner({scale: 0.5}).spin(document.querySelector(".selectmenu"));
  proxy.countryCodes(function(countryCodes) {
    countrySpinner.stop();
    var countryNames = [];
    console.time("update select");
    countryCodes.forEach(function(countryCode) {
      var countryName = chrome.i18n.getMessage("country_name_" + countryCode.toUpperCase());
      if (countryName === "" || typeof countryName === 'undefined') {
        var locale = 'n/a';
        if (typeof chrome.i18n.getUILanguage === 'function') {
          locale = chrome.i18n.getUILanguage();
        }
        var version = 'n/a';
        if (chrome.runtime.getManifest()) {
          version = chrome.runtime.getManifest().version;
        }
        var message = "failed to look up country name for: " + countryCode + " with locale: " + locale + " at popup.js";
        console.warn(message);
        ga.trackEvent("error", version, message, 0, false);
        countryName = countryCode.toUpperCase() || 'N/A';
      }
      countryNames.push({code: countryCode, name: countryName});
    });
    countryNames.sort(function (a, b) {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });

    var select = $('select').empty();
    $.each(countryNames, function (index, country) {
      select.append($('<option />').val(country.code).text(country.name));
    });
    console.timeEnd("update select");
    updatePage();
  });
});

},{"./common":2,"./ga":3,"./i18n":4,"./select":6,"jquery":"jquery","spin.js":1}],6:[function(require,module,exports){
/* jshint ignore:start */
var $ = jQuery = require('jquery');

$(function init(){
	if($('select').size()) {
		var select=$('select').not('.default').select();
		$('.selectmenu-menu .unable').click(function(){
			return false;
		});
	}
});
//version 1.1.0
$.fn.select=function(o){
	var callMethod=$.fn.select.method,
		itemClick=jQuery.Event("itemClick"),
		selectReady=jQuery.Event("selectReady"),
		enabled=jQuery.Event("enabled"),
		disabled=jQuery.Event("disabled"),
		destroyed=jQuery.Event("destroyed");
	if(typeof o=="string" && o in $.fn.select.method){
		var select=$(this);
		callMethod[o](select,arguments[1]);
		return $(this);
	}
	if(!("method" in $.fn.select)){
		$.fn.select.method={
			"destroy":function(select){
				if(select.data('customized')){
					select.off('change'+o.namespace);
					select.each(function(){
						var instance=$(this);
						instance.data('customSelect').remove();
						$(document).off('mousedown',instance.data("mousedownHandler"));
						$(window).off('resize',instance.data("resizeHandler"));
					});
					select.removeData();
					select.trigger('destroyed');
				}else{
					throw new Error('объект не проинициализирован');
				}
			},
			"enable":function(select){
				if(select.data('disable')){
					select.attr('disabled',false);
					select.data('customSelect').first().on('click'+o.namespace,select.data('openerHandler')).removeClass('disabled');
					select.trigger('enabled');
				}
			},
			"disable":function(select){
				if(!select.data('disable')){
					select.data('disable',true);
					select.attr('disabled',true);
					select.data('openerHandler',$._data(select.data('customSelect').first().get(0),"events").click[0].handler);
					select.data('customSelect').first().off('click').addClass('disabled');
					select.trigger('disabled');
				}
			},
			"pick":function(select,index) {
				select.each(function(){
					this.selectedIndex=index;
				});
				select.trigger("change"+o.namespace);
			}
		};
		callMethod=$.fn.select.method;
	}
	o=$.extend({
			"list":"ul",
			"namespace":".select",
			"item":"li",
			"itemHTML":"li span",
			"openerClass":"selectmenu",
			"icoClass":"selectmenu-icon",
			"selectedClass":"selectmenu-status",
			"activeItemClass":"active",
			"activeOpenerClass":"active",
			"dropDownClass":"selectmenu-menu",
			"style":"dropdown", //popup,dropdown
			"transferClass":true,
			"dropdownHasBorder":true,
			"hasIcons":true,
			"resizable":false,
			"triggerEvents":true
		},o);
		var select=[],
			body=$('body'),
			openerHTML=$('<a class="'+o.openerClass+'"><span class="'+o.icoClass+'"></span><span class="'+o.selectedClass+'"></span></a>'),
			dropdownHTML=$('<div class='+o.dropDownClass+'>'+
								'<div class="select-top">'+
									'<div class="select-l"></div>'+
									'<div class="select-r"></div>'+
								'</div>'+
								'<div class="select-c">'+
									'<div class="c appendHere">'+
								'</div>'+
								'</div>'+
									'<div class="select-bottom">'+
									'<div class="select-l"></div>'+
									'<div class="select-r"></div>'+
								'</div>'+
							'</div>');
		$(this).each(function(i){
			if(!$(this).data('customized')){
				select.push(this);
			}
		});
		if(select.length){
			$(select).each(function(){
				var opener = openerHTML.clone(),
					nativeSelect = $(this),
					title=nativeSelect.find("option[title]").text(),
					options=nativeSelect.find("option[title]").attr('disabled',true).end().find('option'),
					optionSize = options.size() - 1,
					dropdown = dropdownHTML.clone(),
					itemTree=o.itemHTML.split(' '),
					hasChild=itemTree.length>=2,
					list = "<" + o.list + ">";
				nativeSelect.find('option').each(function(i, data){
					if($(this).attr('title')){
						list += "<" + o.item + " class='title' style='display:none;'>" + (data.childNodes.length > 0 ? data.childNodes[0].nodeValue : '') + "</" + o.item + ">";
					}else{
						if(!hasChild){
							list += "<" + o.item + ">" + (data.childNodes.length > 0 ? data.childNodes[0].nodeValue : '') + "</" + o.item + ">";
						}else{
							var buffer='';
							for(var k=itemTree.length-1;k!=0;k--){
								if(!buffer){
									buffer+="<" + itemTree[k] + ">"+ (data.childNodes.length > 0 ? data.childNodes[0].nodeValue : '') +"</" + itemTree[k] + ">";
								}else if(k!=0 && itemTree.length>2){
									buffer="<" + itemTree[k] + ">"+buffer+"</" + itemTree[k] + ">";
								}
							}
							buffer="<" + itemTree[0] + ">"+buffer+"</" + itemTree[0] + ">";
							list+=buffer;
						}
					}
					if (i == optionSize) {
						list += "</" + o.list + ">";
					}
				});
				list = $(list);
				dropdown = dropdown.find('.appendHere').removeClass('appendHere').append(list).end();
				opener.insertAfter(nativeSelect);
				opener.find('.'+o.selectedClass).text(nativeSelect.find('option:selected').text());
				body.append(dropdown);
				(o.dropdownHasBorder) ? dropdown.width(opener.width()) : dropdown.width(opener.outerWidth());
				if(o.transferClass){
					opener.addClass(opener.attr('class') + " " + nativeSelect.attr('class'));
					dropdown.addClass(dropdown.attr('class') + " " + nativeSelect.attr('class'));
				}
				$(this).data('customSelect', opener.add(dropdown));
				$(this).data('customized', true);
				var listItems = list.find(">" + o.item),
					dropdownWidth = dropdown.outerWidth(),
					dropdownHeight = dropdown.outerHeight();
					selectedByHover='',
					selected='';
				if(!o.resizable){
					opener.width(nativeSelect.outerWidth());
					(o.dropdownHasBorder) ? dropdownWidth=dropdown.width(opener.width()) : dropdownWidth=dropdown.width(opener.outerWidth());
				}else{
					$(window).on('resize.opener',function(){
						(o.dropdownHasBorder) ? dropdownWidth=dropdown.width(opener.width()) : dropdownWidth=dropdown.width(opener.outerWidth());
					}).trigger('resize.opener');
				}
				if(title){
					opener.find('.'+o.selectedClass).text(title);
					nativeSelect.trigger('change'+o.namespace,[options.filter(':selected').index()]);
				}
				nativeSelect.on("change"+o.namespace, function(e, selectedIndex,dontHide,dontTrigger){
					if (dontTrigger)return;
					if (!selectedIndex && selectedIndex !== 0) selectedIndex = this.selectedIndex;
					this.selectedIndex=selectedIndex;
					listItems.removeClass(o.activeItemClass).eq(selectedIndex).addClass(o.activeItemClass);
					selected=options.eq(selectedIndex);
					opener.find('.'+o.selectedClass).text(selected.text());
					if(!dontHide){
						dropdown.hide();
						opener.removeClass(o.activeOpenerClass);
					}
					nativeSelect.trigger("change",[null,null,true]);
				});
				if(o.hasIcons){
					options.each(function(i){
						listItems.eq(i).addClass(this.className).prepend('<span></span>');
					});
					nativeSelect.on("change"+o.namespace,function(e, selectedIndex,dontHide,dontTrigger){
						if (dontTrigger)return;
						opener.find('.'+o.selectedClass).prepend('<span class="'+selected.attr('class')+'"></span>');
					});
					opener.find('.'+o.selectedClass).prepend('<span class="'+options.filter(':selected').attr('class')+'"></span>');
				}
				nativeSelect.hide();
				listItems.click(function(e){
					if($(this).hasClass('unable')){
						return false;
					}
					if(!$(this).hasClass(o.activeItemClass)){
						nativeSelect.trigger("change"+o.namespace, [$(this).index()]);
					}
					dropdown.hide();
					opener.removeClass(o.activeOpenerClass);
				});
				opener.click(function(e){
					if(dropdown.is(':hidden')){
						dropdown.show();
						opener.addClass(o.activeOpenerClass);
						alignDropDown();
					}else{
						dropdown.hide();
						opener.removeClass(o.activeOpenerClass);
					}
				});
				nativeSelect.data("resizeHandler",function(){
					if (dropdown.is(':visible')){
						alignDropDown();
					}
				});
				nativeSelect.data("mousedownHandler",function(e){
					if (!$(e.target).closest(dropdown).size() && !$(e.target).closest(opener).size()) {
						dropdown.hide();
						opener.removeClass(o.activeOpenerClass);
					}
				});
				$(window).on('resize',nativeSelect.data("resizeHandler"));
				$(document).on('mousedown',nativeSelect.data("mousedownHandler"));
				//event section
				if(o.triggerEvents){
					listItems.click(function(e){
						nativeSelect.trigger(itemClick, [$(this).text()]);
					});
					nativeSelect.trigger(selectReady,[dropdown]);
				}
				function alignDropDown(){
					if(o.style=="dropdown"){
						var top = opener.offset().top + opener.outerHeight(),
							left = opener.offset().left;
						/*
if(top + dropdownHeight > $(window).height() && top - dropdownHeight - opener.outerHeight() > 0){
							dropdown.css({
								'top': top - dropdownHeight - opener.outerHeight(),
								'left': left
							});
						}else{
*/
							dropdown.css({
								'top': top,
								'left': left
							});
						/*
}
*/
					}else{
						var activeEl=listItems.eq(nativeSelect.get(0).selectedIndex);
						activeEl=activeEl.hasClass('title') ? activeEl.next():activeEl;
						var top = opener.offset().top-activeEl.position().top,
							left = opener.offset().left;
						dropdown.css({
							'top': top,
							'left': left
						});
					}
				}
				if(nativeSelect.is(':disabled')) nativeSelect.select('disable');
			});
		}else{
			throw Error('селектор $("'+$(this).selector+'") ничего не возвратил');
		}
}

},{"jquery":"jquery"}],7:[function(require,module,exports){
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}


},{}],8:[function(require,module,exports){
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


},{"../ga":3}],9:[function(require,module,exports){
// Helper functions
function format(str, args) {
    return str.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

if (!String.prototype.format) {
  String.prototype.format = function() {
    return format(this, arguments);
  };
}

module.exports = format;

},{}],10:[function(require,module,exports){
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
  };
}


},{}]},{},[5]);
