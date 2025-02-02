const express = require("express");
const connectDB = require("./config/db");
const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
