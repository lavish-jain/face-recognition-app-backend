const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.urlencoded);
app.use(express.json);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});