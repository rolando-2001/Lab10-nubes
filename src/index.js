const express = require("express");
const cors = require("cors");
const RouterUser = require("../src/router/router.user.js");
const connectDB = require("./database/db.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', RouterUser); 

app.get('/', (req, res) => {
    res.json("Index"); 
});



const PORT = 8000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await connectDB();
});
