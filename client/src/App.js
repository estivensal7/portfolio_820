import React from "react";
import "./App.css";

//importing components
import Content from "./Components/Content";
import Landing from "./Components/Landing";

function App() {
	return (
		<div className="App">
			<Landing />
			<Content />
		</div>
	);
}

export default App;
