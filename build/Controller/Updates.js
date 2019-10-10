"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../Models/db"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UptoDate = function UptoDate(req, res) {
  var search = _db["default"].find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (search) {
    search.title = req.body.title, search.entry = req.body.entry;
    return res.status(200).json({
      status: 200,
      message: "Successful",
      data: {
        id: search.id,
        title: search.title,
        entry: search.entry,
        Date: (0, _moment["default"])().format('LL')
      }
    });
  } else {
    res.sendStatus(404).json;
  }
};

var _default = UptoDate;
exports["default"] = _default;