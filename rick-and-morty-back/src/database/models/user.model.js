const { DataTypes } = require("sequelize");
const { sequelize } = require("..");
const Favorite = require("./favorite.model");

const User = sequelize.define('User', 
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            isEmail:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        // Nothing
    }
)


User.belongsToMany(Favorite, {through: 'UserFavorite'})
Favorite.belongsToMany(User, {through: 'UserFavorite'})


module.exports = User