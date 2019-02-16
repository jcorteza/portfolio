const path = require("path");
module.exports = (app) => {
    // html route for homepage
    app.get("/", (req, res) => {
        res.status(200).sendFile(path.join(__dirname,"../public/html/home.html"));
    });
    //html route for about page
    app.get("/about", (req, res) => {
        console.log("getting about html route");
        res.status(200).sendFile("../public/html/about.html");
    });
    //html route for contact page
    app.get("/contact", (req, res) => {
        console.log("getting contact page html route.");
        res.status(200).sendFile("../public/html/contact.html");
    });
    //html route for portfolio page
    app.get("/portfolio", (req, res) => {
        console.log("getting portfolio page html route");
        res.status(200).sendFile("../public/html/portfolio.html");
    });
    //html route for nonexistent pages
    app.get("/*", (req, res) => {
        console.log("getting 404 route");
        res.status(404).sendFile("../public/html/notFound.html");
    });
}