const express = require('express');

const productRouter = require('./routes/productRoutes');
const cors = require('cors');
const categoryRouter = require('./routes/categoryRoutes')
const connectDatabase = require('./database/connection');
require('dotenv').config();




const app = express();

connectDatabase()

app.use(cors())
app.use(express.json())

app.use("/category", categoryRouter);
app.use("/products", productRouter);

app.all("*", (req, res) => {
    res.status(404).send("<h1 style ='color: red'> Page Not Found</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
});