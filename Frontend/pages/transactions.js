const Transactions = () => {
    return (
      <div className="transactions-container">
        <header>
          <h1>Recent Transactions</h1>
        </header>
  
        <section className="transaction-list">
          {/* Use dynamic data to show recent transactions */}
          <TransactionCard transaction={transactionData} />
          <TransactionCard transaction={transactionData} />
          {/* Repeat for each transaction */}
        </section>
  
        <footer>
          <button>Add Transaction</button>
        </footer>
      </div>
    );
  }
  
  export default Transactions;
  