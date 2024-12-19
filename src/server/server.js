const express = require("express")
const path = require("path")

const startServer = (options) => {
    const { port, public_path = "public" } = options
    console.log(port)
    console.log(public_path)
    const app = express()
    //para usar middlewares se utiliza la palabra use (express) 
    app.use(express.static(public_path))//contenido estatico

    app.get("*", (req, res) => {
        const indexPath = path.join(__dirname + `../ ../ ../${public_path}/index.html`)

        res.sendfile(indexPath)
    })

    app.listen(port, () => {
        console.log(`escuchando en el puerto ${port}`)
    })

}


module.exports = {
    startServer
}