import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
	const navigate = useNavigate();
	const [ user, setUser ] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value
		});
	};

	// const login = () => {
	// 	axios.post('http://localhost:8080/login', user).then((error) => alert(error.data.error));
	// };

	const login = () => {
		axios
			.post('http://localhost:8080/login', user)
			.then((res) => {
				// Proceed with the successful login
				alert('Login successfully');
				// setLoginUser(user);
				navigate('/');
			})
			.catch((error) => {
				// Show an alert message to the user
				alert(error.res.data.error);
			});
	};

	return (
		<div className="login">
			<h1>Login</h1>
			<input
				type="email"
				name="email"
				value={user.email}
				onChange={handleChange}
				placeholder="Enter your Email"
			/>
			<input
				type="password"
				name="password"
				value={user.password}
				onChange={handleChange}
				placeholder="Enter your Password"
			/>
			<div className="button" onClick={login}>
				Login
			</div>
			<div>or</div>
			<div className="button" onClick={() => navigate('/signup')}>
				Register
			</div>
		</div>
	);
};

export default Login;
