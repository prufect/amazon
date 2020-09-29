const router = require("express").Router();
const Product = require("../models/product");
const upload = require("../middlewares/upload-photo");

router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    let product = new Product();
    product.owner = req.body.ownerID;
    product.category = req.body.categoryID;
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.stockQuantity = req.body.stockQuantity;
    product.price = req.body.price;
    await product.save();

    res.json({
      success: true,
      message: "success",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find().populate("owner category").exec();

    res.json({
      success: true,
      products: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    res.json({
      success: true,
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.put("/products/:id", upload.single("photo"), async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.categoryID,
          photo: req.file.location,
          description: req.body.description,
          owner: req.body.ownerID,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updatedProduct: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOneAndDelete({ _id: req.params.id });
    if (product) {
      res.json({
        success: true,
        deletedProduct: product,
      });
    } else {
      throw `Failed to delete product with id ${req.params.id}`;
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
