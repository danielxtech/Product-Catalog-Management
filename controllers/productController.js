// controllers/productController.js

const Product = require("../models/Product");

// Create Product
const createProduct = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;

    const product = await Product.create({
      name,
      category,
      price,
      description
    });

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Products + Pagination
const getProducts = async (req, res) => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const totalProducts = await Product.countDocuments();

    res.json({
      currentPage: page,
      totalProducts,
      totalPages: Math.ceil(totalProducts / limit),
      products
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Product By ID
const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json(updatedProduct);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Search Products
const searchProducts = async (req, res) => {
  try {

    const { name, category } = req.query;

    let filter = {};

    if (name) {
      filter.name = {
        $regex: name,
        $options: "i"
      };
    }

    if (category) {
      filter.category = {
        $regex: category,
        $options: "i"
      };
    }

    const products = await Product.find(filter);

    res.json(products);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Aggregation Statistics
const productStats = async (req, res) => {
  try {

    const stats = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalProducts: {
            $sum: 1
          },
          averagePrice: {
            $avg: "$price"
          }
        }
      }
    ]);

    res.json(stats);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  productStats
};