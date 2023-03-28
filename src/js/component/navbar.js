import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-3 h1"><i class="fa-brands fa-jedi-order"> Star Wars</i></span>
			</Link>
			<Link to="/characters">
				<span className="navbar-brand mb-3 h1"><i class="fa-solid fa-book-journal-whills"> Characters</i></span>
			</Link>
			<Link to="/planets">
				<span className="navbar-brand mb-3 h1"><i class="fa-solid fa-jedi"> Planets</i></span>
			</Link>
			<Link to="/vehicles">
				<span className="navbar-brand mb-3 h1"><i class="fa-brands fa-galactic-republic"> Vehicles</i></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
