const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		registrationId: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		phone: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
			required: false,
		},
		qualification: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
	{
		collation: "UserRegistration",
	}
);

const UserRegistration = mongoose.model("registrations", userSchema);

module.exports = UserRegistration;
