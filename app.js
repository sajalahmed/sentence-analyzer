const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { errorMiddleware, rateLimitMiddleware } = require('./src/app/middleware')
const port = process.env.PORT || 3000;

const app = express();
app.use('/storage', express.static(path.join(__dirname, 'storage')));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use(rateLimitMiddleware);
// Routes
require('./src/routes')(app);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`API server started on PORT: ${port}`);
});

// 404 not found
app.use(function (req, res) {
  res.status(404).send({ error: '404 Not Found :(' });
});

module.exports = app;