import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";

import reducer, { initialState } from "./Components/Reducer/reducer.jsx";
import { StateProvider } from "./Components/StateProvider/StateProvider.jsx";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
