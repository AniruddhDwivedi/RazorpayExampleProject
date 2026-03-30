import React, { useState } from "react";

const Join = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		confirmEmail: "",
		photoLink: "",
		redHair: "no",
		descendant: "no",
		birthmark: ""
	});

	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		console.log("Applicant Data:", formData);
	};

	return (
		<div className="join-page">
			{}
			<div className="join-image-header">
				<img
					src="/assets/chosen_header.jpg"
					alt="Many have called. Five have been chosen."
					className="chosen-header"
				/>
			</div>

			<h2>JOIN THE PROGRAM</h2>
			<p>
				Apply now to attend our Los Santos Area Enlightenment Seminar in
				September.
			</p>

			{submitted ? (
				<div className="success-message">
					<h3>Your data is now floating in the void.</h3>
					<p>Kifflom! Our Truthseekers will examine your aura shortly.</p>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="epsilon-form">
					{/* Biometrics */}
					<div className="form-group">
						<label>First Name:</label>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Last Name:</label>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Email Address:</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
					</div>

					{}
					<fieldset className="query-group">
						<legend>Do you have red hair?</legend>
						<div className="radio-options">
							<label>
								<input
									type="radio"
									name="redHair"
									value="yes"
									checked={formData.redHair === "yes"}
									onChange={handleInputChange}
								/>{" "}
								Yes
							</label>
							<label>
								<input
									type="radio"
									name="redHair"
									value="no"
									checked={formData.redHair === "no"}
									onChange={handleInputChange}
								/>{" "}
								No
							</label>
						</div>
					</fieldset>

					<fieldset className="query-group">
						<legend>Are you nervous in social situations?</legend>
						<div className="radio-options">
							<label>
								<input
									type="radio"
									name="socialAnxiety"
									value="yes"
									checked={formData.socialAnxiety === "yes"}
									onChange={handleInputChange}
								/>{" "}
								Yes
							</label>
							<label>
								<input
									type="radio"
									name="socialAnxiety"
									value="no"
									checked={formData.socialAnxiety === "no"}
									onChange={handleInputChange}
								/>{" "}
								No
							</label>
						</div>
					</fieldset>

					<button type="submit" className="form-submit-btn">
						SUBMIT YOUR DATA
					</button>
				</form>
			)}
		</div>
	);
};

export default Join;
