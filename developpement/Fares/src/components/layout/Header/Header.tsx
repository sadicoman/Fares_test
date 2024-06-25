import React, { useRef } from "react";
// import gsap from "gsap";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";

const Header: React.FC = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLImageElement>(null);
	const burgerMenuRef = useRef<HTMLButtonElement>(null);
	const navRef = useRef<HTMLElement>(null);

	return (
		<div className="container__header" ref={headerRef}>
			<header className="header">
				<div className="header__topNav">
					<ul className="topNav">
						<li className="topNav__el">
							<a className="topNav__lien" href="#">
								Offres d’emploi
							</a>
						</li>
						<li className="topNav__el">
							<a className="topNav__lien" href="#">
								Espace membre
							</a>
						</li>
					</ul>
				</div>
				<div className="header__nav">
					<a className="lien" href="#">
						<img ref={logoRef} className="logo" src="assets/img/logo.svg" alt="Logo" />
					</a>
					<BurgerMenu ref={burgerMenuRef} />
					<Navbar ref={navRef} />
				</div>
			</header>
		</div>
	);
};

export default Header;
