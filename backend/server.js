import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PropertyRegistration } from './models/FlatRegistrationModel.js';

const app = express();
const port = 3000;





app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});