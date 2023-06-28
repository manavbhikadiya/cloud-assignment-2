const ProductService = require("../services/productService");

exports.storeProducts = async (req, res) => {
  try {
    const response = await ProductService.storeProducts(req.body.products);
    if (!response.error) {
      const responseMessage = {
        message: "Success.",
      };
      res.json(responseMessage);
    }
  } catch (error) {
    const errorMessage = {
      message: "Internal Server Error.",
      error: error,
    };
    res.status(500).send(errorMessage);
  }
};

exports.listProducts = async (req, res) => {
  try {
    const response = await ProductService.listProducts();
    if (!response.error) {
      const responseMessage = {
        products: response,
      };
      res.json(responseMessage);
    }
  } catch (error) {
    const errorMessage = {
      message: "Internal Server Error.",
      error: error,
    };
    res.status(500).send(errorMessage);
  }
};
