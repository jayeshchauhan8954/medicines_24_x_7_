const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/pharmacyFirst', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const userSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		password: String
	},
	{
		timestamps: true
	}
);

const User = new mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
	res.send('pharmacyFirst API');
});
// the below is for signup api
app.post('/signup', async (req, res) => {
	try {
		const { name, email, password } = req.body;
		// check if user already exist
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already Registered' });
		}
		// hash the password
		const hashedPassword = await bcrypt.hash(password, 12);
		const user = new User({
			name: name,
			email: email,
			password: hashedPassword
		});

		// create a new user
		await user.save();
		// return the user details
		res.status(201).json({
			name: user.name,
			email: user.email,
			password: user.password
		});
		// giving details of user back
		if (user) {
			res.send({ message: 'User Registed Successfully', user: user });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Internal Server Error'
		});
	}
});

// the below is for login api
app.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		// check the user by their email id
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ error: 'Invalid credentials' });
		}

		// Check the password is correct or not
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ error: 'Invalid Password' });
		}

		// Generating a JWT token
		const token = jwt.sign({ userId: user.userId }, 'lockthetime');
		// Return the token and user details
		res.json({
			token,
			_id: user.userId,
			name: user.name,
			email: user.email
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.listen(8080, () => {
	console.log('pharmacyFirst Backend server started at port : 8080!');
});
