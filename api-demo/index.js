const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/foo', (req, res) => {
  res.send('bar');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
