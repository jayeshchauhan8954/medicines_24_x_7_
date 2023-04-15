const express = require('express');
require('./db/db.config');
const User = require('./db/User');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post('/signup', async (req, res) => {
	try {
		const { name, email, password, phone, role } = req.body;

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		const user = new User({
			name,
			email,
			password: hashedPassword,
			phone,
			role
		});
		await user.save();

		// Return the user details
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phone: user.phone,
			status: user.status,
			userId: user.userId
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

// For signin
app.post('/Login', async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find the user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// Check the password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// Generate a JWT token
		const token = jwt.sign({ userId: user.userId }, 'mysecretkey');

		// Return the token and user details
		res.json({
			token,
			_id: user.userId,
			name: user.name,
			email: user.email,
			phone: user.phone,
			role: user.role,
			status: user.status
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});
app.listen(8080);
