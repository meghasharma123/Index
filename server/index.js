import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://megha5sharma:ovdcJOXwahPF7Ply@cluster0.0v04pct.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on PORT : ${PORT}`)))
.catch((e)=>console.log(e.message));
