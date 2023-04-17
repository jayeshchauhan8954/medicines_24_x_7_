import React from 'react';
import './Homepage.css';

const Homepage = ({ setLoginUser }) => {
	return (
		<div>
			<div className="homepage">
				<h1>Hello homepage</h1>
				<div className="button" onClick={() => setLoginUser({})}>
					Logout
				</div>
			</div>
		</div>
	);
};

export default Homepage;
