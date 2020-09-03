const express = require("express")
const cors = require("cors")
const rutas = require("./routes/index")

require('dotenv').config()
require('./config/db')

//crear el elemento SERVIDOR
const servidor = express()

// Middleware
servidor.use(cors())
servidor.use(express.json())

servidor.use("/api",rutas)
servidor.listen(4000, () => console.log("conectado por el puerto 4000"))
