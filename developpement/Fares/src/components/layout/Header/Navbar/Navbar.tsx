import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./Navbar.scss";
import { useMenu } from "../MenuContext";
import FakeButton from "../../../common/Button/FakeButton";

type NavItem = {
	name: string;
	link: string;
};

const Navbar = forwardRef<HTMLElement>((_, ref) => {
	const [activeMenu, setActiveMenu] = useState("Bienvenue");
	const menuItems: NavItem[] = [
		{ name: "Tuberculose", link: "#tuberculose" },
		{ name: "Tabagisme", link: "#tabagisme" },
		{ name: "Fares", link: "#fares" },
		{ name: "Actualités", link: "#actualites" },
		{ name: "Contact", link: "#contact" },
	];

	const { isMenuVisible } = useMenu();
	const navInternalRef = useRef<HTMLElement>(null);
	const combinedRef = (ref as React.RefObject<HTMLElement>) || navInternalRef;

	useEffect(() => {
		if (combinedRef.current && isMenuVisible) {
			// const elems = combinedRef.current.querySelectorAll("li");
			// // gsap.fromTo(
			// // 	elems,
			// // 	{ opacity: 0, x: 50 },
			// // 	{ opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
			// // );
		}
	}, [isMenuVisible, combinedRef]); // Inclusion de `combinedRef` dans les dépendances de `useEffect`

	return (
		<nav className="menu" ref={combinedRef}>
			<ul className="menu__liste">
				{menuItems.map(item => (
					<li
						key={item.name}
						className={`menu__el ${item.name === activeMenu ? "menu__el--actif" : ""}`}
					>
						<a
							className="menu__lien"
							href={item.link}
							onClick={() => setActiveMenu(item.name)}
						>
							{item.name}
						</a>
					</li>
				))}
				<li className="menu__el menu__el--btn">
					<FakeButton label="Faire un don" href="#" icon="👋" />
				</li>
			</ul>
		</nav>
	);
});

export default Navbar;
