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
			Math.random() * this.state.studentsArray.length
		);
		this.setState({
			randomStudent:
				"Hey " +
				this.state.studentsArray[randomNumber].student +
				" ! You're up next!"
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
					<h1> {this.state.randomStudent}</h1>

					<div className="fixed-bottom">
						<a href="http://www.edianibarrola.com">
							{" "}
							Made by EdianSmells
						</a>
						<a href="http://www.twitter.com/ediansmells">
							{" "}
							<i className="fab fa-twitter" />{" "}
						</a>
						<a href="http://github.com/edianibarrola">
							{" "}
							<i className="fab fa-github-alt" />{" "}
						</a>
						<a href="http://www.instagram.com/the_garden_of_edian/">
							{" "}
							<i className="fab fa-instagram" />{" "}
						</a>
					</div>
				</div>
			</div>
		);
	}
}
