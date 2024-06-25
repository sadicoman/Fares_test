import React from "react";
import "./Home.scss";

import Header from "../../components/layout/Header/Header";
import Hexagon from "../../components/common/Card/Hexagon/Hexagon";
import ResourceCard from "../../components/common/Card/ResourceCard/ResourceCard";
import FlecheBlanche from "../../components/common/Fleche/FlecheBlanche";
import FlecheRouge from "../../components/common/Fleche/FlecheRouge";

function Home(): React.ReactElement {
	return (
		<>
			<div className="background--poly">
				<Header />
				<section className="section section--deco">
					<h1 className="title">
						Ensemble contre les{" "}
						<span className="title--color">affections respiratoires</span>
					</h1>
					<p>
						Au FARES, l’Humain se trouve à l’intersection des trois valeurs clé vécues en
						interne et manifestées en externe n’ayant que pour finalité le{" "}
						<span className="bold">
							bien-être des individus dans leur santé mentale et/ou physique.
						</span>
					</p>
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
			</div>
			<div>
				<section className="section section--ressources">
					<div>
						<h2 className="title title--niveau2">Nos ressources</h2>
						<p>
							Sed ac maximus urna. Curabitur dui odio, vulputate sed leo vitae,{" "}
							<span className="bold">vehicula commodo sapien.</span> Nullam laoreet dictum
							magna.
						</p>
					</div>
					<div className="resource-card-container">
						<ResourceCard
							imageSrc="assets/img/iStock-14616941811.png"
							imageAlt="Placeholder Image"
							imageClass="decorated-element"
							title="Documentations"
							text="Sed ac maximus urna. Curabitur dui odio, vulputate sed leo vitae."
							button1Label="Tuberculose"
							button1Href="#"
							button1Icon={<FlecheBlanche />}
							button1ClassName="btn__fake--quatrieme"
							button2ClassName="btn__fake--troisieme"
							button2Label="Tabagisme"
							button2Href="#"
							button2Icon={<FlecheRouge />}
						/>
						<ResourceCard
							imageSrc="assets/img/iStock-11492861791.png"
							imageAlt="Placeholder Image"
							imageClass="decorated-element-2"
							title="Formations"
							text="Vivamus metus nisl, tristique et justo pulvinar, congue auctor justo."
							button1Label="Tuberculose"
							button1Href="#"
							button1Icon={<FlecheBlanche />}
							button1ClassName="btn__fake--troisieme"
							button2ClassName="btn__fake--troisieme"
							button2Label="Tabagisme"
							button2Href="#"
							button2Icon={<FlecheRouge />}
						/>
					</div>
				</section>
				<section>
					<h2 className="title title--niveau2">Les dernières actualités du FARES</h2>
				</section>
			</div>
		</>
	);
}

export default Home;
