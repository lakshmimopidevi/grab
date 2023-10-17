import React, { useState } from 'react';
import classes from './PostPodcast.module.css';
import { Button, Input, PodcastCard } from '../../common';
import http from '../../../api';
import Swal from 'sweetalert2';

const PostPodcast = () => {
	const [img, setImg] = useState(null);
	const [imgPreview, setImgPreview] = useState(null);
	const [podcast, setPodcast] = useState({
		name: '',
		title: '',
		link: '',
	});

	const { name, title, link } = podcast;

	const onChangeHandler = (e) => {
		setPodcast({
			...podcast,
			[e.target.name]: e.target.value,
		});
	};

	const onImageChange = (e) => {
		const [file] = e.target.files;
		setImgPreview(URL.createObjectURL(file));
		setImg(e.target.files);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		if (name === '' || title === '' || link === '') {
			// AlertContext.setAlert("Please enter all fields", "danger"); add a state
			alert('Please fill all  the fields');
		} else {
			const dataArray = new FormData();
			dataArray.append('name', name);
			dataArray.append('title', title);
			dataArray.append('link', link);
			dataArray.append('image', img['0'], img['0'].name);
			try {
				http.post('/podcast/createPodcast', dataArray).then(
					() => {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Podcast Created Succesfully',
							showConfirmButton: false,
							timer: 1500,
						});
					},
					(error) => {
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: error,
						});
					}
				);
			} catch (error) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: error,
				});
			}
		}
		setPodcast({
			name: '',
			title: '',
			link: '',
		});
		setImg(null);
		setImgPreview(null);
	};

	const deleteAllPodcasts = async () => {
		try {
			http.delete('/podcast/deletePodcasts');
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'All podcasts are deleted',
				showConfirmButton: false,
				timer: 1500,
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Unable to delete the contacts',
				text: error,
			});
		}
	};

	return (
		<>
			<h2 className={classes.heading}>Post a Podcast</h2>
			<Button label="Delete All Podcasts" onClick={deleteAllPodcasts} />

			<form className={classes.form} onSubmit={submitHandler}>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={name}
					label="Name"
					name="name"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={title}
					label="Title"
					name="title"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={link}
					label="Youtbe Link"
					name="link"
					required
				/>
				<input
					className={classes.custom_file_input}
					type="file"
					onChange={onImageChange}
					// name="image"
				/>
				<Button label="Create" />
			</form>
			<PodcastCard data={podcast} show="true" imgPreview={imgPreview} />
		</>
	);
};

export default PostPodcast;
