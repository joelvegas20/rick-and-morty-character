const User = require("../database/models/user.model");


async function login(req , res){
    
    try {

        const { email , password } = req.query

        if (!email || email === '' || !password || password === '') return res.status(400).json({Huston: 'Nos faltan datos'})

        const user = await User.findOne({where: {email: email }})

        if(!user) { res.status(404).json({Huston: 'Usuario no encontrado'})}

        if(user.password !== password) return res.status(403).json({Huston: 'Contraseña incorrecta'})

        res.status(200).json({
            access: true,
        })

    } catch (error) {
     
        res.status(500).json(error.message)
    }
}

module.exports = {
    login
}