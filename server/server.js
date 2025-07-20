const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    console.log("Server is running");

    const response = "Hello from the server!";
    res.json({ message: response });
});

app.get("/camping", (req, res) => {
    res.send("Camping is fun!");
});


const PORT = 5000;

app.listen(PORT, () =>console.log(`Server is running on port ${PORT}`));