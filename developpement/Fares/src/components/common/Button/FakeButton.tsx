import React from "react";
import "./FakeButton.scss";

interface FakeButtonProps {
	label: string;
	href: string;
	icon?: React.ReactNode;
	className?: string;
}

const FakeButton: React.FC<FakeButtonProps> = ({ label, href, icon, className = "" }) => {
	return (
		<a href={href} className={`btn__fake ${className}`}>
			{icon && <span className="icon">{icon}</span>}
			{label}
		</a>
	);
};

export default FakeButton;
