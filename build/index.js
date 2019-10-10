"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routesPath = _interopRequireDefault(require("./Routes/routes-path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use("/", _routesPath["default"]);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("server is running on PORT ".concat(PORT));
});
var _default = app;
exports["default"] = _default;