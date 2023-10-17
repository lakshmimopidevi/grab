import React, { useEffect } from 'react';
import Highlights from '../components/Highlights/Highlights';
import Faq from '../components/Faq/Faq';
import { Landing } from '../components';
import Testimonial from '../components/Testimonials/Testimonial';
import { About } from '../components/About/About';
import Extra from '../components/Extra/Extra';

import ReactGA from 'react-ga4';

const Homepage = () => {
	useEffect(() => {
		ReactGA.send('pageview');
	}, []);
	return (
		<>
			<Landing />
			<Highlights />
			<Extra />
			<About />
			<Faq />

			{/* <Swiper /> */}
			{/* <Testimonial /> */}
		</>
	);
};

export default Homepage;
