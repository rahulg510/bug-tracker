const User = require("../models/User");

async function UserInfo(req, res, next) {
	const userId = req.user.sub;
	try {
		let user = await User.findOne({ userId }).lean();
		if (user) {
			req.user.id = user._id;
		} else {
			let newUser = await User.create({
				userId,
				projects: [],
			});
			req.user.id = newUser._id;
		}
	} catch (err) {
		console.error(err);
	}

	next();
}

module.exports = UserInfo;
