import React from "react";
import "./NewCustomer.css";
import { Link } from "react-router-dom";

function NewCustomer() {
	return (
		<>
			<div className="New__customer mb-3  pb-4 text-center">
				<div className="Inside__New__customer">
					<div className="p-0">See personalized recommendations</div>
					<div>
						<Link to="./login">
							{" "}
							<button className="login__button " type="submit">
								Sign in
							</button>
						</Link>
					</div>

					<small>
						New customer?<Link className="start__here" to="/login">{" "}Start here.</Link>
					</small>
				</div>
			</div>
		</>
	);
}

export default NewCustomer;
