const { response } = require('express')

const usuariosGet = (req, res=response) => {

    //Extraemos los params de la URL
    const {nombre='NO ENVIADO', apiKey} = req.query

    res.json({
        msg: 'Get API - Controlador',
        nombre,
        apiKey
    })
}

const usuariosPost = (req, res=response) => {

    //Recuperamos los datos enviados por body
    const {nombre, edad} = req.body

    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req, res=response) => {

    const id=req.params.id

    //Recuperamos los datos enviados por body
    const {nombre, edad} = req.body

    res.json({
        msg: 'Put API - Controlador',
        nombre,
        edad,
        id
    })
}

const usuariosDelete = (req, res=response) => {
    res.json({
        msg: 'Delete API - Controlador'
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}