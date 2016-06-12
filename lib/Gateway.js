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

var Gateway = function (_React$Component) {
  _inherits(Gateway, _React$Component);

  function Gateway(props, context) {
    _classCallCheck(this, Gateway);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.gatewayRegistry = context.gatewayRegistry;
    return _this;
  }

  Gateway.prototype.componentWillMount = function componentWillMount() {
    this.renderIntoGatewayNode(this.props);
  };

  Gateway.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    this.gatewayRegistry.clearChild(this.props.into);
    this.renderIntoGatewayNode(props);
  };

  Gateway.prototype.componentWillUnmount = function componentWillUnmount() {
    this.gatewayRegistry.removeChild(this.props.into);
  };

  Gateway.prototype.renderIntoGatewayNode = function renderIntoGatewayNode(props) {
    this.gatewayRegistry.addChild(this.props.into, props.children);
  };

  Gateway.prototype.render = function render() {
    return null;
  };

  return Gateway;
}(_react2.default.Component);

Gateway.contextTypes = {
  gatewayRegistry: _react2.default.PropTypes.instanceOf(_GatewayRegistry2.default).isRequired
};
Gateway.propTypes = {
  into: _react2.default.PropTypes.string.isRequired,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
};
exports.default = Gateway;