import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';
import convertToBase64 from '../../helper/convert';
import { registerUser } from '../../helper/helper';

// import styles from '../styles/Username.module.css';
import classes from './Register.module.css'

export default function Register() {
	const navigate = useNavigate();
	const [file, setFile] = useState();

	const formik = useFormik({
		initialValues: {
			email: 'doyol56239@cnogs.com',
			username: 'example123',
			password: 'admin@123',
		},
		validate: registerValidation,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			values = await Object.assign(values, { profile: file || '' });
			let registerPromise = registerUser(values);
			toast.promise(registerPromise, {
				loading: 'Creating...',
				success: <b>Register Successfully...!</b>,
				error: <b>Could not Register.</b>,
			});

			registerPromise.then(function () {
				navigate('/getstarted');
			});
		},
	});

	/** formik doensn't support file upload so we need to create this handler */
	const onUpload = async (e) => {
		const base64 = await convertToBase64(e.target.files[0]);
		setFile(base64);
	};

	return (
		<div className={classes.main}>
			<Toaster position="top-center" reverseOrder={false}></Toaster>

			<div className={classes.mainContainer}>
				<div className={classes.subContainer}>
					<div className={classes.headingSection}>
						<h4 className={classes.mainHeading}>Register</h4>
						<span className={classes.subHeading}>Happy to join you!</span>
					</div>

					<form className={classes.mainForm} onSubmit={formik.handleSubmit}>
						{/* <div className={classes.profileSection}>
							<label htmlFor="profile">
								<img
									src={file || avatar}
									className={classes.profile_img}
									alt="avatar"
								/>
							</label>

							<input
								onChange={onUpload}
								type="file"
								id="profile"
								name="profile"
							/>
						</div> */}

						<div className={classes.mainSection}>
							<div className={classes.inputField}>
								<input
									{...formik.getFieldProps('email')}
									placeholder="Email"
									type="text"
									className={classes.inputAns}
								/>
							</div>
							<div className={classes.inputField}>
								<input
									{...formik.getFieldProps('username')}
									type="text"
									className={classes.inputAns}
									placeholder="Username*"
								/>
							</div>
							<div className={classes.inputField}>
								<input
									className={classes.inputAns}
									{...formik.getFieldProps('password')}
									type="text"
									placeholder="Password*"
								/>
							</div>

							{/* <input
								{...formik.getFieldProps('email')}
								className={classes.textbox}
								type="text"
								placeholder="Email*"
							/>
							<input
								{...formik.getFieldProps('username')}
								className={classes.textbox}
								type="text"
								placeholder="Username*"
							/>
							<input
								{...formik.getFieldProps('password')}
								className={classes.textbox}
								type="text"
								placeholder="Password*"
							/> */}
							<button className={classes.btn} type="submit">
								<span>Register</span>
							</button>
						</div>

						{/* <div className="text-center py-4">
							<span className="text-gray-500">
								Already Register?{' '}
								<Link className="text-red-500" to="/">
									Login Now
								</Link>
							</span>
						</div> */}
						<div className={classes.registerSection}>
							<span className={classes.registerHeading}>
								Already Register?{' '}
								<Link className={classes.registerLink} to="/">
									Login Now
								</Link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
