import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			studentsArray: [],
			studentInput: ""
		};
	}
	addToListEnter = () => {
		if (studentInput) {
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
								type="button">
								Add to list
							</button>
							<button
								className="btn btn-outline-secondary"
								type="button">
								Pick a student
							</button>
						</div>
					</div>

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
