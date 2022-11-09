"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

var _LoginPage = _interopRequireDefault(require("../components/LoginPage.vue"));

var _RegisterPage = _interopRequireDefault(require("../components/RegisterPage.vue"));

var _IphoneXSeries = _interopRequireDefault(require("../components/IphoneXSeries.vue"));

var _PostComponent = _interopRequireDefault(require("../components/PostComponent.vue"));

var _Iphone11Series = _interopRequireDefault(require("../components/Iphone11Series.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/home',
  name: 'home',
  component: _HomeView["default"]
}, {
  path: '/register',
  name: 'RegisterPage',
  component: _RegisterPage["default"]
}, {
  path: '/login',
  name: 'LoginPage',
  component: _LoginPage["default"]
}, {
  path: '/IphoneXSeries',
  name: 'IphoneXSeries',
  component: _IphoneXSeries["default"]
}, {
  path: '/PostComponent',
  name: 'PostComponent',
  component: _PostComponent["default"]
}, {
  path: '/Iphone11Series',
  name: 'Iphone11Series',
  component: _Iphone11Series["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;