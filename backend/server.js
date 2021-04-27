import express from 'express';
import mongoose from 'mongoose';
//import data from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
//For POST REQUESTS
app.use(express.json());
app.use(express.urlencoded({ extended: true}))



//url to mongoDB
mongoose.connect(
    (process.env.MONGODB_URL || 'mongodb://localhost/amazoneClone'), 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

//mongoDB
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


app.get('/', (req,res) =>{
    res.send("Server is running");
});

app.use((err, req, res, next) =>{
    res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);
});