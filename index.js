//Init Express
const express = require("express");

//init body-parser
const bodyParser = require("body-parser");

//gunakan express
const app = express();

//Define Port
const port = 5001;

app.use(bodyParser.json());

//import router
const router = require("./routes");

app.use("/api/v1", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
