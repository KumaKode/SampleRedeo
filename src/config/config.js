require("dotenv").config();

// prettier-ignore
module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
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
"production": {
    "username": process.env.MYSQLUSER || "root",
    "password": process.env.MYSQLPASSWORD || null,
    "database": process.env.MYSQLDATABASE || "database_production",
    "host": process.env.MYSQLHOST || "127.0.0.1",
    "port": process.env.MYSQLPORT || "3306",
    "dialect": "mysql"
}
};
