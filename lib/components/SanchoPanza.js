'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isJsonable(v) {
  try {
    return JSON.stringify(v) === JSON.stringify(JSON.parse(JSON.stringify(v)));
  } catch (e) {
    /*console.error("not a dict",e);*/
    return false;
  }
}

function isDict(v) {
  return !!v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date) && isJsonable(v);
}

function Arbol(dict) {
  var lista = [];
  for (var key in dict) {
    if (isDict(dict[key])) {
      lista.push(Arbol(dict[key]));
    } else {
      lista.push(dict[key]);
    }
  }

  var listItems = lista.map(function (elemento) {
    return _react2.default.createElement(
      'li',
      { onClick: function onClick() {
          console.log("click");
        } },
      elemento
    );
  });
  return _react2.default.createElement(
    'ul',
    { style: { listStyleType: "none" } },
    listItems
  );
}

var Recorrida = function (_React$Component) {
  _inherits(Recorrida, _React$Component);

  function Recorrida() {
    _classCallCheck(this, Recorrida);

    return _possibleConstructorReturn(this, (Recorrida.__proto__ || Object.getPrototypeOf(Recorrida)).call(this));
  }

  _createClass(Recorrida, [{
    key: 'render',
    value: function render() {

      // Inside a React component:
      var json = {
        key1: "Mas o que salva a humanidade",
        key2: "É que não há quem cure a curiosidade",
        key3: {
          key31: "Mas o que salva a humanidade",
          key32: {
            key321: "É que não há quem cure a curiosidade",
            key322: "A curi, a curi"
          }
        }
      };

      return _react2.default.createElement(Arbol, { dict: json });
    }
  }]);

  return Recorrida;
}(_react2.default.Component);

exports.default = Recorrida;