import express from 'express';
import users from './user.js';
const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");

})

app.get("/api/user", (req, res) => {
    res.send(users);

});
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

