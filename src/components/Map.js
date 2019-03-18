
import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
	map: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	}

};
export class CurrentLocation extends React.Component {
	constructor(props) {
		super(props);

		const { lat, lng } = this.props.initialCenter;
		this.state = {
			currentLocation: {
				lat: lat,
				lng: lng
			}
		};
	}
	componentDidMount() {
		if (this.props.centerAroundCurrentLocation) {
			if (navigator && navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(pos => {
					const coords = pos.coords;
					this.setState({
						currentLocation: {
							lat: coords.latitude,
							lng: coords.longitude
						}
					});
				});
			}
		}
		this.loadMap();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.google !== this.props.google) {
			this.loadMap();
		}
		if (prevState.currentLocation !== this.state.currentLocation) {
			this.recenterMap();
		}
	}

	loadMap() {
		if (this.props && this.props.google) {
			// checks if google is available
			const { google } = this.props;
			const maps = google.maps;

			const mapRef = this.refs.map;

			// reference to the actual DOM element
			const node = ReactDOM.findDOMNode(mapRef);

			let { zoom } = this.props;
			const { lat, lng } = this.state.currentLocation;
			const center = new maps.LatLng(lat, lng);
			const mapConfig = Object.assign(
				{},
				{
					center: center,
					zoom: zoom
				}
			);
			// maps.Map() is constructor that instantiates the map
			this.map = new maps.Map(node, mapConfig);
		}
	}

	recenterMap() {
		const map = this.map;
		const current = this.state.currentLocation;

		const google = this.props.google;
		const maps = google.maps;

		if (map) {
			let center = new maps.LatLng(current.lat, current.lng);
			map.panTo(center);
		}
	}

	renderChildren() {
		const { children } = this.props;

		if (!children) return;

		return React.Children.map(children, c => {
			if (!c) return;
			return React.cloneElement(c, {
				map: this.map,
				google: this.props.google,
				mapCenter: this.state.currentLocation
			});
		});
	}

	render() {
		const style = Object.assign({}, mapStyles.map);

		return (
			<div>
				<div style={style} ref="map" className="d-sm-none d-md-block">
					Loading map...
	</div>
				{this.renderChildren()}

				<div className="d-none d-sm-block d-md-none text-center mobile-map-text">
					<a href="https://www.google.com/maps/place/35%C2%B004'59.7%22N+106%C2%B038'31.2%22W/@35.083237,-106.6441947,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d35.083237!4d-106.642006" target="_blank" rel="noopener noreferrer">Click me for directions!</a>

				</div>
			</div>
		);
	}
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
	zoom: 14,
	initialCenter: {
		lat: 35.083237,
		lng: -106.642006
	},
	centerAroundCurrentLocation: false,
	visible: true
};



