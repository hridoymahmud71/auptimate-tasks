// src/app.ts
import express, { Application } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import transactionRouter from './routes/transactionRoutes';

const app: Application = express();
dotenv.config();

const PORT = process.env.PORT! || 3000;

// Connect to MongoDB using the new options
mongoose.connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

app.use('/api', transactionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
