import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = ({ setLoginUser }) => {
	return (
		<div>
			<div className="homepage">
				<h1>Hello homepage</h1>
				<Link to="/login" className="linkTag">
					<div className="button" onClick={() => setLoginUser({})}>
						Logout
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
