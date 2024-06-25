import React from "react";

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
}) => {
	return (
		<div className="resource-card">
			<div className="container-card">
				<div className={`${imageClass}`}>
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
