const User = require("../models/User");

async function UserInfo(req, res, next) {
	const userId = req.user.sub;
	try {
		let user = await User.findOne({ userId }).populate('projects').lean();
		if (!user) {
			user = await User.create({
				userId,
				projects: [],
			});
		}
		console.log(user);
		req.user.id = user._id;
		req.user.projects = user.projects;
	} catch (err) {
		console.error(err);
	}

	next();
}

module.exports = UserInfo;
