import React from 'react';
import './LoginAndSignup.css';
import Login from './../Login/Login';
import Signup from './../Signup/Signup';
import Homepage from './../Homepage/Homepage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const LoginAndSignup = () => {
	const [ user, setLoginUser ] = useState({});

	return (
		<div className="LoginAndSignup">
			<Router>
				<Routes>
					{/* <Route
						exact
						path="/"
						element={
							user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
						}
					/> */}
					<Route exact path="/" element={<Homepage setLoginUser={setLoginUser} />} />
					<Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
					<Route exact path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</div>
	);
};

export default LoginAndSignup;
