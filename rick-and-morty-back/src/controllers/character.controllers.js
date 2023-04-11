const { default: axios } = require("axios")

const { URL } = process.env

async function getCharById(req , res ) {

    try {
        const { id } = req.params
        
        const response = await axios.get(`${URL}${id}`)

        res.status(200).json(response.data)

    } catch (error) {
        res.status(500).json(error.message)
    }
}


async function getCharDetail(req, res){

    try {
        const { id } = req.params

        const response = await axios.get(`${URL}${id}`)

        res.json(response.data)
        
    } catch (error) {
        res.status(500).json(error.message)
    }

}



module.exports = {
    getCharById,
    getCharDetail,
}