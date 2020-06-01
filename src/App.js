import React from "react";
import { Card, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";

import "./App.css";

class App extends React.Component {
	async componentDidMount() {
		const data = await fetchData();
		console.log(data);
	}
	render() {
		return (
			<div className="container">
				<Card />
				<CountryPicker />
				<Charts />
			</div>
		);
	}
}

export default App;
