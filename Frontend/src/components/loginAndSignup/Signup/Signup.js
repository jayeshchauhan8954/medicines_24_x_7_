import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();
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

	const signup = async () => {
		const { name, email, password, reEnterPassword } = user;
		if (name && email && password && password === reEnterPassword) {
			try {
				const res = await axios.post('http://localhost:8080/signup', user);
				console.log(res);
				if (res.data.message === 'User already Registered') {
					alert('User already registered');
				} else {
					alert(res.data.message);
					navigate('/');
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			alert('Invalid input');
		}
	};

	return (
		<div className="signup">
			<h1>Signup</h1>
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
			<div className="button" onClick={signup}>
				Register
			</div>
			<div>or</div>
			<div className="button" onClick={() => navigate('/login')}>
				Login
			</div>
		</div>
	);
};

export default Signup;
