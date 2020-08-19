import React from "react";
import Typed from "react-typed";

function TypedFont() {
	return (
		<div id="typed-font-container">
			<Typed
				strings={[
					`Hi, I'm Estiven Salazar`,
					`Hi, I'm Estiven Salazar, Full-Stack Web Developer`,
				]}
				typeSpeed={80}
				backSpeed={50}
				backDelay={1}
				smartBackspace
			/>
		</div>
	);
}

export default TypedFont;
