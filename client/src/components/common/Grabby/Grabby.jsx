import React from 'react';
import classes from './Grabby.module.css';

const Grabby = () => {
	return (
		<>
			<div className={classes.grabby}>
				<svg
					className={classes.svg}
					width="449"
					height="544"
					viewBox="0 0 449 544"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="Group 26" filter="url(#filter0_d_1256_4150)">
						<g id={classes.rectangle}>
							<rect
								id="Rectangle 33"
								x="7"
								y="15.2778"
								width="435"
								height="69.9221"
								rx="8.7395"
								fill="white"
							/>
						</g>
						<g id={classes.trapezium}>
							<path
								id="Rectangle 34"
								d="M130.582 409.543C127.806 409.543 125.733 406.988 126.307 404.271L169.851 197.956C170.277 195.935 172.061 194.489 174.126 194.489H270.678C272.713 194.489 274.478 195.893 274.936 197.876L322.571 404.191C323.204 406.929 321.124 409.543 318.314 409.543H130.582Z"
								fill="white"
							/>
						</g>
						<g id={classes.ellipse}>
							<path
								id="ellipse_2"
								d="M126.414 94.3066C126.414 106.691 128.943 118.954 133.857 130.396C138.771 141.838 145.974 152.234 155.054 160.992C164.134 169.749 174.914 176.695 186.777 181.435C198.641 186.174 211.356 188.613 224.198 188.613C237.039 188.613 249.754 186.174 261.618 181.435C273.481 176.695 284.261 169.749 293.341 160.992C302.421 152.234 309.624 141.838 314.538 130.396C319.452 118.954 321.981 106.691 321.981 94.3066L224.198 94.3066L126.414 94.3066Z"
								fill="white"
							/>
						</g>
						<g id={classes.triangle}>
							<path
								id="triangle_2"
								d="M227.91 535.141C226.161 537.325 222.838 537.325 221.089 535.141L130.995 422.668C128.704 419.807 130.74 415.566 134.406 415.566L314.593 415.566C318.258 415.566 320.295 419.807 318.003 422.668L227.91 535.141Z"
								fill="white"
							/>
						</g>
						<g id={classes.line}>
							<path
								id="line_2"
								d="M135.18 362.326L142.797 328.647L288.199 256.736L295.64 284.911L216.772 323.443L135.18 362.326Z"
								fill="#000F19"
								stroke="#000F19"
							/>
						</g>
						<g id={classes.lefteye}>
							<g id="Ellipse 14">
								{/* <ellipse
									cx="185.208"
									cy="123.104"
									rx="11.2759"
									ry="10.875"
									fill="white"
								/>
								<ellipse
									cx="185.208"
									cy="123.104"
									rx="11.2759"
									ry="10.875"
									fill="white"
								/> */}
								<ellipse
									cx="185.208"
									cy="123.104"
									rx="11.2759"
									ry="10.875"
									fill="black"
								/>
							</g>
						</g>
						<g id={classes.righteye}>
							<g id="Ellipse 15">
								{/* <ellipse
									cx="270.103"
									cy="122.717"
									rx="10.875"
									ry="10.4883"
									fill="white"
								/>
								<ellipse
									cx="270.103"
									cy="122.717"
									rx="10.875"
									ry="10.4883"
									fill="white"
								/> */}
								<ellipse
									cx="270.103"
									cy="122.717"
									rx="10.875"
									ry="10.4883"
									fill="black"
								/>
							</g>
						</g>
					</g>
					<defs>
						<filter
							id="filter0_d_1256_4150"
							x="0"
							y="8.27783"
							width="449"
							height="535.501"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset />
							<feGaussianBlur stdDeviation="3.5" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_1256_4150"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_1256_4150"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</div>
		</>
	);
};

export default Grabby;
