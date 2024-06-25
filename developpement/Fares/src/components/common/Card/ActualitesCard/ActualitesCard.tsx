import React from "react";

import "./ActualitesCard.scss";
import FakeButtonWithIconRight from "../../FakeButtonWithIconRight/FakeButtonWithIconRight";

interface ActualitesCardProps {
	imageSrc: string;
	imageAlt: string;
	imageClass?: string;
	title: string;
	text: string;
	buttonLabel: string;
	buttonHref: string;
	buttonIcon?: React.ReactNode;
	buttonClassName?: string;
	tag?: string;
}

const ActualitesCard: React.FC<ActualitesCardProps> = ({
	imageSrc,
	imageAlt,
	imageClass = "",
	title,
	text,
	buttonLabel,
	buttonHref,
	buttonIcon,
	buttonClassName,
	tag,
}) => {
	return (
		<div className="actualites-card">
			<div className={`actualites-card__image-container ${imageClass}`}>
				{tag && <div className="actualites-card__tag">{tag}</div>}
				<img src={imageSrc} alt={imageAlt} className="actualites-card__image" />
			</div>
			<div className="actualites-card__content">
				<h2 className="actualites-card__title">{title}</h2>
				<p className="actualites-card__text">{text}</p>
				<FakeButtonWithIconRight
					label={buttonLabel}
					href={buttonHref}
					icon={buttonIcon}
					className={buttonClassName}
				/>
			</div>
		</div>
	);
};

export default ActualitesCard;
