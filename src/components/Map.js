import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
	width: '100%',
	height: '100%'
}

export class MapContainer extends React.Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={14}
				style={mapStyles}
				initialCenter={{
					lat: 35.083237,
					lng: -106.642006
				}}
			/>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyDrq6kWXm4b3uo6e7wGJg3G4OB2UQfKDl8"
})(MapContainer)