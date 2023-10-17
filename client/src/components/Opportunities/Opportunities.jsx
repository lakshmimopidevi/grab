import React, { useState, useEffect } from 'react';
import classes from './Opportunities.module.css';
import { Button, Card, Loader } from '../common';
import http from '../../api';
import Swal from 'sweetalert2';

import ReactGA from 'react-ga4';
import ThemeButton from '../common/ThemeButton/ThemeButton';
import debounce from '../../helper/debounce';

const Opportunities = () => {
	const [jobData, setJobData] = useState(null);
	const [test, setTest] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		ReactGA.send('pageview');
		getData();
	}, []);

	const getData = async () => {
		try {
			http.get('/job/getJobs').then((response) => {
				const data = response.data.jobs;
				setLoading(false);
				setJobData(data);
				setTest(data);
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Unable to fetch the jobs',
				text: error,
			});
		}
	};

	const debouncedSearch = debounce(async (key) => {
			try {
				if (key) {
					let result = await http.get(`job/getJobs/${key}`);
					if (result) {
						setJobData(result.data.job);
					}
				} else {
					getData();
				}
			} catch (error) {
				Swal.fire({
					icon: 'error',
					title: 'Unable to search the jobs',
					text: error,
				});
			}
		}, 2500);

	const search = async (e) => {
		const key = e.target.value;
		debouncedSearch(key);
	};
	const filterData = async (filterBy) => {
		setJobData(test);
		const filteredData = test.filter((job) => {
			return job.category === filterBy;
		});
		setJobData(() => filteredData);
		console.log(filterBy, filteredData, jobData);
	};

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.search_filter}>
					<div>
						<ThemeButton onClick={() => filterData('jobs')} label="Jobs" />
						<ThemeButton
							onClick={() => filterData('hackathons')}
							label="Hackathons"
						/>
						<ThemeButton
							onClick={() => filterData('interns')}
							label="Interns"
						/>
						{/* <ThemeButton onClick={()=>filterData('Others')} label="Others" /> */}
					</div>
                    <div className={classes.base}>
					<div className={classes.searchbar_bg}>
						<input
							type="search"
							placeholder="Search here....."
							className={classes.search_bar}
							onChange={search}
						/>
						<i className="fa fa-search"></i>
					</div>
                  </div>
				</div>
				<h1 className={classes.text}>Opportunities</h1>
				{loading && (
					<div className={classes.loader}>
						<Loader />
					</div>
				)}
				{!loading && jobData.length ? (
					<div className={classes.cards}>
						{jobData.map((opp, i) => {
							return <Card data={opp} key={i} />;
						})}
					</div>
				) : (
					<></>
				)}
				{!loading && !jobData.length && (
					<div className={classes.cards}>
						<p className={classes.no_job}>Currently no opportunities found!</p>
					</div>
				)}
				{/* {jobData.length === 0 ? (
					<div className={classes.loader}>
						<Loader />
					</div>
				) : (
					<>
						<div className={classes.cards}>
							{jobData.length > 0 ? (
								jobData.map((opp, i) => {
									return <Card data={opp} key={i} />;
								})
							) : (
								<p className={classes.no_job}>Currently no jobs found!</p>
							)}
						</div>
					</>
				)} */}
			</div>
		</>
	);
};

export default Opportunities;
