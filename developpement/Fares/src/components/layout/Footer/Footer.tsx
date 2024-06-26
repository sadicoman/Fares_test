import React from "react";
import "./Footer.scss";
import FakeButton from "../../common/Button/FakeButton";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="support-section">
				<h4 className="title--sponsor">Avec le soutien de</h4>
				<ul className="support-logos">
					<li>
						<img src="assets/img/image-4.png" alt="Supporter 1" />
					</li>
					<li>
						<img src="assets/img/image-5.png" alt="Supporter 2" />
					</li>
					<li>
						<img src="assets/img/image-6.png" alt="Supporter 3" />
					</li>
					<li>
						<img src="assets/img/image-7.png" alt="Supporter 4" />
					</li>
					<li>
						<img src="assets/img/image-8.png" alt="Supporter 5" />
					</li>
				</ul>
			</div>
			<div className="contact-section">
				<img className="logo" src="assets/img/logo.svg" alt="" />
				<div className="contact-social">
					<div className="contact-info">
						<h4 className="title--niveau4">Nous contacter</h4>
						<address>
							FARES asbl - siège social
							<br />
							Rue Haute, entrée 290 - 807A
							<br />
							1000 Bruxelles (Belgique)
							<br />
							Tél. 02 512 29 36
							<br />
							<br />
							N° d'entreprise BE 0422 618 805
						</address>
					</div>
					<div className="social-media">
						<h4 className="title--niveau4">Suivez-nous</h4>
						<div className="social-logos">
							<img src="assets/img/Frame.svg" alt="Facebook" />
							<img src="assets/img/Frame-1.svg" alt="Twitter" />
							<img src="assets/img/Frame-2.svg" alt="Instagram" />
							<img src="assets/img/x-social-media-black-icon 1.svg" alt="LinkedIn" />
						</div>
						<FakeButton
							icon={<img src="assets/img/email.svg" alt="mail" />}
							label="S’inscrire à la newsletter"
							href="#"
							className="btn__fake--footer"
						/>
					</div>
				</div>
			</div>
			<div className="legal-section">
				<p className="copyright">© FARES ASBL</p>
				<ul>
					<li className="legal-section--souligner">
						<a href="#">mentions légales</a>
					</li>
					<li className="legal-section--souligner">
						<a href="#">En savoir plus sur notre politique vie privée et cookies</a>
					</li>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a href="#">Cookie</a>
					</li>
					<li>
						<a href="#">Sitemap</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
