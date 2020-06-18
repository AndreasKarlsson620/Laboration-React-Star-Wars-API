import React, { useState } from "react";

import "../App.css";

const AllFavorites = (props) =>
{
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [birth_year, setBirthYear] = useState("");

	const toAdd = () =>
	{
		props.addFavorite(newItem);
	};

	let newItem = {
		name: name,
		gender: gender,
		birth_year: birth_year,
	};

	const [filter, setFilter] = useState("");
	function toSearch(event)
	{
		setFilter(event.target.value);
	}

	let favoritesList = [];
	favoritesList = favoritesList.concat(props.favorites);

	let content = null;
	if (favoritesList.length < 1)
	{
		content = <h3 className="no-favorites">No favorites</h3>;
	}
	else
	{
		content = favoritesList
		.filter((item) =>
		{
			return item.name.toLowerCase().includes(filter.toLowerCase());
		})
		.map((item, id) => (
			<div key={id} className="card-box">
			<div className="card-text">
			<div className="card-title">
			<h3>
			{item.name}
			</h3>
			</div>
			<div className="card-info">
			<div>
			<span>
			Gender:
			</span>
			{item.gender}
			</div>
			<div>
			<span>
			Birth date:
			</span>
			{item.birth_year}
			</div>
			</div>
			</div>
			</div>
		));
	}
	return (
		<div className="App">
		<div className="persons-box">
		<div className="duplo">
		{" "}
		<input
		className="input-search-add"
		type="text"
		placeholder="Search"
		onKeyUp={toSearch}
		/>
		<div className="card-box-add">
		<div className="card-text-add">
		<input
		className="card-title-add"
		type="text"
		placeholder="Name"
		value={name}
		onChange={(e) =>
			setName(
				e.target.value.charAt(0).toUpperCase() +
				e.target.value.slice(1)
			)
		}
		onClick={() => setName("")}
		/>
		<div className="card-info-add">
		<input
		className="card-info-add-1"
		type="text"
		placeholder="Birth"
		value={birth_year}
		onChange={(e) =>
			setBirthYear(
				e.target.value.charAt(0).toUpperCase() +
				e.target.value.slice(1)
			)
		}
		onClick={() => setBirthYear("")}
		/>
		<input
		className="card-info-add-2"
		type="text"
		placeholder="Gender"
		value={gender}
		onChange={(e) =>
			setGender(
				e.target.value.charAt(0).toUpperCase() +
				e.target.value.slice(1)
			)
		}
		onClick={() => setGender("")}
		/>
		<button className="card-btm-add" onClick={toAdd}>
		Add character
		</button>
		</div>
		</div>
		</div>
		</div>
		<div className="card-raid-add">
		{content}
		</div>
		</div>
		</div>
	);
};

export default AllFavorites;
