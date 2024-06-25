import React from "react";
import "./FakeButtonWithIconRight.scss";

interface FakeButtonWithIconRightProps {
	label: string;
	href: string;
	icon?: React.ReactNode;
	className?: string;
}

const FakeButtonWithIconRight: React.FC<FakeButtonWithIconRightProps> = ({
	label,
	href,
	icon,
	className = "",
}) => {
	return (
		<a href={href} className={`fake-btn-right ${className}`}>
			<span>{label}</span>
			{icon && <span className="icon">{icon}</span>}
		</a>
	);
};

export default FakeButtonWithIconRight;
