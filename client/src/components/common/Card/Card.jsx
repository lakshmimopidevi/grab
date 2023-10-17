import React from 'react';
import classes from './Card.module.css';
import verified from '../../../assets/verified.png';
import { Button } from '../../common/index';

const Card = ({ data, imgPreview, show }) => {
	const {
		role,
		location,
		companyName,
		stipend,
		batch,
		description,
		link,
		image,
		category,
	} = data;

	return (
		<>
			{/* {category} */}
			<div className={classes.outer_container}>
				<details className={classes.inner_container}>
					<summary className={classes.data}>
						<div className={classes.extra_container}>
							<div className={classes.company_container}>
								{show ? (
									<div className={classes.company_img_container}>
										<img
											className={classes.company_image}
											src={imgPreview}
											alt="company_image"
										/>
									</div>
								) : (
									<div className={classes.company_img_container}>
										<img
											className={classes.company_image}
											src={`data:image/png;base64, ${image}`}
											alt="company_image"
										/>
									</div>
								)}

								<h1 className={classes.name}>{companyName}</h1>
							</div>
							<img className={classes.verified} src={verified} alt="verified" />
						</div>
						<div className={classes.tags}>
							<span className={classes.tag}>{role}</span>
							<span className={classes.tag}>{stipend}</span>
							<span className={classes.tag}>{batch}</span>
							<span className={classes.tag}>{location}</span>
						</div>
					</summary>
					<div className={classes.description}>{description}</div>
					<div className={classes.apply}>
						<Button link={link} bgColor="#7541C8" label="APPLY NOW" />
					</div>
				</details>
			</div>
		</>
	);
};

export default Card;
