const router = require("express").Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
    let projects = await Project.find({owner: req.user.id}).lean();
    return res.json(projects);
});

router.post("/", async (req,res)=>{
    try {
        let project = await Project.create({
            name: req.body.name,
            description: req.body.description,
            owner: req.user.id,
            bugs: []
        })
        res.json(project);
    } catch (error) {
        console.error(error);
    }

})

module.exports = router;
