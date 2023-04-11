const { Sequelize } = require("sequelize");

const { DEBUG, DATABASE_NAME, USERNAME, PASSWORD, HOST_NAME, DIALECT } = process.env;

if (DEBUG === "true") {

    const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: "./database.sqlite",
    });

    module.exports = { sequelize };
    
} else {

    const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {

        host: HOST_NAME,
        dialect: DIALECT,
        dialectOptions: {
            ssl: { 
                rejectUnauthorized: false,
            },
        },

    });

    module.exports = { sequelize };
}
