import React from 'react'

class Food extends React.Component {

	render(props) {


		return (

			<div className="text-center container-fluid">
				<div className="row">
					<div className="col">
						<h3>Breakfast</h3>
						<p>name - price</p>
						<p>description</p>
					</div>
					<div className="col">
						<h3>Lunch</h3>
						<p>name - price</p>
						<p>description</p>
					</div>
					<div className="col">
						<h3>Dinner</h3>
						<p>name - price</p>
						<p>description</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<h3>Dessert</h3>
						<p>name - price</p>
						<p>description</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Food
