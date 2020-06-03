import React from "react";
import { Cards, Charts, CountryPicker } from "./components";

import { fetchData } from "./api";
import image from "./images/corona.jpg";
import "./App.css";

class App extends React.Component {
	state = {
		data: {},
		country: "",
	};
	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}
	handleCountryChange = async (country) => {
		//fetch the data
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	};
	render() {
		const { data, country } = this.state;

		return (
			<div className="container">
				<img className="img" src={image} alt="corona" />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Charts data={data} country={country} />
			</div>
		);
	}
}

export default App;
