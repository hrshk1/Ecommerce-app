import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors' 
import connectDB from './config/db.js'
import morgan from 'morgan'
import authRoutes from './routes/authroutes.js'
import cors from 'cors'
//configure the dotenv file
dotenv.config()
//if .env is in some other folder then you have to write path as object inside config


//datbase config
connectDB();


//rest object 
const app = express();
app.use(express.json()) //body-parser
//middleware:
app.use(cors());

app.use(morgan('dev'))


//routes (keeping all routes here)
app.use('/api/v1/auth',authRoutes)


//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>")
})

//port
const PORT = process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
    //.bgCyan.white this is coming from colors library which changes colors in console
})