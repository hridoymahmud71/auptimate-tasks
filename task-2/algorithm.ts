import { EventEmitter } from 'events';

// Define a class to represent a transaction.
class Transaction {
  constructor(public investorId: number, public amount: number) {}
}

// Define a class for the real-time alerting system.
class RealTimeAlertingSystem extends EventEmitter {
  private transactions: Transaction[] = [];
  private threshold: number = 10000; // Example threshold for a high transaction amount.
  private recentTransactions: Transaction[] = [];
  private alertThresholdFactor: number = 10;
  private alertWindowDuration: number = 3600000; // 1 hour in milliseconds

  constructor() {
    super();
  }

  // Method to record a new transaction.
  recordTransaction(investorId: number, amount: number) {
    const transaction = new Transaction(investorId, amount);
    this.transactions.push(transaction);

    // Check for high transaction amount.
    if (transaction.amount > this.threshold) {
      this.emit('high-amount-alert', transaction);
    }

    // Check for a spike in the number of transactions.
    const now = Date.now();
    this.recentTransactions = this.recentTransactions.filter(
      (t) => now - t.getTime() <= this.alertWindowDuration
    );
    this.recentTransactions.push(transaction);

    if (this.recentTransactions.length >= this.transactions.length * this.alertThresholdFactor) {
      this.emit('transaction-spike-alert', this.recentTransactions);
    }
  }
}

// Create an instance of the real-time alerting system.
const alertingSystem = new RealTimeAlertingSystem();

// Register event handlers for alerts.
alertingSystem.on('high-amount-alert', (transaction) => {
  console.log(`High amount alert: Investor ${transaction.investorId} made a transaction of ${transaction.amount}`);
});

alertingSystem.on('transaction-spike-alert', (transactions) => {
  console.log(
    `Transaction spike alert: There is a spike in transactions. Recent transactions: ${transactions.length}`
  );
});

// Simulate some transactions for testing.
alertingSystem.recordTransaction(1, 12000);
alertingSystem.recordTransaction(2, 8000);
alertingSystem.recordTransaction(3, 15000);
alertingSystem.recordTransaction(4, 2500);
alertingSystem.recordTransaction(5, 1800);

// Add more transactions to test different scenarios.

