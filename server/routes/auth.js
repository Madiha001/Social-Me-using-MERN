const router = require("express").Router();
const User = require("../schemas/User");

router.get("/register", async (req,res) => {
    const user = await new User({
        username: "madi",
        email: "madi@gmail.com",
        password: "09876543"
        
    })
    await user.save();
    res.send("For testing purpose");
})

module.exports = router