// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"27Rzb":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "97912cc17f1f5bdf37964fbc8a5bc16d";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4OAbU":[function(require,module,exports) {
var _componentsNavigation = require('./components/navigation');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _componentsNavigationDefault = _parcelHelpers.interopDefault(_componentsNavigation);
require('./components/tasklist');
require('./components/acronym');
require('./components/timer');
require('./components/pomodoro');
require('./components/musicplayer');
require('./components/kanban');
// DOM elements for links and pages
const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');
// Instantiate a new instance of the Navigation class using the DOM elements above as parameters
var nav = new _componentsNavigationDefault.default(links, pages);
// Event listeners for all links
nav.links.forEach(function (link) {
  link.addEventListener('click', function () {
    let pageId = nav.getHash(link);
    nav.setPage(pageId);
  });
});

},{"./components/navigation":"2K1cj","./components/tasklist":"Rj9Cl","./components/acronym":"2REkG","./components/timer":"6s12x","./components/pomodoro":"2KGxt","./components/musicplayer":"6m8Cd","./components/kanban":"3ezuS","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2K1cj":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
// Creating navigation class structure
class Navigation {
  // Function to build the object, taking in input paramters when called in script.js
  constructor(links, pages) {
    this.links = links;
    this.pages = pages;
    this.currentPage = null;
  }
  /*Output all links from DOM element selector*/
  getLinks() {
    console.log(this.links);
  }
  /*Set the current page when a user clicks on a link*/
  setPage(pageId) {
    this.currentPage = pageId;
    console.log(this.currentPage);
    // Manages state for the current active link
    this.links.forEach(link => {
      link.classList.remove('active');
      if (this.getHash(link) === pageId) {
        link.classList.add('active');
      }
    });
    // Manages state for the current visible page
    this.pages.forEach(page => {
      page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = "block";
  }
  /*Function to separate pageId from URL, using the '#' to split the string*/
  getHash(link) {
    return link.href.split("#")[1];
  }
}
exports.default = Navigation;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"Rj9Cl":[function(require,module,exports) {
// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")

// Selector for the tasklist output
var tasklist = document.querySelector("#tasklist > ul");

// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) {
        addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
    }
})

// Create global array to track tasks
var taskListArray = [];

// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        completionTime,
        priorityRating,
        estimatedTime,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}

// Function to display task on screen
function renderTask(task) {

    // Call function - checks if a task has been added
    updateEmpty();

    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute('data-id', task.id);
    item.innerHTML = "<h2>" + task.taskDescription + "</h2>" + "<p>" + "Due: " + task.dueDate + " " + task.completionTime + "</p>" + "<p>" + "Estimated completion: " + task.estimatedTime + "min" + "</p>" + "<p>" + "Priority: " + task.priorityRating + "</p>";
    tasklist.appendChild(item);

    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);


    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray, index)
        console.log(taskListArray);
        updateEmpty();
        item.remove();
    })

    // Clear the input form
    form.reset();
}


// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


// Function to hide the 'you haven't added any tasks' text
function updateEmpty() {
    if (taskListArray.length > 0) {
        document.getElementById('emptyTaskList').style.display = 'none';
    } else {
        document.getElementById('emptyTaskList').style.display = 'block';
    }
}
},{}],"2REkG":[function(require,module,exports) {
//Modify task list to suit acronym maker

// Basic form DOM elements
const form = document.getElementById("acronymform");
const button = document.querySelector("#acronymform > button");

// Selector for the acronym list output
var acronymlist = document.querySelector("#acronymlist > ul");

// DOM elements for the input fields
var wordInput = document.getElementById("wordInput");
var descInput = document.getElementById("descInput");

// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let word = wordInput.value;
    let desc = descInput.value;
    if (acronym) {
        addAcronym(word, desc);
    }
})

// Create global array to track acronyms
var acronymListArray = [];

// Function to add acronym with user inputs as parameters
function addAcronym(acronymWord, acronymDescription) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let acronym = {
        id: Date.now(),
        acronymWord,
        acronymDescription,
        dateCreated
    };
    acronymListArray.push(acronym);
    console.log(acronymListArray);
    renderAcronym(acronym);
}

// Function to display acronym on screen
function renderAcronym(acronym) {

    // Call function - checks if a acronyms has been added
    updateEmpty();

    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute('data-id', acronym.id);
    item.innerHTML = "<h2>" + acronym.acronymWord + "</h2>" + "<p>" + acronym.acronymDescription + "</p>";
    acronymlist.appendChild(item);

    // Extra acronyms DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);

    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = acronymListArray.findIndex(acronym => acronym.id === Number(id));
        removeItemFromArray(acronymListArray, index)
        console.log(acronymListArray);
        updateEmpty();
        item.remove();
    })

    form.reset();

}

// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr;
}


