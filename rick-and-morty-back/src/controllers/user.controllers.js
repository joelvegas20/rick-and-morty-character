const User = require("../database/models/user.model");


async function postUser(req , res) {

    try {
        
        const { email , password } = req.body

        if(!email || email === '' || !password || password === '' ) return res.status(400).json({Huston: 'Nos faltan datos'})

        const [ user ] = await User.findOrCreate(
            {where: {email: email}, defaults: {password: password}}
        )

        res.status(201).json(user)


    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = { postUser }
