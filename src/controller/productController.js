const productService = require("../service/product.js");

async function getAllproduct(req, res) {
  try {
    const rows = await productService.getAllproduct();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Eror getting products",
      body: error.message,
    });
  }
}

module.exports = {
  getAllproduct,
};
