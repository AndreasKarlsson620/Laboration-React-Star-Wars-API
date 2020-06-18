import React from "react";

import "../App.css";

const Header = ({ setScreenFromHeader }) =>
{
	return (
		<div className="header-box">
		<div className="logo-box">
        <h3
		className="header-text"
		onClick={() => setScreenFromHeader("Start")}
        >
		S T A R  W A R S  A P I
		</h3>
		</div>
		<div className="line-header-top">
		</div>
		<div className="start-btm-box">
		<button
		className="btm-persons"
		onClick={() => setScreenFromHeader("Persons")}
        >
		PERSONS
		</button>
		<button
		className="btm-planets"
		onClick={() => setScreenFromHeader("Planets")}
        >
		PLANETS
		</button>
		<li className="dropdown">
		<button className="btm-favorites">
		FAVORITES
		</button>
		<div className="dropdown-content">
		<div onClick={() => setScreenFromHeader("FavoritePersons")}>
		Persons
		</div>
		<div onClick={() => setScreenFromHeader("FavoritePlanets")}>
		Planets
		</div>
		<div onClick={() => setScreenFromHeader("AllFavorites")}>
		All favorites
		</div>
		</div>
        </li>
		</div>
		<div className="line-header-bottom">
		</div>
		</div>
	);
};

export default Header;
