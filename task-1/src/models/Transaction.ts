// src/models/Transaction.ts
import mongoose, { Document } from 'mongoose';

const transactionSchema = new mongoose.Schema({
  investorID: Number,
  syndicateID: String,
  amount: Number,
  transactionDate: Date,
});

export interface ITransaction extends Document {
  investorID: number;
  syndicateID: string;
  amount: number;
  transactionDate: Date;
}

export const TransactionModel = mongoose.model<ITransaction>('Transaction', transactionSchema);
