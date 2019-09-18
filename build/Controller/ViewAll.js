"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../Models/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var take = function take(req, res) {
  res.status(200).json({
    status: 200,
    data: _db["default"]
  });
};

var _default = take;
exports["default"] = _default;