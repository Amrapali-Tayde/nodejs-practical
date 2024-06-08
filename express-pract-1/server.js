const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = 8000;


app.use(bodyParser.json());
app.use(cors());

app.post("/page2", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.json({ "state": 201, message: "Login successful" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.json({ "state": 201, message: "Login successful",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})