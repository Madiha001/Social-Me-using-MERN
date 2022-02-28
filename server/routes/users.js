const router = require("express").Router();

router.get("/", (req,res) => {
    res.send("Welcome to user Route!!!")
})

module.exports = router