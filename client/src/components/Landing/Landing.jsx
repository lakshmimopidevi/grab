import React from 'react';
import { Button, Grabby } from '../common/index';
import cursor from '../../assets/cursor.png';
import twocircles from '../../assets/twocircles.svg';
import card from '../../assets/card.svg';
import classes from './Landing.module.css';

const Landing = () => {
	return (
		<>
			<div className={classes.landing}>
				<div className={classes.column1}>
					<h1 className={classes.heading}>
						<span className={classes.heading_highlight}>Opportunities</span>{' '}
						come and go,{' '}
						<span className={classes.heading_highlight}>Grab yours.</span>
					</h1>
					<h2 className={classes.subheading}>
						Get the latest updates about internships, hackathons, job openings
						and much more..
					</h2>
					<a href="/team">
						<Button label="Explore" padding="16px 32px" fontSize="24px" />
					</a>
				</div>
				<div className={classes.column2}>
					<a href="/opportunities">
					<div className={classes.box1}>
						<img className={classes.card1} src={card} alt="card" />
					</div>
					</a>
					<div className={classes.grabby_container}>
						<Grabby />
					</div>
					<a href="/opportunities">
					<div className={classes.box2}>
						<img className={classes.card2} src={card} alt="card" />
					</div>
					</a>
					<div className={classes.element}></div>
				</div>
			</div>
		</>
	);
};

export default Landing;
