const router = require("express").Router();
const Product = require("../models/products");

//POST request - create a new product
router.post("/products", async (req, res) => {
  try {
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.body.photo;
    product.photo = req.body.photo;
    product.stockQuantity = req.body.stockQuantity;

    await product.save();

    res.json({
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET request - get all products

//GET request - get a product

//PUT request - update a product

//DELETE request - delete a single product

module.exports = router;
