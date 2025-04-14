const Insights = () => {
    return (
      <div className="insights-container">
        <header>
          <h1>Financial Insights</h1>
        </header>
  
        <section className="ai-recommendations">
          <h3>AI Recommendations</h3>
          <p>Tip: You can save 10% more by reducing your dining out expenses.</p>
          {/* Dynamically generate insights */}
        </section>
  
        <section className="spending-report">
          <PieChart data={spendingData} />
          {/* Visualize spending breakdown by category */}
        </section>
  
        <footer>
          <button>See Full Report</button>
        </footer>
      </div>
    );
  }
  
  export default Insights;
  