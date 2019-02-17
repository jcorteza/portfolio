const express = require("express");
const app = express();
let PORT = process.env.PORT || 3020;

//requiring middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

//requiring routes
require("./routes/html-routes")(app);

app.listen(PORT, (req, res) => {
    console.log(`App connected on http://localhost:${PORT}`);
});