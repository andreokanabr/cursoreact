const express = require("express");
const path = require("path");
const cors = require("cors");

const port = 5000;

const app = express();

// config Json and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
