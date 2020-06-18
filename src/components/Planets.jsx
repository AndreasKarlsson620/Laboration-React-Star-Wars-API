import React, { useState } from "react";

import "../App.css";

const Planets = (props) =>
{
	const [filter, setFilter] = useState("");
	function toSearch(event)
	{
		setFilter(event.target.value);
	}

	const toFavorite = (planet) =>
	{
		let addToFavorites = {
			name: planet.name,
			diameter: planet.diameter,
			population: planet.population,
		};
		props.addFavorite(addToFavorites);
	};

	let listWithplanets = props.items
	.filter((item) =>
	{
		return (
			item.name.toLowerCase().includes(filter.toLowerCase()) ||
			item.diameter.toLowerCase().includes(filter.toLowerCase()) ||
			item.population.toLowerCase().includes(filter.toLowerCase())
		);
	})
	.map((planet, id) => (
		<div key={id} className="card-box">
        <div className="card-text">
		<div className="card-title">
		<h3>
		{planet.name}
		</h3>
		</div>
		<div className="card-info">
		<p>
		<span>
		Diameter:
		</span>
		{planet.diameter}
		</p>
		<p>
		<span>
		Population:
		</span>
		{planet.population}
		</p>
		</div>
		<button className="card-btm" onClick={() => toFavorite(planet)}>
		Add to favorites
		</button>
		</div>
		</div>
	));

	return (
		<div className="App">
		<div className="planets-box">
		<input
		className="input-search"
		type="text"
		placeholder="Search"
		onKeyUp={toSearch}
		/>
		<div className="card-raid">
		{listWithplanets}
		</div>
		</div>
		</div>
	);
};

export default Planets;
