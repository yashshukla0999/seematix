const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://anshul831904:1234@cluster0.rton6oz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const productRouter = require('./routes/products');
app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
