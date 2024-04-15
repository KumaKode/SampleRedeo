const { LOCAL_DB_PASSWORD } = require("./server-config");

require("dotenv").config();

// prettier-ignore
module.exports = {
  "development": {
    "username": "root",
    "password": LOCAL_DB_PASSWORD,
    "database": "Redeo",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": { // These env variables come from production environment(Now: Railway), probably database(MySQL) image. NOTE: these must be have in backend image too!
    "username": process.env.MYSQLUSER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "port": process.env.MYSQLPORT,
    "dialect": "mysql"
}
};
