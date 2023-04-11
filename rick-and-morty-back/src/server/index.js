require('dotenv').config()
const express = require('express');
const app = express();
const { PORT } = process.env;
app.set('trust proxy', 1);

const cors = require('cors');
const { sequelize } = require('../database');
const routes = require('../routes/index.routes');

// Models for Automatic Syncronization.
const User = require('../database/models/user.model')
const Favorites = require('../database/models/favorite.model');


// Middlewares.
// app.use(cors())

app.use(cors({
   origin: 'http://localhost:5173',
   credentials: true
 }));


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Router.
app.use(routes)


// Main Function for async methods of Sequelize.
function main(){

   app.listen(PORT, async () => {

      try {

         await sequelize.authenticate()
         await sequelize.sync()

         console.log('Server raised in port ' + PORT);
         
      } catch (error) {
         console.log(error.message)
      }

   });

}


main()






