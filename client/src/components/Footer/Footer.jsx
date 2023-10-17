import React from 'react';
import classes from './Footer.module.css';
import img from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import linkedin from '../../assets/Socials/linkedin-2.svg';
import twitter from '../../assets/Socials/twitter.svg';
import instagram from '../../assets/Socials/instagram.svg';
import whatsapp from '../../assets/Socials/whatsapp.svg';
import youtube from '../../assets/Socials/youtube.svg';

const Footer = () => {
	const getCurrentYear = () => {
        return new Date().getFullYear();
    };
	return (
		<>
			<footer className={classes.outer_box}>
				<div className={classes.row1}>
					<NavLink to="/">
						<div className={classes.brand}>
							<div className={classes.brand_logo}>
								<img src={img} alt="logo" className={classes.logo} />
							</div>
							<span className={classes.brand_title}>GrabBit</span>
						</div>
					</NavLink>
					<div className={classes.social}>
						<h3 className={classes.social_text}>Find Us On Social Media:</h3>
						<ul className={classes.social_links}>
							<li className={classes.socia_link}>
								<a
									href="https://www.linkedin.com/company/grabbits/"
									target="blank"
									aria-label="Visit us on Linkedin"
									title="Linkedin (External Link)"
									rel="noopener noreferrer"
								>
									<img className={classes.li_link} src={linkedin}></img>
								</a>
							</li>
							<li className={classes.socia_link}>
								<a 
									href="https://www.instagram.com/grabbits_/" 
									target="blank"
									aria-label="Visit us on Instagram"
									title="Instagram (External Link)"
									rel="noopener noreferrer"
								>
									<img className={classes.ig_link} src={instagram}></img>
								</a>
							</li>
							<li className={classes.socia_link}>
								<a
									href="https://chat.whatsapp.com/KBxP1M7GT7mCh4PORsfN0H"
									target="blank"
									aria-label="Join us on WhatsApp"
									title="WhatsApp (External Link)"
									rel="noopener noreferrer"
								>
									<img className={classes.wp_link} src={whatsapp}></img>
								</a>
							</li>
							<li className={classes.socia_link}>
								<a 
									href="https://twitter.com/grabbits_" 
									target="blank"
									aria-label="Visit us on Twitter"
									title="Twitter (External Link)"
									rel="noopener noreferrer"
								>
									<img className={classes.twi_link} src={twitter}></img>
								</a>
							</li>
							<li className={classes.socia_link}>
								<a 
									href="https://www.youtube.com/channel/UCFnVnet_WPnN7VzkGORvzhg?sub_confirmation=1" 
									target="blank"
								 	aria-label="Visit us on Youtube"
									title="Youtube (External Link)"
									rel="noopener noreferrer"
								>
									<img className={classes.yt_link} src={youtube}></img>
								</a>
							</li>
						</ul>
					</div>
					<div className={classes.text_mail}>
						<h2 className={classes.text}>We&apos;re Always Happy To Help</h2>
						<h2 className={classes.mail}><a href="mailto:grabbitofficial1@gmail.com">grabbitofficial1@gmail.com</a></h2>
					</div>
				</div>
				<div className={classes.separator}></div>
				<div className={classes.row2}>Copyright © {getCurrentYear()} GrabBits</div>
			</footer>
		</>
	);
};

export default Footer;
