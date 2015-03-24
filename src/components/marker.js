var React = require('react');

var Marker = React.createClass({

  componentDidMount() {
    var marker = new google.maps.Marker({
      map: this.props.map,
      position: new google.maps.LatLng(this.props.lat, this.props.lng),
      icon: this.props.icon
    });
  },

  render() {
    return null;
  }

});

module.exports = Marker;