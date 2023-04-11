const { Router } = require("express");
const { getCharById, getCharDetail, getCharacterFav, postCharacterFav, deleteCharacterFav } = require("../controllers/character.controllers");
const { postFavorite, deleteFavorite, getFavorites } = require("../controllers/favorite.controllers");
const { postUser } = require("../controllers/user.controllers");



const  { login } = require('../controllers/login.controllers')


const routes = Router()


routes.get('/rickandmorty/onsearch/:id' , getCharById)
routes.get('/rickandmorty/detail/:id' , getCharDetail)
routes.get('/rickandmorty/fav' , getFavorites )
routes.post('/rickandmorty/fav' , postFavorite )
routes.delete('/rickandmorty/fav/:id' , deleteFavorite )
routes.get('/login' , login )
routes.post('/login' , postUser )



module.exports = routes