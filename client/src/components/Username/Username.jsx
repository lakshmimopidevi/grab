import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import avatar from '../../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../helper/validate';
import { useAuthStore } from '../../store/store';

// import styles from '../styles/Username.module.css';
import classes from './Username.module.css'

const Username = () => {
	const navigate = useNavigate();
	const setUsername = useAuthStore((state) => state.setUsername);

	const formik = useFormik({
		initialValues: {
			username: 'example123',
		},
		validate: usernameValidate,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			setUsername(values.username);
			navigate('/password');
		},
	});

	return (
		<div className={classes.main}>
			<Toaster position="top-center" reverseOrder={false}></Toaster>

			<div className={classes.mainContainer}>
				<div className={classes.subContainer}>
					<div className={classes.headingSection}>
						<h4 className={classes.mainHeading}>Hello Again!</h4>
						<span className={classes.subHeading}>
							Explore More by connecting with us.
						</span>
					</div>

					<form className={classes.mainForm} onSubmit={formik.handleSubmit}>
						{/* <div className="profile flex justify-center py-4">
							<img src={avatar} className={classes.profile_img} alt="avatar" />
						</div> */}

						<div className={classes.mainSection}>
							<div className={classes.inputField}>
								<input
									{...formik.getFieldProps('username')}
									placeholder="Username"
									type="text"
									className={classes.inputAns}
								/>
							</div>
							<button className={classes.btn} type="submit">
								<span>Let&apos;s Go</span>
							</button>
						</div>

						<div className={classes.registerSection}>
							<span className={classes.registerHeading}>
								Not a Member?{' '}
								<Link className={classes.registerLink} to="/register">
									Register Now
								</Link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Username;
