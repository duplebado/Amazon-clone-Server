const router = require("express").Router();
const Address = require("../models/address");
const verifyToken = require("../middlewares/verify-token");
const axios = require("axios");

//POST request
router.post("/address", verifyToken, async (req, res) => {
  try {
    const address = new Address();

    address.user = req.decoded._id;
    address.country = req.body.country;
    address.fullName = req.body.fullName;
    address.streetAddress = req.body.streetAddress;
    address.city = req.body.city;
    address.state = req.body.state;
    address.zipCode = req.body.zipCode;
    address.phoneNumber = req.body.phoneNumber;
    address.deliverInstructions = req.body.deliverInstructions;
    address.securityCode = req.body.securityCode;

    await address.save();

    res.json({
      success: true,
      message: "Successfully added an address ",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET all Addresses
router.get("/addresses", verifyToken, async (req, res) => {
  try {
    let addresses = await Address.find({ user: req.decoded._id });

    if (response) {
      res.json({
        success: true,
        addresses: addresses,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET all Addresses
router.get("/countries", async (req, res) => {
  try {
    let response = await axios.get("https://restCountries.eu/rest/v2/all");

    if (response) {
      res.json({
        success: true,
        countries: response.data,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
