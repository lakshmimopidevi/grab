import React from 'react';
import classes from './Ticket.module.css';

const Ticket = ({ data }) => {
	const { link, image, name, bgColor } = data;
	return (
		<>
			<a
				className={classes.card}
				href={link}
				target="_blank"
				rel="noreferrer noopener"
				style={{ background: bgColor }}
			>
				<img className={classes.image} src={image} alt="" />
				<h2 className={classes.name}>{name}</h2>
			</a>
		</>
	);
};

export default Ticket;
