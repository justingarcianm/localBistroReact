import React from 'react'

class Drinks extends React.Component {
	render() {
		return (
			<div className="text-center container-fluid menu">
				<div className="menu-bottom">
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<h3>Wine</h3>
							<div className="row">
								<div className="col-md-4 col-sm-12">
									<h4>White</h4>
									<ul>
										<li>name - price/price</li>
										<li>name - price/price</li>
										<li>name - price/price</li>
									</ul>

								</div>
								<div className="col-md-4 col-sm-12">
									<h4>Red</h4>
									<ul>
										<li>name - price/price</li>
										<li>name - price/price</li>
										<li>name - price/price</li>
									</ul>
								</div>
								<div className="col-md-4 col-sm-12">
									<h4>Dessert</h4>
									<ul>
										<li>name - price/price</li>
										<li>name - price/price</li>
										<li>name - price/price</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-sm-12">
							<h3>Beer</h3>
							<div className="row">
								<div className="col-md-4 col-sm-12">
									<h4>Domestic</h4>
									<ul>
										<li>name - price/price</li>
										<li>name - price/price</li>
										<li>name - price/price</li>
									</ul>
								</div>
								<div className="col-md-4 col-sm-12">
									<h4>Local</h4>
									<ul>
										<li>name - price/price</li>
										<li>name - price/price</li>
										<li>name - price/price</li>
									</ul>
								</div>
								<div className="col-md-4 col-sm-12">
									<h4>Imported</h4>
									<ul>
										<li>name - price/price</li>
										<li>name - price/price</li>
										<li>name - price/price</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h3>Coffee</h3>
							<ul>
								<li>name - price</li>
								<li>name - price</li>
								<li>name - price</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Drinks