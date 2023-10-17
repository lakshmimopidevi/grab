import React, { useState } from 'react';
import classes from './PostJob.module.css';
import { Button, Card, Input, Textarea } from '../../common';
import http from '../../../api';
import Swal from 'sweetalert2';

const PostJob = () => {
	const [img, setImg] = useState(null);
	const [imgPreview, setImgPreview] = useState(null);
	const [job, setJob] = useState({
		role: '',
		location: '',
		stipend: '',
		companyName: '',
		batch: '',
		description: '',
		link: '',
		category: '',
	});

	const {
		role,
		location,
		stipend,
		companyName,
		batch,
		description,
		link,
		category,
	} = job;

	const onChangeHandler = (e) => {
		setJob({
			...job,
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
		if (
			role === '' ||
			location === '' ||
			stipend === '' ||
			companyName === '' ||
			batch === '' ||
			description === '' ||
			category === '' ||
			link === ''
		) {
			// AlertContext.setAlert("Please enter all fields", "danger"); add a state
			alert('Please fill all  the fields');
		} else {
			const dataArray = new FormData();
			dataArray.append('role', role);
			dataArray.append('location', location);
			dataArray.append('stipend', stipend);
			dataArray.append('companyName', companyName);
			dataArray.append('batch', batch);
			dataArray.append('description', description);
			dataArray.append('link', link);
			dataArray.append('category', category);
			dataArray.append('image', img['0'], img['0'].name);
			try {
				http.post('/job/createJob', dataArray).then(
					() => {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Job Created Succesfully',
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
		setJob({
			role: '',
			location: '',
			stipend: '',
			companyName: '',
			batch: '',
			description: '',
			category: '',
			link: '',
		});
		setImg(null);
		setImgPreview(null);
	};

	const deleteAllJobs = async () => {
		try {
			http.delete('/job/deleteJobs');
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'All jobs are deleted',
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
			<h2 className={classes.heading}>Post a Job</h2>
			<Button label="Delete All Jobs" onClick={deleteAllJobs} />

			<form className={classes.form} onSubmit={submitHandler}>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={role}
					label="Role"
					name="role"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={location}
					label="Location"
					name="location"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={companyName}
					label="Company Name"
					name="companyName"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={stipend}
					label="Stipend"
					name="stipend"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={batch}
					label="Batch"
					name="batch"
					required
				/>
				<Textarea
					onChange={onChangeHandler}
					type="text"
					value={description}
					label="Description"
					name="description"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={link}
					label="Link"
					name="link"
					required
				/>
				<div>
					<label htmlFor="dropdown">Select an option:</label>
					<select
						id="dropdown"
						name="category"
						value={category}
						onChange={onChangeHandler}
					>
						<option value="">Select an option</option>
						<option value="jobs">Job</option>
						<option value="interns">Internship</option>
						<option value="hackathons">Hackathon</option>
					</select>
					<p>You selected {job.category}</p>
				</div>
				<input
					className={classes.custom_file_input}
					type="file"
					onChange={onImageChange}
					// name="image"
				/>
				<Button label="Create" />
			</form>
			<Card data={job} show="true" imgPreview={imgPreview} />
		</>
	);
};

export default PostJob;
