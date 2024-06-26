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

		// Animation for .ressources__svg elements
		const ressourcesElements = document.querySelectorAll(".ressources__svg path");

		ressourcesElements.forEach((element, index) => {
			gsap.fromTo(
				element,
				{ scale: 0.9 },
				{
					scale: 1,
					opacity: 1,
					duration: 4,
					delay: index * 0.3,
					ease: "power1.inOut",
					repeat: -1,
					yoyo: true,
					transformOrigin: "center center",
				},
			);
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
			<div className="ressources__container">
				<section className="section section--ressources">
					<svg
						className="ressources__svg"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="-10 0 970 585"
					>
						<path
							d="M586 38.7574C586 35.6907 588.187 31.9358 590.872 30.4024L642.118 1.15004C644.803 -0.383348 649.197 -0.383348 651.882 1.15004L703.128 30.4024C705.813 31.9358 708 35.6907 708 38.7574V97.2426C708 100.309 705.813 104.064 703.128 105.598L651.882 134.85C649.197 136.383 644.803 136.383 642.118 134.85L590.872 105.617C588.187 104.084 586 100.329 586 97.2622V38.7771V38.7574Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M390 150.042C390 146.953 392.17 143.171 394.832 141.626L445.658 112.158C448.321 110.614 452.679 110.614 455.342 112.158L506.168 141.626C508.83 143.171 511 146.953 511 150.042V208.958C511 212.047 508.83 215.829 506.168 217.374L455.342 246.841C452.679 248.386 448.321 248.386 445.658 246.841L394.832 217.394C392.17 215.849 390 212.067 390 208.977V150.062V150.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M653 150.042C653 146.953 655.17 143.171 657.832 141.626L708.658 112.158C711.321 110.614 715.679 110.614 718.342 112.158L769.168 141.626C771.83 143.171 774 146.953 774 150.042V208.958C774 212.047 771.83 215.829 769.168 217.374L718.342 246.841C715.679 248.386 711.321 248.386 708.658 246.841L657.832 217.394C655.17 215.849 653 212.067 653 208.977V150.062V150.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M585 262.042C585 258.953 587.17 255.171 589.832 253.626L640.658 224.158C643.321 222.614 647.679 222.614 650.342 224.158L701.168 253.626C703.83 255.171 706 258.953 706 262.042V320.958C706 324.047 703.83 327.829 701.168 329.374L650.342 358.841C647.679 360.386 643.321 360.386 640.658 358.841L589.832 329.394C587.17 327.849 585 324.067 585 320.977V262.062V262.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M261 374.757C261 371.691 263.187 367.936 265.872 366.402L317.118 337.15C319.803 335.617 324.197 335.617 326.882 337.15L378.128 366.402C380.813 367.936 383 371.691 383 374.757V433.243C383 436.309 380.813 440.064 378.128 441.598L326.882 470.85C324.197 472.383 319.803 472.383 317.118 470.85L265.872 441.617C263.187 440.084 261 436.329 261 433.262V374.777V374.757Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M456 38.7574C456 35.6907 458.187 31.9358 460.872 30.4024L512.118 1.15004C514.803 -0.383348 519.197 -0.383348 521.882 1.15004L573.128 30.4024C575.813 31.9358 578 35.6907 578 38.7574V97.2426C578 100.309 575.813 104.064 573.128 105.598L521.882 134.85C519.197 136.383 514.803 136.383 512.118 134.85L460.872 105.617C458.187 104.084 456 100.329 456 97.2622V38.7771V38.7574Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M261 150.042C261 146.953 263.187 143.171 265.872 141.626L317.118 112.158C319.803 110.614 324.197 110.614 326.882 112.158L378.128 141.626C380.813 143.171 383 146.953 383 150.042V208.958C383 212.047 380.813 215.829 378.128 217.374L326.882 246.841C324.197 248.386 319.803 248.386 317.118 246.841L265.872 217.394C263.187 215.849 261 212.067 261 208.977V150.062V150.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M0 150.042C0 146.953 2.16952 143.171 4.83211 141.626L55.658 112.158C58.3206 110.614 62.6794 110.614 65.342 112.158L116.168 141.626C118.83 143.171 121 146.953 121 150.042V208.958C121 212.047 118.83 215.829 116.168 217.374L65.342 246.842C62.6794 248.386 58.3206 248.386 55.658 246.842L4.83211 217.394C2.16952 215.849 0 212.067 0 208.977L0 150.062L0 150.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M456 262.042C456 258.953 458.187 255.171 460.872 253.626L512.118 224.158C514.803 222.614 519.197 222.614 521.882 224.158L573.128 253.626C575.813 255.171 578 258.953 578 262.042V320.958C578 324.047 575.813 327.829 573.128 329.374L521.882 358.841C519.197 360.386 514.803 360.386 512.118 358.841L460.872 329.394C458.187 327.849 456 324.067 456 320.977V262.062V262.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M326 262.042C326 258.953 328.187 255.171 330.872 253.626L382.118 224.158C384.803 222.614 389.197 222.614 391.882 224.158L443.128 253.626C445.813 255.171 448 258.953 448 262.042V320.958C448 324.047 445.813 327.829 443.128 329.374L391.882 358.841C389.197 360.386 384.803 360.386 382.118 358.841L330.872 329.394C328.187 327.849 326 324.067 326 320.977V262.062V262.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M521 374.757C521 371.691 523.17 367.936 525.832 366.402L576.658 337.15C579.321 335.617 583.679 335.617 586.342 337.15L637.168 366.402C639.83 367.936 642 371.691 642 374.757V433.243C642 436.309 639.83 440.064 637.168 441.598L586.342 470.85C583.679 472.383 579.321 472.383 576.658 470.85L525.832 441.617C523.17 440.084 521 436.329 521 433.262V374.777V374.757Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M131 150.042C131 146.953 133.17 143.171 135.832 141.626L186.658 112.158C189.321 110.614 193.679 110.614 196.342 112.158L247.168 141.626C249.83 143.171 252 146.953 252 150.042V208.958C252 212.047 249.83 215.829 247.168 217.374L196.342 246.841C193.679 248.386 189.321 248.386 186.658 246.841L135.832 217.394C133.17 215.849 131 212.067 131 208.977V150.062V150.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M521 150.042C521 146.953 523.187 143.171 525.872 141.626L577.118 112.158C579.803 110.614 584.197 110.614 586.882 112.158L638.128 141.626C640.813 143.171 643 146.953 643 150.042V208.958C643 212.047 640.813 215.829 638.128 217.374L586.882 246.841C584.197 248.386 579.803 248.386 577.118 246.841L525.872 217.394C523.187 215.849 521 212.067 521 208.977V150.062V150.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M196 262.042C196 258.953 198.187 255.171 200.872 253.626L252.118 224.158C254.803 222.614 259.197 222.614 261.882 224.158L313.128 253.626C315.813 255.171 318 258.953 318 262.042V320.958C318 324.047 315.813 327.829 313.128 329.374L261.882 358.841C259.197 360.386 254.803 360.386 252.118 358.841L200.872 329.394C198.187 327.849 196 324.067 196 320.977V262.062V262.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M717 262.042C717 258.953 719.17 255.171 721.832 253.626L772.658 224.158C775.321 222.614 779.679 222.614 782.342 224.158L833.168 253.626C835.83 255.171 838 258.953 838 262.042V320.958C838 324.047 835.83 327.829 833.168 329.374L782.342 358.841C779.679 360.386 775.321 360.386 772.658 358.841L721.832 329.394C719.17 327.849 717 324.067 717 320.977V262.062V262.042Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M390 374.757C390 371.691 392.17 367.936 394.832 366.402L445.658 337.15C448.321 335.617 452.679 335.617 455.342 337.15L506.168 366.402C508.83 367.936 511 371.691 511 374.757V433.243C511 436.309 508.83 440.064 506.168 441.598L455.342 470.85C452.679 472.383 448.321 472.383 445.658 470.85L394.832 441.617C392.17 440.084 390 436.329 390 433.262V374.777V374.757Z"
							stroke="white"
							stroke-width="4"
						/>
						<path
							d="M448 487.757C448 484.691 450.17 480.936 452.832 479.402L503.658 450.15C506.321 448.617 510.679 448.617 513.342 450.15L564.168 479.402C566.83 480.936 569 484.691 569 487.757V546.243C569 549.309 566.83 553.064 564.168 554.598L513.342 583.85C510.679 585.383 506.321 585.383 503.658 583.85L452.832 554.617C450.17 553.084 448 549.329 448 546.262V487.777V487.757Z"
							stroke="white"
							stroke-width="4"
						/>
					</svg>
					<div className="ressources--title">
						<h2 className="title title--niveau2">Nos ressources</h2>
						<p>
							Sed ac maximus urna. Curabitur dui odio, vulputate sed leo vitae,{" "}
							<span className="bold">vehicula commodo sapien.</span> Nullam laoreet dictum
							magna.
						</p>
					</div>
				</section>
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
