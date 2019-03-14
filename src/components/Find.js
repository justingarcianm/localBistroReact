import React from 'react'
import MapContainer from './MapContainer'
import Reservations from './Reservations'

class Find extends React.Component {

	render() {
		return (
			<div>
				<header className="parallax-4 text-center text-white section-title">
					<h1 className="display-2">Join Us</h1>

				</header>

				<section className="section-content container-fluid row" id="contact">
					<div className="col-md-6">
						<MapContainer />
					</div>
					<div className="col-md-6">
						<Reservations />
					</div>
				</section>
			</div>
		)
	}
}

export default Find