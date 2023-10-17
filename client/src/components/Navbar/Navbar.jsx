import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/Logo.png';
import classes from './Navbar.module.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const changeOpen = () => {
		setOpen(!open);
	};
	const handleLinkClick = () => {
		if (window.innerWidth < 800) {
			window.scrollTo(0, 0);
		}
	};

	return (
		<>
			<header className={classes.header}>
				<nav className={classes.nav}>
					<NavLink to="/">
						{!open && (
							<div className={classes.brand}>
								<div className={classes.brand_logo}>
									<img src={img} alt="logo" className={classes.logo} />
								</div>
								<span className={classes.brand__title}>GrabBit</span>
							</div>
						)}
					</NavLink>

					<div
						className={`${classes.nav__menu} ${
							open ? classes.menu__open : classes.menu__close
						}`}
					>
						<ul className={`${classes.nav__list} ${classes.grid}`}>
							<NavLink to="/" onClick={handleLinkClick}>
								<li className={classes.nav__item}>
									<i className="uil uil-estate" id={classes.nav__icon}></i> Home
								</li>
							</NavLink>
							<NavLink to="/opportunities" onClick={handleLinkClick}>
								<li className={classes.nav__item}>
									<i className="uil uil-bag" id={classes.nav__icon}></i>
									Opportunities
								</li>
							</NavLink>
							<NavLink to="/podcasts" onClick={handleLinkClick}>
								<li className={classes.nav__item}>
									<i className="uil uil-megaphone" id={classes.nav__icon}></i>
									Podcasts
								</li>
							</NavLink>
							<NavLink to="/team" onClick={handleLinkClick}>
								<li className={classes.nav__item}>
									<i className="uil uil-users-alt" id={classes.nav__icon}></i>
									About us
								</li>
							</NavLink>
							<NavLink to="/contact" onClick={handleLinkClick}>
								<li className={classes.nav__item}>
									<i
										className="uil uil-voicemail-rectangle"
										id={classes.nav__icon}
									></i>
									Contact
								</li>
							</NavLink>
						</ul>
						{open && (
							<i
								className="uil uil-times"
								id={classes.nav__close}
								onClick={changeOpen}
							></i>
						)}
					</div>

					{!open && (
						<i
							className="uil uil-apps"
							id={classes.nav__toggle__icon}
							onClick={() => changeOpen()}
						></i>
					)}
				</nav>
			</header>
		</>
	);
};

export default Navbar;
