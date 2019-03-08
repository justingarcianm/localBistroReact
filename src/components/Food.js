import React from 'react'

class Food extends React.Component {

	render(props) {


		return (

			<div className="text-center container-fluid menu">
				<div className="menu-top">
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<ul>
								<h3>Breakfast</h3>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-12">
							<ul>
								<h3>Lunch</h3>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-12">
							<ul>
								<h3>Dinner</h3>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<ul>
								<h3>Dessert</h3>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
								<li>
									name - price <br />
									description
							</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Food
