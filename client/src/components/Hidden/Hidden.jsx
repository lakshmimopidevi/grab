import React from 'react';
import Contacts from './Contacts/Contacts';
import classes from './Hidden.module.css';
import PostJob from './PostJob/PostJob';
import PostPodcast from './PostPodcast/PostPodcast';

const Hidden = () => {
	return (
		<>
			<div className={classes.hidden}>
				<PostJob />
				<PostPodcast />
				<Contacts />
			</div>
		</>
	);
};

export default Hidden;
