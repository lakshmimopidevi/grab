import React from 'react';
import classes from './Textarea.module.css';

const Textarea = ({
	value,
	label = 'Undefined',
	reference,
	name,
	// placeholder = 'und',
	type = 'text',
	onChange,
	required = 'required',
	error = '',
}) => {
	return (
		<>
			<div className={classes.textarea_group}>
				<textarea
					autoComplete="off"
					ref={reference}
					type={type}
					value={value}
					name={name}
					className={classes.textarea}
					// placeholder={placeholder}
					required={required}
					onChange={onChange}
				/>
				<label className={classes.user_label}>{label}</label>
				{error && (
					<p className={classes.error}>
						{/* <img className={classes.errorpng} src={errorpng} alt="error" /> */}
						{error}
					</p>
				)}
			</div>
		</>
	);
};

export default Textarea;
