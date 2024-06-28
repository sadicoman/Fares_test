import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ResourceCard.scss";
import FakeButton from "../../Button/FakeButton";

interface ResourceCardProps {
	imageSrc: string;
	imageAlt: string;
	imageClass?: string;
	title: string;
	text: string;
	button1Label: string;
	button1Href: string;
	button1Icon?: React.ReactNode;
	button1ClassName?: string;
	button2Label: string;
	button2Href: string;
	button2Icon?: React.ReactNode;
	button2ClassName?: string;
	svgElement?: React.ReactNode; // Ajout de la prop pour le SVG facultatif
}

const ResourceCard: React.FC<ResourceCardProps> = ({
	imageSrc,
	imageAlt,
	imageClass = "",
	title,
	text,
	button1Label,
	button1Href,
	button1Icon,
	button1ClassName,
	button2Label,
	button2Href,
	button2Icon,
	button2ClassName,
	svgElement,
}) => {
	const svgRef = useRef(null);

	useEffect(() => {
		if (svgRef.current) {
			gsap.to(svgRef.current, {
				x: () => Math.random() * 20 - 10,
				y: () => Math.random() * 20 - 10,
				scale: () => Math.random() * 0.5 + 0.75,
				duration: 4,
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
			});
		}
	}, []);

	return (
		<div className="resource-card">
			<div className="container-card">
				<div className={`${imageClass}`}>
					{svgElement && (
						<div className="svg-container" ref={svgRef}>
							{svgElement}
						</div>
					)}
					<img src={imageSrc} alt={imageAlt} className={`resource-card__image `} />
				</div>
				<div className="resource-card__content">
					<h2 className="resource-card__title">{title}</h2>
					<p className="resource-card__text">{text}</p>
					<div className="resource-card__buttons">
						<FakeButton
							label={button1Label}
							href={button1Href}
							icon={button1Icon}
							className={button1ClassName}
						/>
						<FakeButton
							label={button2Label}
							href={button2Href}
							icon={button2Icon}
							className={button2ClassName}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourceCard;
