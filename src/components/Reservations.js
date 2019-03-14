import React from 'react'
import Calendar from './Calender'
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
						<label className="styled">When:</label>
						<div class="form-control">
							<Calendar />
							Time: <input type="time" step="10" min="8:00" max="18:00" required />
						</div>

					</div>
					<div class="form-group">
						<label className="styled">Guests:</label>
						<select class="form-control" id="exampleFormControlSelect1">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>5 +</option>
						</select>
					</div>
					<button className="btn form-button" disabled>Submit</button>
				</form>
			</div>
		)
	}
}

export default Reservations