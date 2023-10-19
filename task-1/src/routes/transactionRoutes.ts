// src/routes/transactionRoutes.ts
import { Router } from 'express';
import { getTopInvestors } from '../controllers/transactionController';

const transactionRouter = Router();

transactionRouter.get('/top-investors', getTopInvestors);

export default transactionRouter;
