const Favorite = require("../database/models/favorite.model");


async function getFavorites(req , res ){
  try {
    
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);

  } catch (error) {
    res.status(500).json({Huston:'Tenemos un problemilla'})
  }

}

async function postFavorite(req, res) {
  try {
    const { id ,  name, origin, status, image, species, gender } = req.body;

    console.log(req.body)

    if ( !id || id === '' || !name || !origin || !status || !image || !species || !origin || !gender)
      return res.status(401).json({ Huston: "Nos faltan datos" });


      await Favorite.findOrCreate({
        where: { id , name, origin, status, image, species, gender },
      });
  
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);


  } catch (error) {

    res.status(500).json(error.message)

  }
}

async function deleteFavorite(req, res) {
  try {
    const { id } = req.params;

    const user = await Favorite.findByPk(id);

    // borrar el usuario
    await user.destroy();

    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);


  } catch (error) {

    res.status(500).json(error.message)
  }
}


module.exports = {
  getFavorites,
  postFavorite,
  deleteFavorite
}