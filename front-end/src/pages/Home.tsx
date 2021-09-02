import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function serviceTile() {
	return <div></div>;
}

function Home() {
	return (
		<>
			<Banner
				title="Home"
				imageLink="https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
			/>
			<h2>Services</h2>
		</>
	);
}

export default Home;
