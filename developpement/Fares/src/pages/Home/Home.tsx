import React from "react";
import "./Home.scss";
import FakeButton from "../../components/common/Button/FakeButton";

function Home(): React.ReactElement {
	return (
		<section>
			<h1>Welcome to Home Page</h1>
			<FakeButton label="Faire un don" href="#" icon="👋" />
		</section>
	);
}

export default Home;
