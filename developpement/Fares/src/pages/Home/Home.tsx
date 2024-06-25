import React from "react";
import "./Home.scss";

import Header from "../../components/layout/Header/Header";

function Home(): React.ReactElement {
	return (
		<>
			<Header />
			<section>
				<h1>Welcome to Home Page</h1>
			</section>
		</>
	);
}

export default Home;
