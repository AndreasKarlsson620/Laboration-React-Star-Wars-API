import React, { useState } from "react";

import "../App.css";

const Persons = (props) =>
{
	const [filter, setFilter] = useState("");
	function toSearch(event)
	{
		setFilter(event.target.value);
	}

	const toFavorite = (person) =>
	{
		let addToFavorites = {
			name: person.name,
			gender: person.gender,
			birth_year: person.birth_year,
		};

		props.addFavorite(addToFavorites);
	};

	let listWithPersons = props.items
	.filter((item) =>
	{
		return (
			item.name.toLowerCase().includes(filter.toLowerCase()) ||
			item.gender.toLowerCase().includes(filter.toLowerCase()) ||
			item.birth_year.toLowerCase().includes(filter.toLowerCase())
		);
	})
	.map((person, id) => (
		<div key={id} className="card-box">
		<div className="card-text">
		<div className="card-title">
		<h3>
		{person.name}
		</h3>
		</div>
		<div className="card-info">
		<p>
		<span>
		Gender:
		</span>
		{person.gender}
		</p>
		<p>
		<span>
		Birth date:
		</span>
		{person.birth_year}
		</p>
		</div>
		<button className="card-btm" onClick={() => toFavorite(person)}>
		Add to favorites
		</button>
		</div>
		</div>
	));

	return (
		<div className="App">
		<div className="persons-box">
		<input
		className="input-search"
		type="text"
		placeholder="Search"
		onKeyUp={toSearch}
		/>
		<div className="card-raid">
		{listWithPersons}
		</div>
		</div>
		</div>
	);
};

export default Persons;
