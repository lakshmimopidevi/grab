import React from 'react';
import { Button } from '../common';
import icon from '../../assets/verified.png';
import classes from '../Extra/Extra.module.css';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';
import icon4 from '../../assets/icon4.svg';
const Extra = () => {
	return (
		<>
			<div className={classes.extra_bg}>
				<div className={classes.wrapper}>
					<div className={classes.col1}>
						<div className={`${classes.box1} ${classes.hoverEffect}`}>
							<img src={icon4} alt="" />
							<h1 className={classes.number}>1.</h1>
							<h4 className={classes.head}>Opportunities</h4>
							<p className={classes.para}>Grab them..</p>
						</div>
						<div className={`${classes.box3} ${classes.hoverEffect}`}>
							<img src={icon3} alt="" />
							<h1 className={classes.number}>3.</h1>
							<h4 className={classes.head}>Motivation</h4>
							<p className={classes.para}>Uphold it..</p>
						</div>
					</div>
					<div className={classes.col2}>
					<div className={`${classes.box2} ${classes.hoverEffect}`}>
							<img src={icon2} alt="" />
							<h1 className={classes.number}>2.</h1>
							<h4 className={classes.head}>Podcasts</h4>
							<p className={classes.para}>Learn from them..</p>
						</div>

						<div className={`${classes.box4} ${classes.hoverEffect}`}>
							<img src={icon1} alt="" />
							<h1 className={classes.number}>4.</h1>
							<h4 className={classes.head}>Resources</h4>
							<p className={classes.para}>Use them..</p>
						</div>
					</div>
				</div>
				<div className={classes.content}>
					<div className={classes.head1}>
						Your dream job.
						<br /> Just a click away from you
					</div>
					<div className={classes.head2}>Let’s make it happen</div>
					<a href="/opportunities">
						<div className={classes.butt}>
							<Button label="Find Yours" />
						</div>
					</a>
				</div>
			</div>
		</>
	);
};

export default Extra;
