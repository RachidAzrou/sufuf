const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serveer statische bestanden van de 'public' map
app.use(express.static('public'));

// Handel inkomende verzoeken af
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start de server
app.listen(port, () => {
  console.log(`Applicatie beschikbaar op http://localhost:${port}`);
});
