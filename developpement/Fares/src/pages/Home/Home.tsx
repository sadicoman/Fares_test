import React from "react";
import "./Home.scss";

import Header from "../../components/layout/Header/Header";
import Hexagon from "../../components/common/Card/Hexagon/Hexagon";

function Home(): React.ReactElement {
	return (
		<>
			<Header />
			<section>
				<h1>Welcome to Home Page</h1>
				<div className="container">
					<Hexagon
						title="Tuberculose "
						text="Le FARES est chargé d’améliorer la prise en charge et le suivi des patients tuberculeux et d’organiser le dépistage parmi les sujets à risque"
						buttonLabel="En savoir plus"
						buttonHref="#"
						// buttonIcon={<FaArrowRight />}
						buttonClassName="btn__fake--blanc"
					/>
					<Hexagon
						white={true}
						backgroundClass="bg-image--2"
						title="Tabagisme "
						text="L'équipe du Service Prévention Tabac met depuis 30 ans ses compétences au service des professionnels-relais des secteurs de l’éducation, de la santé et du social."
						buttonLabel="En savoir plus"
						buttonHref="#"
						// buttonIcon={<FaArrowRight />}
						buttonClassName="btn__fake--secondary"
					/>
				</div>
			</section>
		</>
	);
}

export default Home;
