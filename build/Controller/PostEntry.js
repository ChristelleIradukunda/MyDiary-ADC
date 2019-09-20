"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../Models/db"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PostEntry = function PostEntry(req, res) {
  var identifier = parseInt(_db["default"].length + 1, 10);
  var newEntry = {
    identifier: identifier,
    title: req.body.title,
    entry: req.body.entry,
    Date: (0, _moment["default"])().format('LL')
  };

  _db["default"].push(newEntry);

  res.status(201).json(newEntry);
};

var _default = PostEntry;
exports["default"] = _default;