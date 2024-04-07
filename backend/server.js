import dotenv from "dotenv"
dotenv.config()
import express from "express"
import routes from "./routes/orders.js"
import mongoose from "mongoose"
import cors from "cors"

const app  = express();
app.use(express.json())
app.use(cors())

app.use((req, res , next) =>{
    console.log(req.path , req.method);
    next()
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

// app.use(routes)
app.use('/api' , routes)

mongoose.connect(process.env.MONGO_URI) // takes time async process therefore return a promise 
.then(() =>{})
.catch((error) => {console.log(error)})
app.listen(process.env.PORT , () => {
    console.log(`connected to db & App is listening on port ${process.env.PORT}`);
}) 