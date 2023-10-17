import React from 'react';
import classes from './Team.module.css';
import Bhushan from '../../assets/Team/Bhushan.png';
import Sanyog from '../../assets/Team/Sanyog.png';
import Saurabh from '../../assets/Team/Saurabh.png';
import Sapna from '../../assets/Team/Sapna.png';
import Om from '../../assets/Team/Om.png';
import Unknown from '../../assets/Team/Unknown.png';

const Team = () => {
	return (
		<>
			<div className={classes.main}>
				<div className={classes.item}>
					<h1 className={classes.main_title}>The creative crew</h1>
				</div>
				<div className={`${classes.item}  ${classes.right_section}`}>
					<h2 className={classes.secondary_title}>Who we are</h2>
					<p className={classes.description}>
						We are a team of creatively diverse, driven, innovative individuals
						working in creating a community of GrabBit that can help you grab
						your dream job.
					</p>
				</div>
			</div>

			<div className={classes.team_members}>
				<a
					href="https://www.linkedin.com/in/bhushan-kale/"
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_5}`}
				>
					<img
						className={classes.img}
						id={classes.img_1}
						src={Bhushan}
						alt="Bhushan Kale"
					/>
					<span className={classes.position}>Bk Bhushan</span>
					<p className={classes.name}>Bhushan Kale</p>
				</a>

				<a
					href="https://www.linkedin.com/in/sanyog-mahajan-8288a7204/"
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_2}`}
				>
					<img
						className={classes.img}
						id={classes.img_2}
						src={Sanyog}
						alt="Sanyog Mahajan"
					/>
					<span className={classes.position}>Grabby</span>
					<p className={classes.name}>Sanyog Mahajan</p>
				</a>
				<a
					href="https://www.linkedin.com/in/saurabh-barde-5b617321a/"
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_3}`}
				>
					<img
						className={classes.img}
						id={classes.img_3}
						src={Saurabh}
						alt="Saurabh Barde"
					/>
					<span className={classes.position}>ThunderBolt</span>
					<p className={classes.name}>Saurabh Barde</p>
				</a>
				<a
					href="https://www.linkedin.com/in/sapna-kul-84453a215/"
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_4}`}
				>
					<img
						className={classes.img}
						id={classes.img_4}
						src={Sapna}
						alt="Sapna Kul"
					/>
					<span className={classes.position}>Dream</span>
					<p className={classes.name}>Sapna Kul</p>
				</a>
				<a
					href="https://www.linkedin.com/in/om-gawande/"
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_1}`}
				>
					<img
						className={classes.img}
						id={classes.img_5}
						src={Om}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Spider</span>
					<p className={classes.name}>Om Gawande</p>
				</a>
				<a
					href=""
					target="_blank"
					rel="noreferrer"
					className={`${classes.team} ${classes.member_6}`}
				>
					<img
						className={classes.img}
						id={classes.img_6}
						src={Unknown}
						alt="Unknown"
					/>
					<span className={classes.position}>Hiring Soon..!</span>
					<p className={classes.name}>May be You</p>
				</a>
			</div>
		</>
	);
};

export default Team;
