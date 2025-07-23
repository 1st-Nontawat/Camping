const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { readdirSync } = require('fs');
const handleError = require('./middlewares/error');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));


app.use(handleError);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));