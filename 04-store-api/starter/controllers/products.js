const Product = require("../models/product");

const getALLProductsStatic = async (req, res) => {
  const search = "a";

  const products = await Product.find({}).sort("name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getALLProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObject);
  if (sort) {
    console.log(sort);
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getALLProducts,
  getALLProductsStatic,
};
