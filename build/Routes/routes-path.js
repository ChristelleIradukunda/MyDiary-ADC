"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ViewAll = _interopRequireDefault(require("../Controller/ViewAll"));

var _GetOne = _interopRequireDefault(require("../Controller/GetOne"));

var _PostEntry = _interopRequireDefault(require("../Controller/PostEntry"));

var _Updates = _interopRequireDefault(require("../Controller/Updates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/api/v1/entries', _ViewAll["default"]);
router.get('/api/v1/entries/:id', _GetOne["default"]);
router.post('/api/v1/entries', _PostEntry["default"]);
router.put('/api/v1/entries/:id', _Updates["default"]);
var _default = router;
exports["default"] = _default;