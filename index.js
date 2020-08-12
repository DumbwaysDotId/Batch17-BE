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
//const router = require("./routes");
const routerV1 = require("./routes/routev1");
const routerV2 = require("./routes/routerv2");

app.use("/api/v1", routerV1);
app.use("/api/v2", routerV2);

app.listen(port, () => console.log(`Listening on port ${port}`));
