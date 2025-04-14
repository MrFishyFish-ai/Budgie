const SetupBudget = () => {
    return (
      <div className="setup-budget-container">
        <header>
          <h1>Set Your Budget</h1>
        </header>
  
        <form>
          <label>Monthly Income</label>
          <input type="number" placeholder="Enter your income" />
          
          <label>Categories</label>
          <div className="categories">
            <div className="category">
              <label>Groceries</label>
              <input type="number" placeholder="Set your budget" />
            </div>
            <div className="category">
              <label>Entertainment</label>
              <input type="number" placeholder="Set your budget" />
            </div>
            {/* Repeat for other categories */}
          </div>
  
          <button type="submit">Save Budget</button>
        </form>
      </div>
    );
  }
  
  export default SetupBudget;
  