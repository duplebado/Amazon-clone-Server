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
router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();

    res.json({
      status: true,
      products: products,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET request - get a product
router.get("/product/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });

    res.json({
      status: true,
      product: product,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//PUT request - update a product

//DELETE request - delete a single product

module.exports = router;
