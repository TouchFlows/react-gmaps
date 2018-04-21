import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import objectAssign from 'object-assign';
import MapEvents from '../events/map';
import Listener from '../mixins/listener';
import GoogleMaps from '../utils/google-maps';
import compareProps from '../utils/compare-props';

const Gmaps = createReactClass({

  mixins: [Listener],

  map: null,

  refreshTimer: null,

  getInitialState() {
    return {
      isMapCreated: false
    };
  },

  componentDidMount() {
    this.setState({
      callbackIndex: GoogleMaps.load(this.props.params, this.mapsCallback)
    });
    if(this.props.interval){
      this.refreshTimer = setInterval(this.refreshMap, this.props.interval); // runs every minute
    }
  },

  componentWillUnmount() {
    GoogleMaps.removeCallback(this.state.callbackIndex);
    this.refreshTimer = null;
    this.removeListeners();
  },

  componentWillReceiveProps(nextProps) {
    if (this.map && !compareProps(this.props, nextProps)) {
      this.map.setOptions({
        ...nextProps,
        center: new google.maps.LatLng(nextProps.lat, nextProps.lng)
      });
    }
  },

  getMap() {
    return this.map;
  },

  mapsCallback() {
    this.createMap();
    this.addListeners(this.map, MapEvents);
  },

  createMap() {
    const node = ReactDOM.findDOMNode(this);
    this.map = new google.maps.Map(node, {
      ...this.props,
      center: new google.maps.LatLng(this.props.lat, this.props.lng)
    });
    this.setState({
      isMapCreated: true
    });
    if (this.props.onMapCreated) {
      this.props.onMapCreated(this.map);
    }
  },

  refreshMap() {
    //google.maps.event.trigger(map, 'resize');
    //map.fitBounds();

    google.maps.event.trigger(this.map, 'resize'); // Can't remember if really helps
    this.map.setZoom( map.getZoom() -1 );
    this.map.setZoom( map.getZoom() +1 ); // It won't flicker or make the transition between zoom levels. GMap just ignore the zoom change but redraw the tiles :/
  },

  getChildren() {
    return React.Children.map(this.props.children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }
      return React.cloneElement(child, {
        ref: child.ref,
        map: this.map
      });
    });
  },

  render() {
    const style = objectAssign({
      width: this.props.width,
      height: this.props.height
    }, this.props.style);
    return (
      <div style={style} className={this.props.className}>
        {this.props.loadingMessage || 'Loading...'}
        {this.state.isMapCreated ? this.getChildren() : null}
      </div>
    );
  },

});

export default Gmaps;
