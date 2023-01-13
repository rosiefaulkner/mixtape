(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.Controls = void 0;

        var _react = _interopRequireWildcard(require("react"));

        var _MixtapeContext = require("./MixtapeContext");

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(
            nodeInterop
          ) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (
            obj === null ||
            (_typeof(obj) !== "object" && typeof obj !== "function")
          ) {
            return { default: obj };
          }
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (
              key !== "default" &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }

        var Controls = function Controls() {
          var _useContext = (0, _react.useContext)(
              _MixtapeContext.MixtapeContext
            ),
            genre = _useContext.genre,
            setGenre = _useContext.setGenre,
            sortOrder = _useContext.sortOrder,
            setSortOrder = _useContext.setSortOrder;

          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "controls",
            },
            "TODO: Genre control? Sort order control?",
            /*#__PURE__*/ _react["default"].createElement(
              "select",
              {
                onChange: function onChange(e) {
                  return setGenre(e.target.value);
                },
                value: genre,
              },
              /*#__PURE__*/ _react["default"].createElement(
                "option",
                {
                  value: "all",
                },
                "All"
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "option",
                {
                  value: "hip hop",
                },
                "Hip Hop"
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "option",
                {
                  value: "rap",
                },
                "Rap"
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "option",
                {
                  value: "rock",
                },
                "Rock"
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "option",
                {
                  value: "pop",
                },
                "Pop"
              )
            ),
            /*#__PURE__*/ _react["default"].createElement(
              "button",
              {
                onClick: function onClick() {
                  return sortOrder === "ascending"
                    ? setSortOrder("descending")
                    : setSortOrder("ascending");
                },
              },
              sortOrder
            )
          );
        };

        exports.Controls = Controls;
      },
      { "./MixtapeContext": 3, react: undefined },
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.MixtapeApp = void 0;

        var _react = _interopRequireDefault(require("react"));

        var _MixtapeContext = require("./MixtapeContext");

        var _SongList = require("./SongList.js");

        var _Controls = require("./Controls");

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var MixtapeApp = function MixtapeApp() {
          return /*#__PURE__*/ _react["default"].createElement(
            _MixtapeContext.MixtapeProvider,
            {
              songs: songs,
            },
            /*#__PURE__*/ _react["default"].createElement(
              "div",
              {
                className: "app",
              },
              /*#__PURE__*/ _react["default"].createElement(
                "h1",
                {
                  className: "heading",
                },
                "Your \uD83D\uDD25 Mixtape"
              ),
              /*#__PURE__*/ _react["default"].createElement(
                _Controls.Controls,
                null
              ),
              /*#__PURE__*/ _react["default"].createElement(
                _SongList.SongList,
                null
              )
            )
          );
        };

        exports.MixtapeApp = MixtapeApp;
        var songs = [
          {
            artist: "Smash Mouth",
            genre: "pop",
            name: "All Star",
            year: 1999,
          },
          {
            artist: "Drake",
            genre: "rap",
            name: "Hotline Bling",
            year: 2015,
          },
          {
            artist: "Lizzo",
            genre: "hip hop",
            name: "Juice",
            year: 2019,
          },
          {
            artist: "Rick Astley",
            genre: "rock",
            name: "Never Gonna Give You Up",
            year: 1987,
          },
          {
            artist: "4 Non Blondes",
            genre: "rock",
            name: "What's Up",
            year: 1993,
          },
        ];
      },
      {
        "./Controls": 1,
        "./MixtapeContext": 3,
        "./SongList.js": 5,
        react: undefined,
      },
    ],
    3: [
      function (require, module, exports) {
        "use strict";

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.MixtapeProvider = exports.MixtapeContext = void 0;

        var _react = _interopRequireWildcard(require("react"));

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(
            nodeInterop
          ) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (
            obj === null ||
            (_typeof(obj) !== "object" && typeof obj !== "function")
          ) {
            return { default: obj };
          }
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (
              key !== "default" &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr == null
              ? null
              : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
                arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var MixtapeContext = /*#__PURE__*/ _react["default"].createContext();

        exports.MixtapeContext = MixtapeContext;

        var MixtapeProvider = function MixtapeProvider(_ref) {
          var children = _ref.children,
            songs = _ref.songs;

          var _useState = (0, _react.useState)("all"),
            _useState2 = _slicedToArray(_useState, 2),
            genre = _useState2[0],
            setGenre = _useState2[1];

          var _useState3 = (0, _react.useState)("ascending"),
            _useState4 = _slicedToArray(_useState3, 2),
            sortOrder = _useState4[0],
            setSortOrder = _useState4[1];

          return /*#__PURE__*/ _react["default"].createElement(
            MixtapeContext.Provider,
            {
              value: {
                songs: songs,
                genre: genre,
                setGenre: setGenre,
                sortOrder: sortOrder,
                setSortOrder: setSortOrder,
              },
            },
            children
          );
        };

        exports.MixtapeProvider = MixtapeProvider;
      },
      { react: undefined },
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.Song = void 0;

        var _react = _interopRequireDefault(require("react"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var Song = function Song(_ref) {
          var artist = _ref.artist,
            genre = _ref.genre,
            name = _ref.name,
            year = _ref.year;
          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "song",
            },
            /*#__PURE__*/ _react["default"].createElement(
              "div",
              {
                className: "contents",
              },
              /*#__PURE__*/ _react["default"].createElement(
                "div",
                {
                  className: "name",
                },
                name
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "div",
                {
                  className: "details left",
                },
                /*#__PURE__*/ _react["default"].createElement(
                  "div",
                  {
                    className: "artist",
                  },
                  artist
                )
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "div",
                {
                  className: "details right",
                },
                /*#__PURE__*/ _react["default"].createElement(
                  "div",
                  {
                    className: "genre",
                  },
                  genre
                ),
                /*#__PURE__*/ _react["default"].createElement(
                  "div",
                  {
                    className: "year",
                  },
                  year
                )
              )
            )
          );
        };

        exports.Song = Song;
      },
      { react: undefined },
    ],
    5: [
      function (require, module, exports) {
        "use strict";

        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.SongList = void 0;

        var _react = _interopRequireWildcard(require("react"));

        var _Song = require("./Song");

        var _MixtapeContext = require("./MixtapeContext");

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(
            nodeInterop
          ) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }
          if (
            obj === null ||
            (_typeof(obj) !== "object" && typeof obj !== "function")
          ) {
            return { default: obj };
          }
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (
              key !== "default" &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }

        function _extends() {
          _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
          return _extends.apply(this, arguments);
        }

        var SongList = function SongList() {
          var _useContext = (0, _react.useContext)(
              _MixtapeContext.MixtapeContext
            ),
            genre = _useContext.genre,
            sortOrder = _useContext.sortOrder,
            songs = _useContext.songs;

          var filterSong = songs.filter(function (song) {
            return genre === "all" || song.genre === genre;
          });
          var sortedSongs = filterSong.sort(function (a, b) {
            return sortOrder === "ascending"
              ? a.year - b.year
              : b.year - a.year;
          });
          return /*#__PURE__*/ _react["default"].createElement(
            _react["default"].Fragment,
            null,
            /*#__PURE__*/ _react["default"].createElement("h2", null, "Songs"),
            sortedSongs.map(function (song) {
              return /*#__PURE__*/ _react["default"].createElement(
                _Song.Song,
                _extends({}, song, {
                  key: song.name,
                })
              );
            })
          );
        };

        exports.SongList = SongList;
      },
      { "./MixtapeContext": 3, "./Song": 4, react: undefined },
    ],
    6: [
      function (require, module, exports) {
        "use strict";

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _react = _interopRequireDefault(require("react"));

        var _MixtapeApp = require("./MixtapeApp.js");

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        _reactDom["default"].render(
          /*#__PURE__*/ _react["default"].createElement(
            _MixtapeApp.MixtapeApp,
            null
          ),
          document.getElementById("root")
        );
      },
      { "./MixtapeApp.js": 2, react: undefined, "react-dom": undefined },
    ],
  },
  {},
  [6]
);
