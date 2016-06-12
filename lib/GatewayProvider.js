'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GatewayRegistry = require('./GatewayRegistry');

var _GatewayRegistry2 = _interopRequireDefault(_GatewayRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GatewayProvider = function (_React$Component) {
  _inherits(GatewayProvider, _React$Component);

  GatewayProvider.prototype.getChildContext = function getChildContext() {
    return {
      gatewayRegistry: this.gatewayRegistry
    };
  };

  function GatewayProvider(props, context) {
    _classCallCheck(this, GatewayProvider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.gatewayRegistry = new _GatewayRegistry2.default();
    return _this;
  }

  GatewayProvider.prototype.render = function render() {
    return this.props.children;
  };

  return GatewayProvider;
}(_react2.default.Component);

GatewayProvider.childContextTypes = {
  gatewayRegistry: _react2.default.PropTypes.instanceOf(_GatewayRegistry2.default).isRequired
};
GatewayProvider.propTypes = {
  children: _react2.default.PropTypes.element
};
exports.default = GatewayProvider;