import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App.jsx";

const initialState = {
	count: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "counter/increment":
			return { ...state, count: state.count + 1 };
		case "counter/decrement":
			return { ...state, count: state.count - 1 };
		case "counter/reset":
			return { ...state, count: 0 };
		default:
			return state;
	}
};

const store = createStore(reducer);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
