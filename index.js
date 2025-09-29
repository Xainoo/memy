
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Endpoint to get a random meme image filename
app.get('/random-meme', (req, res) => {
    const memeCount = 5;
    const randomIndex = Math.floor(Math.random() * memeCount) + 1;
    const memeFile = `memek${randomIndex}.jpg`;
    res.json({ meme: memeFile });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/public/index.html`);
});