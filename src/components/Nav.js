import React from 'react'

class Nav extends React.Component {

	render() {
		return (
			<div id="home">
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark">
					<a className="navbar-brand" href="#home"><i className="fas fa-utensils"></i> Local Bistro</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						Menu <i className="fas fa-caret-down"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#food">Food</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#drinks">Drinks</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">Find Us</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default Nav