import React from 'react'
import Calendar from './Calender'
class Reservations extends React.Component {
	constructor() {
		super()
		this.state = {
			name: "",
			email: "",
			date: "",
			time: "",
			guests: ""
		}
		this.formFunction = this.formFunction.bind(this)
	}

	formFunction(event) {
		event.preventDefault()
		console.log("submit")
	}

	render() {


		return (
			<div>
				<h2 className="text-center">Reserve Today!</h2>
				<form onSubmit={this.formFunction}>
					<div className="form-group">
						<label>Who is the reservation for?</label>
						<input name="name" value={this.state.name} type="text" placeholder="name" className="form-control" />
					</div>
					<div className="form-group">
						<label>Where should the confirmation be sent?</label>
						<input name="email" value={this.state.email} type="email" placeholder="email" className="form-control" />
					</div>
					<div className="form-group">
						<label>What day and time?</label>
						<div className="row">
							<div className="col-sm-4">
								<Calendar name="date" value={this.state.date} />
							</div>
							<div className="col-sm-8">
								<select className="form-control" name="time" value={this.state.time}>
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
						<label>How many guests will be joining?</label>
						<select className="form-control">
							<option>--Select number of guests--</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>5 +</option>
						</select>
					</div>



					<button className="btn form-button">Submit</button>
				</form>
			</div>
		)
	}
}

export default Reservations