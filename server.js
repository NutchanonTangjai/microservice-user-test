const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Config
const { users , addUsers , findUser , updateData , deleteUser } = require('./api/users-api.js');
app.get('/users' , users);
app.post('/create' , addUsers);
app.get('/find/:name' , findUser)
app.put('/update/:id' , updateData)
app.delete('/delete/:id' , deleteUser)

const PORT = process.env.PORT || 4040;

app.get("/" , (req,res) => {
    res.send("Server is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})