const exress = require("express");
const app = exress();
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(5500, () => {
    console.log("Server is running on port 3000");
});