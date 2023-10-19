// src/controllers/transactionController.ts
import { Request, Response } from 'express';
import { TransactionModel } from '../models/Transaction';

export const getTopInvestors = async (req: Request, res: Response) => {
  try {
    // Use the aggregate function to perform aggregation on the TransactionModel collection
    const result = await TransactionModel.aggregate([
      {
        // Stage 1: Group transactions by investorID
        $group: {
          _id: '$investorID', // Group by investorID
          uniqueSyndicates: { $addToSet: '$syndicateID' }, // Collect unique syndicateIDs for each investor
          totalAmount: { $sum: '$amount' }, // Calculate the total amount invested by each investor
        },
      },
      {
        // Stage 2: Sort the results in descending order based on the number of unique syndicates
        $sort: { uniqueSyndicates: -1 },
      },
      {
        // Stage 3: Limit the results to the top 5 investors with the highest number of unique syndicates
        $limit: 5,
      },
    ]);

    // Send the aggregated result as a JSON response
    res.json(result);
  } catch (error) {
    // If an error occurs during aggregation, respond with a 500 Internal Server Error
    res.status(500).json({ error: 'An error occurred' });
  }
};
