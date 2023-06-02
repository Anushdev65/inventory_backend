const CategoryModel = require("../model/category")

const getAllCategory = async (req, res) => {
    console.log("getAllCategory function called");
    try {
        const categoryData = await CategoryModel.find();
        res.json(categoryData);
        console.log(categoryData)
    } catch (err) {
        res.json({
            message: "Error occured",
            data: Error
        });
    }
};


const getSingleCategory = async (req, res) => {
    try {
        const { categoryID } = req.params;
        const categoryData = await CategoryModel.findById(categoryID)
        res.json(categoryData);

    } catch (err) {
        res.json({
            message: "Error occured",
            data: err
        });
    }
};


const createCategory = async (req, res) => {
    try {
        const category = await CategoryModel.create(req.body)
        res.json({
            message: "Category created",
            data: category
        })
    } catch {
        res.json({
            message: "Error occured",
            data: Error
        });
    }
};


const updateCategory = async (req, res) => {
    try {
        const { categoryID } = req.params;
        const updatedCategory = await CategoryModel.findByIdAndUpdate(
            categoryID,
            req.body,
            { new: true }
        );
        res.json({
            message: "Data updated successfully",
            data: updatedCategory,
        });
    } catch (err) {
        res.json({
            message: "Error occured",
            data: err
        });
    }
};


const deleteCategory = async (req, res) => {
    try {
        const { categoryID } = req.params;
        const deleteCategory = await CategoryModel.findByIdAndDelete(categoryID);
        res.json({
            message: "Data deleted successfully",
            data: deleteCategory
        });

    } catch (err) {
        res.jsom({
            message: "Error occured",
            data: err,
        });
    }
};


module.exports = {
    getAllCategory,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};
