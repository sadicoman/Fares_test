import React, { useEffect } from "react";
import "./Home.scss";

import gsap from "gsap";

import Header from "../../components/layout/Header/Header";
import Hexagon from "../../components/common/Card/Hexagon/Hexagon";
import ResourceCard from "../../components/common/Card/ResourceCard/ResourceCard";
import FlecheBlanche from "../../components/common/Fleche/FlecheBlanche";
import FlecheRouge from "../../components/common/Fleche/FlecheRouge";
import ActualitesCard from "../../components/common/Card/ActualitesCard/ActualitesCard";
import FakeButton from "../../components/common/Button/FakeButton";
import Footer from "../../components/layout/Footer/Footer";

function Home(): React.ReactElement {
	useEffect(() => {
		const elements = document.querySelectorAll(
			".deco__svg path, .deco__svg rect, .deco__svg circle",
		);

		elements.forEach(element => {
			const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
			const duration = 5 + Math.random() * 3; // Random duration between 5 and 8 seconds
			const scale = 1.5 + Math.random() * 0.3; // Random scale between 1.5 and 1.8

			// Breathing effect
			gsap.to(element, {
				scale: scale,
				opacity: 0.9,
				duration: duration,
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
				delay: delay,
			});

			// Occasional rotation animation
			gsap.to(element, {
				rotation: 360,
				duration: 60, // Long duration for slow rotation
				repeat: -1,
				yoyo: true,
				ease: "none",
				delay: delay + Math.random() * 60, // Random delay to make it rare
				transformOrigin: "center center",
			});

			// Occasional subtle movement effect
			gsap.to(element, {
				x: "+=10",
				y: "+=10",
				duration: 60, // Long duration for slow movement
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
				delay: delay + Math.random() * 60, // Random delay to make it rare
			});
		});
	}, []);

	return (
		<>
			<div className="background--poly">
				<Header />
				<section className="section section--deco">
					<svg
						className="deco__svg"
						xmlns="http://www.w3.org/2000/svg"
						// width="1240"
						// height="546"
						fill="none"
						viewBox="0 0 1240 546"
					>
						<path
							fill="#E4032E"
							d="M19 357.067a.382.382 0 00-.517-.15l-4.566 2.497a.38.38 0 01-.518-.15l-.948-1.734a.38.38 0 01.152-.517l2.89-1.58a.381.381 0 00.152-.517l-1.238-2.264a.38.38 0 00-.518-.15L11 354.081a.38.38 0 01-.518-.15l-1.704-3.115a.38.38 0 00-.517-.15l-2.277 1.245a.381.381 0 00-.153.517l1.704 3.116c.1.184.032.415-.153.517l-2.89 1.58a.38.38 0 00-.152.517l1.238 2.264c.101.184.333.251.518.15l2.889-1.58a.38.38 0 01.518.15l.948 1.734a.38.38 0 01-.153.517l-4.566 2.497a.381.381 0 00-.153.517l1.239 2.265c.1.184.332.251.517.15l4.566-2.498a.381.381 0 01.518.151l7.227 13.214a.38.38 0 00.518.15l2.277-1.245a.381.381 0 00.153-.517l-7.227-13.215a.381.381 0 01.153-.517l4.566-2.497a.38.38 0 00.153-.517L19 357.067z"
						></path>
						<path
							fill="#E4032E"
							fillRule="evenodd"
							d="M954.542 16.85a1.865 1.865 0 01-.231 1.775c.839.566 1.944 1.254 3.099 1.817 2.023.983 3.814 1.507 5.14 1.552 2.012.063 3.811-.894 4.052-2.607.242-1.713-1.22-3.096-3.168-3.596-1.627-.42-2.969-.372-5.484.105l.002.005c-1.242.236-2.466.615-3.41.95zm-.282 1.842a1.87 1.87 0 01-.762.567 1.87 1.87 0 01-.9.128c-.074 1.01-.122 2.308-.035 3.584.147 2.247.58 4.052 1.203 5.22.946 1.768 2.674 2.832 4.282 2.18 1.607-.651 2.085-2.615 1.55-4.544-.443-1.618-1.153-2.746-2.82-4.678-.82-.95-1.758-1.812-2.518-2.457zm-1.739.686a1.863 1.863 0 01-1.429-1.075c-.914.448-2.067 1.067-3.133 1.791-1.867 1.27-3.218 2.555-3.92 3.684-1.059 1.707-1.118 3.729.251 4.784 1.374 1.052 3.307.469 4.716-.97 1.177-1.202 1.8-2.385 2.642-4.798.414-1.189.694-2.435.873-3.416zm5.108-4.413c-1.065.72-2.217 1.337-3.13 1.785a1.863 1.863 0 00-1.435-1.066c.179-.983.459-2.232.875-3.424l.002.005c.841-2.413 1.469-3.598 2.641-4.798 1.409-1.438 3.347-2.024 4.716-.97 1.369 1.055 1.31 3.077.251 4.784-.697 1.127-2.052 2.413-3.92 3.684zm-4.758.701l.151-3.571c-.152-2.244-.585-4.05-1.208-5.218-.946-1.768-2.669-2.834-4.282-2.18-1.607.651-2.085 2.615-1.55 4.544.446 1.611 1.158 2.744 2.823 4.671.823.953 1.765 1.818 2.526 2.463a1.876 1.876 0 011.54-.709zm-1.577.757c-.825-.564-1.91-1.244-3.051-1.786-2.304-1.098-3.589-1.49-5.269-1.5-2.013-.012-3.791.954-4.009 2.67-.218 1.714 1.268 3.098 3.227 3.543 1.295.29 3.158.243 5.375-.193 1.264-.25 2.516-.635 3.477-.968a1.858 1.858 0 01.25-1.766z"
							clipRule="evenodd"
						></path>
						<rect
							width="15.654"
							height="15.654"
							x="995.777"
							y="134.59"
							stroke="#D3D3D3"
							strokeWidth="3"
							rx="2.5"
							transform="rotate(-17.506 995.777 134.59)"
						></rect>
						<rect
							width="15.654"
							height="15.654"
							x="164.634"
							y="353.563"
							stroke="#D3D3D3"
							strokeWidth="3"
							rx="2.5"
							transform="rotate(21.321 164.634 353.563)"
						></rect>
						<path
							stroke="#D3D3D3"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							d="M1235.36 56.058l-3.46-12.524-12.52 3.456 15.98 9.068zM1138.34 265.52a8.704 8.704 0 000-12.303c-3.4-3.395-8.92-3.405-12.32-.011l12.32 12.314z"
						></path>
						<rect
							width="15.654"
							height="15.654"
							x="1085.26"
							y="354.59"
							stroke="#D3D3D3"
							strokeWidth="3"
							rx="2.5"
							transform="rotate(-17.506 1085.26 354.59)"
						></rect>
						<path
							stroke="#D3D3D3"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							d="M799.289 200.847l-4.674-12.123-12.122 4.674 16.796 7.449zM652.285 304.886a8.697 8.697 0 00-11.412-4.599c-4.417 1.88-6.492 7.001-4.613 11.418l16.025-6.819zM448.892 334.55l-12.052-4.853-4.853 12.052 16.905-7.199z"
						></path>
						<rect
							width="15.654"
							height="15.654"
							x="563.882"
							y="528.59"
							stroke="#D3D3D3"
							strokeWidth="3"
							rx="2.5"
							transform="rotate(-17.506 563.882 528.59)"
						></rect>
						<circle cx="702" cy="16" r="7.5" stroke="#D3D3D3" strokeWidth="3"></circle>
						<circle cx="96" cy="453" r="7.5" stroke="#D3D3D3" strokeWidth="3"></circle>
					</svg>
					<h1 className="title">
						Ensemble contre les <p className="title--color">affections respiratoires</p>
					</h1>
					<p className="text">
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
					<div className="ressources--title">
						<h2 className="title title--niveau2">Nos ressources</h2>
						<p>
							Sed ac maximus urna. Curabitur dui odio, vulputate sed leo vitae,{" "}
							<span className="bold">vehicula commodo sapien.</span> Nullam laoreet dictum
							magna.
						</p>
					</div>
					<div className="resource-card-container">
						<div>
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
						</div>
						<div className="ResourceCard--bas">
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
					</div>
				</section>
			</div>
			<section className="section section--actualites">
				<h2 className="title title--niveau2">Les dernières actualités du FARES</h2>
				<div className="actualites-card-container">
					<ActualitesCard
						imageSrc="assets/img/actualites-1.png"
						imageAlt="Placeholder Image"
						imageClass=""
						title="La rifampicine désormais remboursée pour le traitement de l'infection tuberculose latente"
						text="Depuis le 1er mai 2024, la rifampicine est remboursée pour le traitement de l’infection tuberculose latente (ITL)..."
						buttonLabel="Lire la suite"
						buttonHref="#"
						buttonIcon={<FlecheRouge />}
						buttonClassName="primary"
						tag="tag name"
					/>
					<ActualitesCard
						imageSrc="assets/img/actualites-2.png"
						imageAlt="Placeholder Image"
						imageClass=""
						title="Manque d'accès au traitement optimal de la TB-MDR et aux tests de résistance en Europe"
						text="Vivamus mollis odio ut lacus elementum, at congue elit malesuada. Integer lacinia in nulla vel consequat."
						buttonLabel="Lire la suite"
						buttonHref="#"
						buttonIcon={<FlecheRouge />}
						buttonClassName="primary"
						tag="tag name"
					/>
					<ActualitesCard
						imageSrc="assets/img/actualites-3.png"
						imageAlt="Placeholder Image"
						imageClass=""
						title="Journée internationale de lutte pour les droits des femmes"
						text="Vivamus mollis odio ut lacus elementum, at congue elit malesuada. Integer lacinia in nulla vel consequat."
						buttonLabel="Lire la suite"
						buttonHref="#"
						buttonIcon={<FlecheRouge />}
						buttonClassName="primary"
						tag="tag name"
					/>
				</div>
				<FakeButton
					label="Voir toutes les actualités"
					href="#"
					className="btn__fake--secondary"
				/>
			</section>
			<Footer />
		</>
	);
}

export default Home;
