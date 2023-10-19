// src/routes/transactionRoutes.ts
import { Router, Request, Response } from 'express';
import { TransactionModel } from '../models/Transaction';

const transactionRouter = Router();

transactionRouter.get('/top-investors', async (req: Request, res: Response) => {
  try {
    const result = await TransactionModel.aggregate([
      {
        $group: {
          _id: '$investorID',
          uniqueSyndicates: { $addToSet: '$syndicateID' },
          totalAmount: { $sum: '$amount' },
        },
      },
      { $sort: { uniqueSyndicates: -1 } },
      { $limit: 5 },
    ]);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default transactionRouter;
