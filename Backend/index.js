const express = require("express");
require("./db/db.config");
const User = require("./db/User");
const UserRegistration = require("./model/UserRegistration");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
const { ObjectId } = require("bson");
const multer = require("multer");

// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Set up multer for handling file uploads
const storage = multer.diskStorage({
	destination(req, file, callback) {
		callback(null, "uploads");
	},
	filename(req, file, callback) {
		callback(null, `${Date.now()}-${file.originalname}`);
	},
});
const upload = multer({ storage });

// registration api
app.post(
	"/regsitration",
	// upload.single("profilePicture"),
	async (req, res) => {
		try {
			const {
				registrationId,
				name,
				email,
				phone,
				age,
				address,
				qualification,
			} = req.body;
			const user = new UserRegistration({
				registrationId,
				name,
				email,
				phone,
				age: Number(age),
				address,
				qualification,
				// profilePicture: req.file.filename,
			});
			await user.save();
			res.status(201).json({ message: "User created successfully", user });
		} catch (err) {
			res.status(400).json({ error: err.message });
		}
	}
);

app.get("/userdash", async (req, res) => {
	try {
		const users = await User.findOne();
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.use("/uploads", express.static("uploads"));
app.use(upload.single("profilePicture"));

app.post("/signup", async (req, res) => {
	try {
		const { name, email, password, phone, role } = req.body;

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		const user = new User({
			name,
			email,
			password: hashedPassword,
			phone,
			role,
		});
		await user.save();

		// Return the user details
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phone: user.phone,
			status: user.status,
			userId: user.userId,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// For signin
app.post("/Login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find the user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		// Check the password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		// Generate a JWT token
		const token = jwt.sign({ userId: user.userId }, "mysecretkey");

		// Return the token and user details
		res.json({
			token,
			_id: user.userId,
			name: user.name,
			email: user.email,
			phone: user.phone,
			role: user.role,
			status: user.status,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// Route to fetch all pending user registration requests
app.get("/pending", async (req, res) => {
	try {
		const users = await User.find({ status: "pending" });
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.get("/approved", async (req, res) => {
	try {
		const users = await User.find({ status: "approved" });
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// get user by email - registration collection
app.get("/users/reg/:registrationId", async (req, res) => {
	try {
		const user = await UserRegistration.findOne({
			registrationId: req.params.registrationId,
		}).lean();
		if (!user) {
			res.status(404).json({ message: "User not found" });
			return;
		}
		const { _id, ...rest } = user;
		const userWithTimestamp = {
			...rest,
			timestamp: _id.getTimestamp(),
		};
		res.json(userWithTimestamp);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// get user by email - User collection

app.get("/users/:email", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.params.email });
		if (!user) {
			res.status(404).json({ message: "User not found" });
			return;
		}
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Route to approve a user registration request
app.put("/users/approve/:userId", async (req, res) => {
	try {
		const updatedUser = await User.findOneAndUpdate(
			{ userId: req.params.userId },
			{ status: "approved" },
			{ new: true }
		);
		res.json(updatedUser);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.delete("/users/:userId", async (req, res) => {
	try {
		const user = await User.findOneAndDelete(req.params.userId);
		console.log(user);

		res.json({
			message: "Successfully deleted",
			user: user,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.listen(8080);