// Function to hide the 'you haven't added any acronyms' text
function updateEmpty() {
    if (acronymListArray.length > 0) {
        document.getElementById('emptyAcronymList').style.display = 'none';
    } else {
        document.getElementById('emptyAcronymList').style.display = 'block';
    }
}



},{}],"6s12x":[function(require,module,exports) {
//Define time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define interval to hold the setInterval() function
let interval = null;

//Define status of timer
let status = "stopped";

//Define DOMS and process function when onclick is called
document.getElementById("timer-start").onclick = startTimer;
document.getElementById("timer-stop").onclick = stopTimer;
document.getElementById("timer-reset").onclick = resetTimer;



//Function to determine when to incriment time values
function timer() {
    seconds ++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes ++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours ++;
        }
    }

    //Concatonate display values to time values to show double-digits when under 10sec
    if(seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if(minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if(hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    //Display updated time values
    document.getElementById("timer-display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

//Functions to start, stop and reset the timer

function startTimer() {
    if(status === "stopped"){
        interval = window.setInterval(timer, 1000);
        status = "started";
    }
}

function stopTimer() {
    if(status === "started"){
        window.clearInterval(interval);
        status = "stopped";
    }
}

function resetTimer () {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer-display").innerHTML = "00:00:00";
    status = "stopped"
}

},{}],"2KGxt":[function(require,module,exports) {
//Create constants
const timer = document.getElementById("pomodoro-display");
const modeButtons = document.querySelector("[class=pomodoro-modes]");
const workButton = document.getElementById("pomodoro-work");
const shortButton = document.getElementById("pomodoro-short");
const longButton = document.getElementById("pomodoro-long");
const timerButton = document.getElementById("toggle");

//Initialise seconds
let seconds = 0;

//Create object for default values for pomodoro
const TIMER = {
    WORK: 25,
    SHORTBREAK: 5,
    LONGBREAK: 15,
};

//Function to change to different modes
function changeMode(e) {
    timerButton.classList.replace("fa-stop", "fa-play");
    timerButton.dataset.paused = "true";
  
    //Add active class to current mode
    for (let i = 0; i < 3; i++) {
      e.path[1].children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  
    let mode = e.target.dataset.mode;
    timer.dataset.mode = mode;

    //Change starting timer values depending on which mode the user is in
    if (timer.dataset.mode === "work") {
      timer.innerHTML = `${TIMER.WORK}:00`;
    } else if (timer.dataset.mode === "short") {
      timer.innerHTML = `0${TIMER.SHORTBREAK}:00`;
    } else {
      timer.innerHTML = `${TIMER.LONGBREAK}:00`;
    }
  }

//Function to run pomodoro
function pomodoro () {

    //Toggle between different pomodoro modes & set duration
    function setTimer() {
        if(timer.dataset.mode === "work") {
            seconds = TIMER.WORK * 60;
        } else if (timer.dataset.mode === "short") {
            seconds = TIMER.SHORTBREAK * 60;
        } else {
            seconds = TIMER.LONGBREAK * 60;
        }
    }

    //Change button icon when clicked
    if(timerButton.classList.contains("fa-play")){
        timerButton.classList.replace("fa-play", "fa-stop");
        timerButton.dataset.paused = "false";

        //Run timer
        setTimer();

        interval = setInterval(() => {
            //Convert time remaining into minutes/seconds and add leading zeros
            let timeRemaining = ("0" + Math.floor(seconds / 60)).slice(-2) + ":" + ("0" + (seconds % 60)).slice(-2);
            timer.innerHTML = timeRemaining;

            //Clear timer display if user stops the timer or if the timer reaches 0
            if(timerButton.dataset.paused === "true" || seconds === 0) {
                clearInterval(interval);
            }

            //Timer counting down 1s
            seconds--;
        }, 1000);

    } else {
        timerButton.classList.replace("fa-stop", "fa-play");
        timerButton.dataset.paused = "true";
    }
}

//Event listeners
timerButton.addEventListener("click", pomodoro);
modeButtons.addEventListener("click", changeMode);



},{}],"6m8Cd":[function(require,module,exports) {
//Define DOMS for music player items

const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');

//Create array with studbud sample songs
const songs = ['Just_Awake', 'lack_of_sleep', 'late_night', 'Lo-fi_Sunset', 'One_Hazy_Moon', 'Rain_drop', 'Someday'];

//Keep track of songs playing
let songIndex = 0;

//Load song info 
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `./audio/${song}.mp3`;
}

function playSong () {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}


//Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }

})

//Change to diffeent songs
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


},{}],"3ezuS":[function(require,module,exports) {
//Define constants
const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

//Dragabble functions
todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}

//Create tasks on board
const todoSubmit = document.getElementById("todo-submit");

todoSubmit.addEventListener("click", createTodo);

function createTodo() {
    const todoDiv = document.createElement("div");
    const inputValue = document.getElementById("todo-input").value;
    const textElement = document.createTextNode(inputValue);

    todoDiv.appendChild(textElement);
    todoDiv.classList.add("todo");
    todoDiv.setAttribute("draggable", "true");

    const span = document.createElement("span");
    const spanText = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(spanText);

    todoDiv.appendChild(span);

    no_status.appendChild(todoDiv);

    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    });

    todoDiv.addEventListener("dragstart", dragStart);
    todoDiv.addEventListener("dragend", dragEnd);

    document.getElementById("todo-input").value = "";
    todo_form.classList.remove("active");
    overlay.classList.remove("active");

}



},{}]},["27Rzb","4OAbU"], "4OAbU", "parcelRequirefe09")

//# sourceMappingURL=index.8a5bc16d.js.map
