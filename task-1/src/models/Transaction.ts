import mongoose, { Document, Model, Schema } from "mongoose";

// Custom TypeScript type for a two-digit decimal

interface ITransaction extends Document {
  investorID: number;
  syndicateID: string;
  amount: number;
  transactionDate: Date;
}

const transactionSchema: Schema = new Schema<ITransaction>({
  investorID: { type: Number, required: true },
  syndicateID: { type: String, required: true },
  amount: {
    type: Number,
    required: true,
  },
  transactionDate: { type: Date, required: true },
});

const Transaction: Model<ITransaction> = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);

export { Transaction, ITransaction };
