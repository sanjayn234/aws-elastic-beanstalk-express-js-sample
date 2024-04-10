const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello AWS!'));
>>>>>>> 65fee1d346afa2794a2ea3de1365270fbc8f39d6

app.listen(port);
console.log(`App running on http://localhost:${port}`);
