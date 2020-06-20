const router = require("express").Router();
const Owner = require("../models/owner");
const { route } = require("./product");

//POST request
router.post("/owners", async (req, res) => {
  try {
    let owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.body.photo;

    await owner.save();

    res.json({
      success: true,
      message: "Successfully created a new owner",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET request
router.get("/owners", async (req, res) => {
  try {
    let owners = await Owner.find();

    res.json({
      sucess: true,
      owners: owners,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
