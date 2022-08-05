const express = require('express');
const app = express();
const swaggerUi = require('express-swaggerize-ui');

app.use('/api-docs.json', function (req, res) {
	  res.json(require('./specs/ATTOS-V2.json'));
});
app.use('/api-docs', swaggerUi());

app.listen(3000);

console.log("See Swagger specs at: http://localhost:3000/api-docs");


