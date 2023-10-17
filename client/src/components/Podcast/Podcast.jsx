import React, { useState, useEffect } from 'react';
import classes from './Podcast.module.css';
import { Button } from '../common/index';
import { PodcastCard } from '../common/index';
import { Loader } from '../common/index';
import http from '../../api';
import Swal from 'sweetalert2';
import videoFile from '../../assets/logo.mp4';

const Podcast = () => {
	const [podcastData, setPodcastData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			http.get('/podcast/getPodcasts').then((response) => {
				const data = response.data.podcasts;
				setPodcastData(data);
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Unable to fetch the podcasts',
				text: error,
			});
		}
	};
	return (
		<>
			{/* <video autoPlay muted loop id={classes.background_video}>
				<source src={videoFile} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className={classes.podcast_section}>
				<h1 className={classes.heading}>PODCASTS DESIGNED TO HELP YOU GROW</h1>
				<h3 className={classes.subheading}>
					Super practical courses, with a no-nonsense approach, that are
					designed to help you take life decisions from a point of awareness.
					And not ignorance.
				</h3>
				<Button bgColor="#fff" color="#000" label="Explore" />
			</div> */}

			<div className={classes.podcastLandingSection}>
				<div className={classes.overlay}></div>
				<video autoPlay loop muted id={classes.backgroundVideo}>
					<source src={videoFile} type="video/mp4"/>
					Your browser does not support the video tag.
				</video>
				<div className={classes.sectionContent}>
					<div>
						<h1 className={classes.heading}>PODCASTS DESIGNED TO HELP YOU GROW</h1>
						<h3 className={classes.subheading}>
							Super practical courses, with a no-nonsense approach, that are
							designed to help you take life decisions from a point of awareness.
							And not ignorance.
						</h3>
					</div>
					<Button bgColor="#fff" color="#000" label="Explore" />
				</div>
			</div>
			<div>
				<h2 className={classes.podcast_heading}>
					Current Podcasts
				</h2>
				<div className={classes.podcast_card_container}>
					{podcastData.length > 0 ? (
						podcastData.map((podcast, i) => {
							return <PodcastCard key={i} podcast={podcast} />;
						})
					) : (
						<Loader />
					)}
				</div>
			</div>
			<div>
				<h2 className={classes.podcast_heading}>
					Upcoming Podcasts
				</h2>
				<div className={classes.podcast_card_container}>
					{podcastData.length > 0 ? (
						podcastData.map((podcast, i) => {
							return "No videos found";
						})
					) : (
						<Loader />
					)}
				</div>
			</div>
		</>
	);
};

export default Podcast;
