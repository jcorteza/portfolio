const express = require("express");
const app = express();
let PORT = process.env.PORT || 3020;

app.use(express.static("public"));

require("./routes/html-routes")(app);

app.listen(PORT, (req, res) => {
    console.log(`App connected on http://localhost:${PORT}`);
});