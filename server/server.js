const express = require('express');

const cors = require('cors');
const app = express();

const campingRoute = require('./routes/camping');

app.use(cors());
app.use(express.json());

app.use('/api', campingRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));