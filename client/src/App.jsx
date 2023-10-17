import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	Contact,
	Footer,
	Navbar,
	Team,
	Opportunities,
	Hidden,
	Podcast,
} from './components';
import { Popup } from './components/common';
import Grabby from './components/common/Grabby/Grabby';
import { FourOhFour } from './pages/FourOhFour/FourOhFour';
import ReactGA from 'react-ga4';
import { Homepage, Login, Signup } from './pages';

/** import all components */
import Username from './components/Username/Username';
import Password from './components/Password/Password';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Recovery from './components/Recovery/Recovery';
import Reset from './components/Reset/Reset';
import PageNotFound from './components/PageNotFound/PageNotFound';
import GoToTop from './components/GoToTop';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth';

ReactGA.initialize('G-PG8HC34H6V');

const App = () => {
	return (
		<>
			{/* <div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					gap: '50px',
					margin: '100px 0',
				}}
			> */}
			<GoToTop />
			<Popup />
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/team" element={<Team />} />
				<Route path="/opportunities" element={<Opportunities />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/podcasts" element={<Podcast />} />
				<Route path="/hidden" element={<Hidden />} />
				<Route path="/resources" element={<Hidden />} />
				<Route path="/grabby" element={<Grabby />} />
				{/* <Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} /> */}
				{/* <Route path="*" element={<FourOhFour />} /> */}
				{/* login trial */}
				<Route path="/register" element={<Register />} />
				<Route path="/getstarted" element={<Username />} />
				<Route
					path="/password"
					element={
						<ProtectRoute>
							<Password />
						</ProtectRoute>
					}
				/>
				<Route
					path="/profile"
					element={
						<AuthorizeUser>
							<Profile />
						</AuthorizeUser>
					}
				/>
				<Route path="/recovery" element={<Recovery />} />
				<Route path="/reset" element={<Reset />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
			{/* <Input />
			<Button label="Search for Jobs" />*/}
			{/* <Card /> */}
			{/* </div> */}
		</>
	);
};

export default App;
