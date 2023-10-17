import React from 'react';
import classes from './Highlights.module.css';
import { HighlightsData } from '../../assets/Data/HighlightsData';
import { Ticket } from '../common';

const Highlights = () => {
	return (
		<>
			<div className={classes.border}>
				<div className={classes.highlights}>
					{HighlightsData.map((highlights, i) => {
						return <Ticket data={highlights} key={i} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Highlights;
