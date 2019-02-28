import React from 'react'

class Find extends React.Component {

	render() {
		return (
			<div>
				<header className="parallax-4 text-center text-white section-title">
					<h1 className="display-2">Contact and Find Us</h1>
					<h2 className="styled"> <i className="fas fa-map-marker-alt"></i></h2>
				</header>

				<section className="section-content container-fluid row" id="contact">
					<div className="col-md-6">
						<div id="map">Map</div>
					</div>
					<div className="col-md-6">
						<h2>reserve</h2>
					</div>
				</section>
			</div>
		)
	}
}

export default Find