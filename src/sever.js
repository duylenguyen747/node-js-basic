import Express from "Express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

const express = require("Express");
const app = Express();
const port = process.env.PORT || 3000;

// set up view engine
configViewEngine(app);

// init
initWebRoute(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
