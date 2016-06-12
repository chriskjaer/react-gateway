'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GatewayRegistry = function () {
  function GatewayRegistry() {
    _classCallCheck(this, GatewayRegistry);

    this._containers = {};
    this._children = {};
  }

  GatewayRegistry.prototype._renderContainer = function _renderContainer(name) {
    if (!this._containers[name]) {
      return;
    }

    this._containers[name].setState({
      child: this._children[name]
    });
  };

  GatewayRegistry.prototype.addContainer = function addContainer(name, container) {
    this._containers[name] = container;
    this._renderContainer(name);
  };

  GatewayRegistry.prototype.removeContainer = function removeContainer(name) {
    this._containers[name] = null;
  };

  GatewayRegistry.prototype.addChild = function addChild(name, child) {
    if (this._children[name]) {
      console.warn('Only a single Gateway can be rendered at a time into a GatewayDest.' + ('You rendered multiple into "' + name + '"'));
    }
    this._children[name] = child;
    this._renderContainer(name);
  };

  GatewayRegistry.prototype.clearChild = function clearChild(name) {
    this._children[name] = null;
  };

  GatewayRegistry.prototype.removeChild = function removeChild(name) {
    this.clearChild(name);
    this._renderContainer(name);
  };

  return GatewayRegistry;
}();

exports.default = GatewayRegistry;