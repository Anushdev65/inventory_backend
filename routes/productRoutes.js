const express = require('express');
const router = express.Router();


const {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    replaceProduct,
    deleteProduct } = require('../controllers/product');





router.get("/", getAllProducts);

router.get("/:productID", getSingleProduct);

router.post("/", createProduct);

router.put("/:productID", replaceProduct);

router.patch("/:productID", updateProduct);

router.delete("/:productID", deleteProduct);







module.exports = router;