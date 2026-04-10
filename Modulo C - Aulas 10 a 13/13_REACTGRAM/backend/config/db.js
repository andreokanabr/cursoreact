const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
	try {
		const dbConn = await mongoose.connect(
			`mongodb+srv://${dbUser}:${dbPassword}@reactgramdb.t10eo4x.mongodb.net/`,
		);
		console.log("Conectou ao banco!");

		return dbConn;
	} catch (error) {
		console.log(`Erro ao conectar ao banco: ${error}`);
	}
};

conn();

module.exports = conn;
