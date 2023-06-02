const ProductModel = require("../model/products");

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json(products)
        // req.productData = products;

    } catch (err) {
        res.json({
            message: 'Error occurred',
            data: err
        });
    }
};

const getSingleProduct = async (req, res) => {
    const { productID } = req.params;
    const productData = await ProductModel.findById(productID);
    res.json(productData);
};

const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body)
        res.json({
            message: "Data saved successfully",
            data: product
        });
    } catch (err) {
        res.json({
            message: "Error occured",
            data: err
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const updatedProduct = await ProductModel.findByIdAndUpdate(productID, req.body, { new: true })
        res.json({
            message: "Data updated successfully",
            data: updatedProduct
        })
    } catch (err) {
        res.json({
            message: "Error occured",
            data: err
        });
    }
};

const replaceProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const replaceProduct = await ProductModel.findOneAndReplace(
            { _id: productID }, req.body, { new: true })
        res.json({
            message: "Data replaced successfully",
            data: replaceProduct,
        })
    } catch (err) {
        res.json({
            message: "Error occured",
            data: err
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const deleteProduct = await ProductModel.findByIdAndDelete(productID);
        res.json({
            message: "Data deleted successfully",
            data: deleteProduct
        })
    } catch (err) {
        res.json({
            message: "Error occured",
            data: err
        });
    }
};

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    replaceProduct,
    deleteProduct
}