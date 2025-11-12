import { useDispatch, useSelector } from "react-redux";

const selectCount = (state) => state.count;

function App() {
	const dispatch = useDispatch();
	const count = useSelector(selectCount);

	const increment = () => dispatch({ type: "counter/increment" });
	const decrement = () => dispatch({ type: "counter/decrement" });
	const reset = () => dispatch({ type: "counter/reset" });

	return (
		<section style={{ padding: "2rem", textAlign: "center" }}>
			<h1>Demo React Redux</h1>
			<p style={{ fontSize: "2rem", margin: "1rem 0" }}>{count}</p>
			<div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
				<button onClick={decrement}>-1</button>
				<button onClick={reset}>Reset</button>
				<button onClick={increment}>+1</button>
			</div>
		</section>
	);
}

export default App;
