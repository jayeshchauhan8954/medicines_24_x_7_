import React from 'react';
import './LoginAndSignup.css';
import Login from './../Login/Login';
import Signup from './../Signup/Signup';
import Homepage from './../Homepage/Homepage';
const LoginAndSignup = () => {
	return (
		<div className="LoginAndSignup">
			{/* <Homepage /> */}
			{/* <Login /> */}
			<Signup />
		</div>
	);
};

export default LoginAndSignup;
