import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
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
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-secondary"
							type="button">
							Add to list.
						</button>
						<button
							className="btn btn-outline-secondary"
							type="button">
							Finish list.
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
