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
						<label className="styled">When</label>
						<div className="row">
							<div className="col-sm-4">
								<Calendar />
							</div>
							<div className="col-sm-8">
								<select class="form-control">
									<option>--Select a Time--</option>
									<option>8:00 AM</option>
									<option>9:00 AM</option>
									<option>10:00 AM</option>
									<option>11:00 AM</option>
									<option>12:00 PM</option>
									<option>1:00 PM</option>
									<option>2:00 PM</option>
									<option>3:00 PM</option>
									<option>4:00 PM</option>
									<option>5:00 PM</option>
									<option>6:00 PM</option>
									<option>7:00 PM</option>
									<option>8:00 PM</option>
									<option>9:00 PM</option>
									<option>10:00 PM</option>
								</select>
							</div>
						</div>
						<label className="styled">Who</label>
						<select class="form-control">
							<option>--Select number of guests--</option>
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