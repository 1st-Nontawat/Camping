const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Camping server is running!' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});