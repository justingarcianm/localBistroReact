import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header>
				<section className="parallax-1 text-center text-white section-title" id="title">
					<h1 className="display-1">Local Bistro</h1>
					<h2 className="styled">- <i className="fas fa-utensils"></i> -</h2>
					<h3>Open From</h3>
					<p>Monday - Friday: 8:00am - 10:00pm</p>
					<p>Weekends: 10:00am - 11:00am</p>
				</section>
			</header>
		)
	}
}

export default Header