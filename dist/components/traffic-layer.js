'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _eventsTrafficLayer = require('../events/traffic-layer');

var _eventsTrafficLayer2 = _interopRequireDefault(_eventsTrafficLayer);

exports['default'] = (0, _entity2['default'])('TrafficLayer', null, _eventsTrafficLayer2['default']);
module.exports = exports['default'];