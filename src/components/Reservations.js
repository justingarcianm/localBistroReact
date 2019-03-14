import React from 'react'

class Reservations extends React.Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<div className="text-center">
				<h2>Reserve Today!</h2>
				<form>
					<div className="form-group">
						<input type="text" placeholder="name" class="form-control" />
					</div>
					<div className="form-group">
						<input type="email" placeholder="email" class="form-control" />
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">Time:</label>
						<select class="form-control" id="exampleFormControlSelect1">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">Guests:</label>
						<select class="form-control" id="exampleFormControlSelect1">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}

export default Reservations