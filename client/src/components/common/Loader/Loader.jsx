import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
	return (
		<>
			<div className={classes.three_body}>
				<div className={classes.three_body__dot}></div>
				<div className={classes.three_body__dot}></div>
				<div className={classes.three_body__dot}></div>
			</div>
		</>
	);
};

export default Loader;
