import React from 'react'

class Drinks extends React.Component {
	render() {
		return (
			<div className="text-center container-fluid menu">
				<div className="menu-bottom">
					<div className="row">
						<div className="col">
							<h3>Wine</h3>
							<div className="row">
								<div className="col">
									<h4>White</h4>
									<p>name - price/price</p>
								</div>
								<div className="col">
									<h4>Red</h4>
									<p>name - price/price</p>
								</div>
								<div className="col">
									<h4>Dessert</h4>
									<p>name - price/price</p>
								</div>
							</div>
						</div>
						<div className="col">
							<h3>Beer</h3>
							<div className="row">
								<div className="col">
									<h4>Domestic</h4>
									<p>name - price/price</p>
								</div>
								<div className="col">
									<h4>Local</h4>
									<p>name - price/price</p>
								</div>
								<div className="col">
									<h4>Imported</h4>
									<p>name - price/price</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h3>Coffee</h3>
							<p>name - price</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Drinks