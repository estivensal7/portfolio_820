import React from "react";
import TypedFont from "../TypedFont";
import tophatLogo from "../../assets/tophat-beard.svg";

const Landing = () => {
	return (
		<div id="landing-container">
			<div id="landing-card">
				<TypedFont />
				<div id="tophat-logo-container">
					<img id="tophat-logo" src={tophatLogo} />
				</div>
			</div>
		</div>
	);
};

export default Landing;
