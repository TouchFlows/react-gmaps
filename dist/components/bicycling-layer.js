'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _eventsBicyclingLayer = require('../events/bicycling-layer');

var _eventsBicyclingLayer2 = _interopRequireDefault(_eventsBicyclingLayer);

exports['default'] = (0, _entity2['default'])('BicyclingLayer', null, _eventsBicyclingLayer2['default']);
module.exports = exports['default'];