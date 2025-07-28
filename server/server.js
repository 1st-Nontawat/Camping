const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { readdirSync } = require('fs');
const handleError = require('./middlewares/error');
require('dotenv/config');
const { clerkMiddleware } = require('@clerk/express');

app.use(cors());
app.use(express.json( {limit: '10mb' }));
app.use(morgan('dev'));
app.use(clerkMiddleware());
  


readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));


app.use(handleError);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));