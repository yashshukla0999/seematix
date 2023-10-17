const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect("connet with mngodb atlas", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const productRouter = require('./routes/products');
app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
