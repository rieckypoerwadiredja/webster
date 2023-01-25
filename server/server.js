const express = require('express');

const app = express();

// Controller
const portofolio = require('./controllers/portfolio');
const notFound = require('./controllers/notFound');

app.get('/api/porto', portofolio.getPorto);

app.use(notFound.notFound);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
