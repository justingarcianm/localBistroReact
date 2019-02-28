import React from 'react'

class Footer extends React.Component {

	render() {
		return (
			<footer className="text-light text-center container-fluid">
				<div className="row">
					<div className="col-12">
						<h3 className="styled">Local Bistro</h3>
						<p>22 Main Street, ABQCity, New Mexico </p>
						<p><span>RESERVATIONS NUMBER:</span> +00 25 854 78521 </p>
						<p><span>WORKING HOURS:</span></p>
						<p>MON- FRI: 08:00 AM - 10:00 PM </p>
						<p>SAT - SUN: 10:00 AM - 11:00 PM</p>
					</div>
				</div>
				<div className="row">
					<div id="copyrights" className="col-sm">
						<p>&copy; Local Bistro 2019. All rights reserved</p>
					</div>
					<div className="social col-sm">
						<a href="#"><i className="fab fa-facebook-square"></i></a>
						<a href="#"><i className="fab fa-twitter-square"></i></a>
						<a href="#"><i className="fab fa-instagram"></i></a>
						<a href="#"><i className="fab fa-linkedin"></i></a>
					</div>

				</div>
			</footer>
		)
	}
}

export default Footer