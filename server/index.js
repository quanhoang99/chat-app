const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute=require('./Routes/userRoute')

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URL ;

app.listen(port, (req,res) => {
  console.log(`Server is running on port ...:${port}`);
})
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('MongoDB database connection established successfully');
}).catch(err => console.log(err));