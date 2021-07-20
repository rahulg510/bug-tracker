const router = require("express").Router();


router.get("/", (req,res)=>{
    res.send("inside users router");
})


module.exports = router;