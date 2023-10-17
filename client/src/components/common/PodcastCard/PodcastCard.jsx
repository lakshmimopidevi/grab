import React from 'react';
import classes from './PodcastCard.module.css';
import Button from '../Button/Button';

const PodcastCard = ({ podcast = {}, show, imgPreview }) => {
	const { name, image, title, link } = podcast;

	return (
		<>
			<div className={classes.podcast_card}>
				{show ? (
					<img
						className={classes.podcast_image}
						src={imgPreview}
						alt="youtube_header"
					/>
				) : (
					<img
						className={classes.podcast_image}
						src={`data:image/png;base64, ${image}`}
						alt="youtube_header"
					/>
				)}
				<h3 className={classes.podcast_name}>{title}</h3>
				<h4 className={classes.podcast_person}>{name}</h4>
				<div className={classes.separator}></div>
				<div className={classes.btn_container}>
					<Button link={link} label="Watch Video" bgColor="#7541C8" />
				</div>
			</div>
		</>
	);
};

export default PodcastCard;
