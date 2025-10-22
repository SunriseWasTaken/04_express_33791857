// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!"));

router.get("/welcome/:name", (req, res) => res.send(`<h1>Welcome ${req.params.name}</h1>`));

router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));

router.get('/contact', (req, res) => res.send(`
    <h1>Contact Information</h1>
    <p>Email: thoss005@gold.ac.uk</p>
    <p>Address: Goldsmiths, UoL</p>
    `));

// uses Date object to display date and time
router.get('/date', (req, res) => res.send(`Today is ${new Date()}`));

// First handler logs the request and passes control to the next handler
router.get('/chain', (req, res, next) => {
    console.log("First handler executed");
    req.customData = "Hello from first handler";
    next() // passes control to the next handler
    },
  (req, res) => {
    res.send(`<h1>Second handler executed. Data: ${req.customData}</h1>`);
    }
);

router.get('/file', (req, res) => {
    res.sendFile("a.html", {root: __dirname + "../../"})
})


// Export the router object so index.js can access it
module.exports = router;
