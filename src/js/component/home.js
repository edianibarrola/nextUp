import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			randomStudent: "",
			studentsArray: [],
			studentInput: ""
		};
	}
	pickRandomStudent = e => {
		let randomNumber = Math.floor(
			Math.random(this.state.studentsArray.length + 1)
		);
		this.setState({
			randomStudent: this.state.studentsArray[randomNumber].student
		});
	};
	addToListEnter = e => {
		let input = this.state.studentInput;
		if (e.keyCode == 13 && input) {
			let newUser = { student: input };
			let newStudentsArray = this.state.studentsArray.concat(newUser);
			this.setState({
				studentsArray: newStudentsArray,
				studentInput: ""
			});
		}
	};
	render() {
		return (
			<div>
				<div className="text-center mt-5  justify-content-center">
					<h1>Next Up</h1>
					<h3>The Turn Picker</h3>

					<div className="input-group mx-auto col-6">
						<input
							type="text"
							className="form-control"
							placeholder="Student name"
							aria-label="Student name"
							aria-describedby="basic-addon2"
							value={this.state.studentInput}
							onChange={event =>
								this.setState({
									studentInput: event.target.value
								})
							}
							onKeyUp={e => this.addToListEnter(e)}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary"
								type="button"
								onClick={e => this.pickRandomStudent(e)}>
								Pick a student
							</button>
						</div>
					</div>
					<h1>{this.state.randomStudent}</h1>
					<a
						className="fixed-bottom"
						href="http://www.twitter.com/ediansmells">
						{" "}
						Made by EdianSmells{" "}
					</a>
				</div>
			</div>
		);
	}
}
