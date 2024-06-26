import React from "react";
import "./Hexagon.scss";

import FakeButton from "../../Button/FakeButton";

interface HexagonProps {
	backgroundClass?: string;
	title: string;
	text: string;
	buttonLabel: string;
	buttonHref: string;
	buttonIcon?: React.ReactNode;
	buttonClassName?: string;
	white?: boolean; // Nouvelle prop pour gérer la classe blanc
}

const Hexagon: React.FC<HexagonProps> = ({
	backgroundClass,
	title,
	text,
	buttonLabel,
	buttonHref,
	buttonIcon,
	buttonClassName,
	white = false, // Valeur par défaut
}) => {
	return (
		<div>
			<div className={`hexagon ${white ? "blanc" : ""}`}>
				<svg
					className="svg"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 520 574"
				>
					<g filter="url(#filter0_d_1_484)">
						<path
							fill="#E4032E"
							d="M40 160.781c0-11.14 7.89-24.779 17.571-30.349L242.393 24.177c9.682-5.57 25.532-5.57 35.214 0l184.822 106.255c9.682 5.57 17.571 19.209 17.571 30.349v212.438c0 11.14-7.889 24.779-17.571 30.349L277.607 509.823c-9.682 5.569-25.532 5.569-35.214 0L57.571 403.639C47.89 398.069 40 384.43 40 373.291v-212.51z"
						></path>
					</g>
					<defs>
						<filter
							id="filter0_d_1_484"
							width="520"
							height="574"
							x="0"
							y="0"
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							></feColorMatrix>
							<feOffset dy="20"></feOffset>
							<feGaussianBlur stdDeviation="20"></feGaussianBlur>
							<feComposite in2="hardAlpha" operator="out"></feComposite>
							<feColorMatrix values="0 0 0 0 0.894118 0 0 0 0 0.0117647 0 0 0 0 0.180392 0 0 0 0.25 0"></feColorMatrix>
							<feBlend
								in2="BackgroundImageFix"
								result="effect1_dropShadow_1_484"
							></feBlend>
							<feBlend
								in="SourceGraphic"
								in2="effect1_dropShadow_1_484"
								result="shape"
							></feBlend>
						</filter>
					</defs>
				</svg>
				<svg
					className="svg svg--blanc"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 520 574"
				>
					<g filter="url(#filter0_d_1_484)">
						<path
							fill="#fff"
							d="M40 160.781c0-11.14 7.89-24.779 17.571-30.349L242.393 24.177c9.682-5.57 25.532-5.57 35.214 0l184.822 106.255c9.682 5.57 17.571 19.209 17.571 30.349v212.438c0 11.14-7.889 24.779-17.571 30.349L277.607 509.823c-9.682 5.569-25.532 5.569-35.214 0L57.571 403.639C47.89 398.069 40 384.43 40 373.291v-212.51z"
						></path>
					</g>
					<defs>
						<filter
							id="filter0_d_1_484"
							width="520"
							height="574"
							x="0"
							y="0"
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
							<feColorMatrix
								in="SourceAlpha"
								result="hardAlpha"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							></feColorMatrix>
							<feOffset dy="20"></feOffset>
							<feGaussianBlur stdDeviation="20"></feGaussianBlur>
							<feComposite in2="hardAlpha" operator="out"></feComposite>
							<feColorMatrix values="0 0 0 0 0.894118 0 0 0 0 0.0117647 0 0 0 0 0.180392 0 0 0 0.25 0"></feColorMatrix>
							<feBlend
								in2="BackgroundImageFix"
								result="effect1_dropShadow_1_484"
							></feBlend>
							<feBlend
								in="SourceGraphic"
								in2="effect1_dropShadow_1_484"
								result="shape"
							></feBlend>
						</filter>
					</defs>
				</svg>
				<div className={`bg-image ${backgroundClass}`}></div>
				<div className="content">
					<h3>{title}</h3>
					<p>{text}</p>
					<FakeButton
						label={buttonLabel}
						href={buttonHref}
						icon={buttonIcon}
						className={buttonClassName}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hexagon;
