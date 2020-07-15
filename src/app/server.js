require("dotenv").config();

const app = require("./app");
const knex = require("knex");
const pg = require("pg");

//Database instance
const db = knex({
    client: "pg",
    connection: ""
});

app.set("db", db);

app.listen(8000, ()=>{
    console.log("Working... Listening");
});