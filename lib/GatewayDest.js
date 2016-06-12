'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GatewayRegistry = require('./GatewayRegistry');

var _GatewayRegistry2 = _interopRequireDefault(_GatewayRegistry);

var _reactPropTypes = require('react-prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GatewayDest = function (_React$Component) {
  _inherits(GatewayDest, _React$Component);

  function GatewayDest(props, context) {
    _classCallCheck(this, GatewayDest);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.state = {
      child: null
    };

    _this.gatewayRegistry = context.gatewayRegistry;
    return _this;
  }

  GatewayDest.prototype.componentWillMount = function componentWillMount() {
    this.gatewayRegistry.addContainer(this.props.name, this);
  };

  GatewayDest.prototype.componentWillUnmount = function componentWillUnmount() {
    this.gatewayRegistry.removeContainer(this.props.name, this);
  };

  GatewayDest.prototype.render = function render() {
    var _props = this.props;
    var component = _props.component;
    var tagName = _props.tagName;

    var attrs = _objectWithoutProperties(_props, ['component', 'tagName']);

    delete attrs.name;
    return _react2.default.createElement(component || tagName || 'div', attrs, this.state.child);
  };

  return GatewayDest;
}(_react2.default.Component);

GatewayDest.contextTypes = {
  gatewayRegistry: _react2.default.PropTypes.instanceOf(_GatewayRegistry2.default).isRequired
};
GatewayDest.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  tagName: (0, _reactPropTypes.deprecated)(_react2.default.PropTypes.string, 'Use "component" instead.'),
  component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func])
};
exports.default = GatewayDest;