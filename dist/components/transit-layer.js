'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _eventsTransitLayer = require('../events/transit-layer');

var _eventsTransitLayer2 = _interopRequireDefault(_eventsTransitLayer);

exports['default'] = (0, _entity2['default'])('TransitLayer', null, _eventsTransitLayer2['default']);
module.exports = exports['default'];