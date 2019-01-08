require('dotenv').config();
const { PORT, ACCOUNT, REPOSITORY } = process.env;
const express = require('express');
const hazel = require('hazel-server');

const server = express();
const h = hazel({
   account: ACCOUNT,
   repository: REPOSITORY
});

server.get('/', (req, res) => {
   h(req, res);
});

server.listen(PORT, () => {
   console.log(`Running on http://localhost:${PORT}`);
});