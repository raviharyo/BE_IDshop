import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js'



dotenv.config()
const app = express()

app.get("/", (req, res) => {
  res.json({message: 'server is running'})
});

app.get("/api/products", (req, res) => {
  res.json(products)
});

app.get('/api/products/:id', (req, res) => {
const product = products.find((product)=>product._id == req.params.id)
  res.json(product)
});

const port = process.env.APP_PORT || 8000;

app.listen(port, console.log(`Server running on port ${port} 🔥`));