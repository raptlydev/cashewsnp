import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import path from 'path'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/api', postRoutes);

app.use(express.static('build'));
app.get('*', (req,res)=>{
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.get('/', (req,res)=>{
    res.send("Hello to the test projects")
});
// const CONNECTION_URL = "mongodb+srv://raptly:raptly123@cluster0.v9gql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 9000;

// app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`))
mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    .catch((err)=> console.log(err.message));

