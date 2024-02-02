require("dotenv").config()
require("./db/connections");

const express = require('express')
const projectsRouter = require("./projects/routes")

const port = 5001;

const app = express();

app.use(express.json());

app.use(projectsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})