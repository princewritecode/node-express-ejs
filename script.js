/* Now let's understand how ejs works that is embedded javascript */
const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const redditData = require("./data.json");
app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats.ejs', { cats });
});
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { rand: num });
});
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    console.log(data);
    res.render('subreddit.ejs', { ...data });
});
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

