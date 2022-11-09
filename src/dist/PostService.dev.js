"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var url = "http://localhost:3000/api/posts/";
/* eslint-disable no-async-promise-executor */
////

var PostService =
/*#__PURE__*/
function () {
  function PostService() {
    _classCallCheck(this, PostService);
  }

  _createClass(PostService, null, [{
    key: "getPosts",
    // get posts
    value: function getPosts() {
      return new Promise(function _callee(resolve, reject) {
        var res, data;
        return regeneratorRuntime.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return regeneratorRuntime.awrap(_axios["default"].get(url));

              case 3:
                res = _context.sent;
                data = res.data;
                resolve(data.map(function (post) {
                  return _objectSpread({}, post, {
                    createdAt: new Date(post.createdAt)
                  });
                }));
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, [[0, 8]]);
      });
    } //Create post

  }, {
    key: "insertPost",
    value: function insertPost(text, text2) {
      return _axios["default"].post(url, {
        text: text,
        text2: text2
      });
    } //test start
    //test end
    //delete post

  }, {
    key: "deletePost",
    value: function deletePost(id) {
      return _axios["default"]["delete"]("".concat(url).concat(id));
    }
  }]);

  return PostService;
}();

var _default = PostService;
exports["default"] = _default;