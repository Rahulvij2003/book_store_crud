const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes");
const cors = require("cors");


require("./connection/conn");

app.use(cors());
app.use(express.json());
app.use("/api/v", bookRoute);



app.listen(1000, () => {
    console.log("SERVER STARTED SUCCESSFULLY");
});