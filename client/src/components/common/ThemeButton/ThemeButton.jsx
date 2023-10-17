import React from 'react';
import classes from './ThemeButton.module.css';

const ThemeButton = ({
	margin,
	children,
	onClick,
	label,
	disabled,
	// filled,
	padding = '8px 24px',
	fontSize = '18px',
	bgColor,
	link,
}) => {
	return (
		<>
			<button
				style={{
					margin: margin,
					padding: padding,
					fontSize: fontSize,
					backgroundColor: bgColor,
				}}
				className={classes.btn}
				onClick={onClick}
				disabled={disabled}
			>
				{label || children}
			</button>
		</>
	);
};

export default ThemeButton;
