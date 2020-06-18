import React, { useState, useEffect } from "react";

import "./App.css";

import Start from "./components/Start";
import Header from "./components/Header";
import Persons from "./components/Persons";
import Planets from "./components/Planets";
import FavoritePersons from "./components/FavoritePersons";
import FavoritePlanets from "./components/FavoritePlanets";
import AllFavorites from "./components/AllFavorites.jsx";

function App() {
	const START = "Start",
	HEADER = "Header",
	PERSONS = "Persons",
	PLANETS = "Planets",
	FAVORITE_PERSONS = "FavoritePersons",
	FAVORITE_PLANETS = "FavoritePlanets",
	ALL_FAVORITES = "AllFavorites";

	const [currentScreen, setCurrentScreen] = useState(START);
	const [favorites, setFavorites] = useState([]);
	const [persons, setPersons] = useState([]);
	const [planets, setPlanets] = useState([]);

	const addFavorite = (items) =>
	{
		setFavorites([...favorites, items]);
	};

	let content = null;
	switch (currentScreen)
	{
		case START:
		content = <Start />;
		break;
		case HEADER:
		content = <Header />;
		break;
		case PERSONS:
		content = (
			<Persons
			items={persons}
			setPersons={setPersons}
			addFavorite={addFavorite}
			/>
		);
		break;
		case PLANETS:
		content = (
			<Planets
			items={planets}
			setPlanets={setPlanets}
			addFavorite={addFavorite}
			/>
		);
		break;
		case FAVORITE_PERSONS:
		content = <FavoritePersons />;
		break;
		case FAVORITE_PLANETS:
		content = <FavoritePlanets />;
		break;
		case ALL_FAVORITES:
		content = (
			<AllFavorites
			favorites={favorites}
			setFavorites={setFavorites}
			addFavorite={addFavorite}
			/>
		);
		break;
		default:
		content = <Start />;
	}

	useEffect(() =>
	{
		let listPersons = [];

		function getData(url)
		{
			fetch(url)
			.then((res) => res.json())
			.then(async (response) =>
			{
				let next = response.next;

				if (next !== null)
				{
					await getData(next);
					response.results.forEach((persons) => listPersons.push(persons));
				}
				else
				{
					setPersons(listPersons);
				}
			});
		}
		getData("https://swapi.dev/api/people/");
	}, []);

	useEffect(() =>
	{
		let listPlanets = [];

		function getData(url)
		{
			fetch(url)
			.then((res) => res.json())
			.then(async (response) =>
			{
				let next = response.next;

				if (next !== null)
				{
					await getData(next);
					response.results.forEach((planets) => listPlanets.push(planets));
				}
				else
				{
					setPlanets(listPlanets);
				}
			});
		}
		getData("https://swapi.dev/api/planets");
	}, []);

	return (
		<div className="App">
		<header>
		<Header setScreenFromHeader={setCurrentScreen} />
		</header>
		<main>
		{content}
		</main>
		</div>
	);
}

export default App;
