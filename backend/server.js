import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PropertyRegistration } from './models/FlatRegistrationModel.js';

const app = express();
const port = 3000;

// middleware

app.use(cors({
    origin: "http://localhost:5173",  
    credentials: true                
  }));
app.use(express.json());

const mongoDbUrl = 'mongodb+srv://aadi678a:UDW84zwTIgVJaTTs@dashboard.epgi5.mongodb.net/?retryWrites=true&w=majority&appName=Dashboard'
mongoose
.connect(mongoDbUrl)
.then(() => {
    console.log("Cluster is connected");
    app.listen(port, () => {
        console.log(`Server is up and listening on port ${port}`);
    });
})
.catch((error) => console.log(error));


