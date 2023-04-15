import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
	const [ user, setUser ] = useState({
		name: '',
		email: '',
		password: '',
		reEnterPassword: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value
		});
	};

	return (
		<div className="signup">
			<h1>Login</h1>
			<input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange} />
			<input
				type="email"
				name="email"
				value={user.email}
				placeholder="Enter your Email"
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				value={user.password}
				placeholder="Enter your Password"
				onChange={handleChange}
			/>
			<input
				type="password"
				name="reEnterPassword"
				value={user.reEnterPassword}
				placeholder="Re-enter your Password"
				onChange={handleChange}
			/>
			<div className="button">Register</div>
			<div>or</div>
			<div className="button">Login</div>
		</div>
	);
};

export default Signup;
