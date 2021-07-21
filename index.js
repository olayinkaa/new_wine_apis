const express = require('express');
var cors = require('cors')
const dotenv = require("dotenv");
const connectDB = require('./src/config/db.js');
const restRouter = require('./src/route/index.js');
dotenv.config();
const PORT = process.env.PORT;
connectDB();

const app = express();
app.use(express.json({ extended: false}));
app.use(cors());

app.use('/api/newwine',restRouter);

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));
