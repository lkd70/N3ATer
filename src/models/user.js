import bcrypt from 'bcrypt';
import isEmail from 'validator/lib/isEmail';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		validate: [ isEmail, 'No valid email address provided.' ],
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
		maxlength: 42,
	},
	role: {
		type: String,
	},
	private_key: {
		type: String,
		default: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
	},
	public_key: {
		type: String,
		default: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
	}
});

userSchema.statics.findByLogin = async function (login) {
	let user = await this.findOne({
		username: login,
	});

	if (!user) {
		user = await this.findOne({ email: login });
	}

	return user;
};

userSchema.pre('remove', function (next) {
	this.model('Account').deleteMany({ userId: this._id }, next);
});

userSchema.pre('save', async function () {
	this.password = await this.generatePasswordHash();
});

userSchema.methods.generatePasswordHash = function () {
	const saltRounds = 10;
	return bcrypt.hash(this.password, saltRounds);
};

userSchema.methods.validatePassword = function (password) {
	return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
