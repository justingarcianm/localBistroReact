import React from 'react'

class Nav extends React.Component {

	render() {
		return (
			<div id="home">
				<nav class="navbar fixed-top navbar-expand-lg navbar-dark">
					<a class="navbar-brand" href="#home"><i class="fas fa-utensils"></i> Local Bistro</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						Menu <i class="fas fa-caret-down"></i>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav mx-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#about">About <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#food">Food</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#drinks">Drinks</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#contact">Find Us</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default Nav