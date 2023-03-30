import React from "react";
import doggio from "../../img/aYVEPgx_700b.jpg";
import "../../styles/home.css";

export const Home = () => (

	// const getSWApi = () => {
	// 	fetch("https://www.swapi.tech/api/")
	// 	.then((r) => r.json())
	// 	.then((data) => {data})
	// }

	<div className="text-center mt-5">
		<p>
			<img src={doggio} />
		</p>
	</div>
);
