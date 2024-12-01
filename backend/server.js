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


app.post("/propertyRegistration", async (req, res) => {
    try {
      const { flatType, rent, location, parking, utilities, houseName, deposit, carpetArea } = req.body;
      const newProperty = new PropertyRegistration({
        flatType,
        rent,
        location,
        parking,
        utilities,
        houseName,
        deposit,
        carpetArea,
      });
      await newProperty.save();
      res.status(200).send("Property information saved successfully");
    } catch (error) {
      console.error(error);
      res.status(400).send("Error saving property information");
    }
  });

  app.get('/propertyRegistration', async (req, res) => {
    try {
      const flats = await PropertyRegistration.find(); // Replace with your DB query
      res.status(200).json(flats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch flats' });
    }
  });
  

