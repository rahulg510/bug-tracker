const router = require("express").Router();
const Project = require("../models/Project");
const User = require("../models/User");

router.get("/", async (req, res) => {
	let projects = await Project.find({ owner: req.user.sub}).lean();
	return res.json(projects);
});

router.post("/", async (req, res) => {
	try {
		let project = await Project.create({
			name: req.body.name,
			description: req.body.description,
			owner: req.user.sub,
			bugs: [],
			openBugs: 0
		});

		res.json(project);
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
