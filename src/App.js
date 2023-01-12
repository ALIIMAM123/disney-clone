import { Routes, Route } from "react-router-dom";

import CardUI from "./CardUI/CardUi";
import InitialCard from "./InitialCard.js/InitialCard";
// import Card from "./Card/Card";
import List from "./List/List";
import View from "./View/View";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<InitialCard />} />
				<Route path="/listCard" element={<CardUI />} />
				<Route path="/list" element={<List />} />
				<Route path="/view" element={<View />} />
				{/* <Route path="/apiData" element={<ApiFilm />} /> */}
			</Routes>
		</div>
	);
}

export default App;
