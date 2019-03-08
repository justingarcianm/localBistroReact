import React from 'react'

class About extends React.Component {

	render() {
		return (
			<section className="section-content container-fluid" id="about">
				<div className="row">
					<div className="col-md">
						<img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
							className="img-fluid" alt="Responsive img" />
					</div>
					<div className="col-md text-center">
						<h3 className="styled">- Our Story -</h3>
						<h3>since 2010</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maxime impedit deserunt debitis
							error reprehenderit temporibus! Voluptates, porro! Dicta harum quidem fugit architecto quo
							repudiandae quod quasi, reprehenderit, explicabo natus provident illum facilis veniam cumque
							saepe quos vitae, eveniet reiciendis. Expedita illo, labore nesciunt saepe eligendi sed earum
                        quaerat asperiores!</p>
						<h2 className="styled d-none d-md-block"><i className="fas fa-store "></i></h2>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-md text-center">
						<h3 className="styled">- Our approach - </h3>
						<h3>to staying fresh</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maxime impedit deserunt debitis
							error reprehenderit temporibus! Voluptates, porro! Dicta harum quidem fugit architecto quo
							repudiandae quod quasi, reprehenderit, explicabo natus provident illum facilis veniam cumque
							saepe quos vitae, eveniet reiciendis. Expedita illo, labore nesciunt saepe eligendi sed earum
                        quaerat asperiores!</p>
						<h2 className="styled d-none d-md-block"><i className="fas fa-carrot "></i></h2>
					</div>
					<div className="col-md">
						<img src="https://images.pexels.com/photos/594060/pexels-photo-594060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							className="img-fluid" alt="Responsive img" />
					</div>
				</div>
			</section>
		)
	}
}

export default About