const express = require("express");
const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas - endpoints
app.get("/", (req, res) => {
	res.json({ message: "Primeira rota criada com sucesso!" });
});

app.listen(3000);
