import React from 'react';
import logo from '../../assets/Logo.png';
import right from '../../assets/Testimonials/right.png';
import left from '../../assets/Testimonials/left.png';
import classes from './Testimonial.module.css';
import { Testimonials as testidata } from '../../assets/Data/Testimonials';
// import Slider from "./Slider"

const Testimonial = () => {
	return (
		// <Slider/>
		<div className={classes.testi_bg}>
			{testidata.map((item, i) => {
				return (
					<div key={i} className={classes.testi_wrapper}>
						<img className={classes.testi_img} src={item.img} alt="" />
						<div className={classes.testi_content}>
							<div className={classes.testi_heading}>
								<h3>What our Customer Think of Us?</h3>
							</div>
							<div className={classes.testi_name}>
								<h4>{item.name}</h4>
							</div>
							<div className={classes.testi_para}>
								<p>{item.para}</p>
							</div>
						</div>
					</div>
				);
			})}
			<div className={classes.arrows}>
				<img className={classes.arrow_left} src={left} alt="" />
				<img className={classes.arrow_right} src={right} alt="" />
			</div>
		</div>
	);
};

export default Testimonial;
