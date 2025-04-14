const Goals = () => {
    return (
      <div className="goals-container">
        <header>
          <h1>Your Savings Goals</h1>
        </header>
  
        <section className="goal-list">
          <div className="goal-card">
            <h3>Vacation Fund</h3>
            <ProgressBar percentage={40} /> {/* Show savings progress */}
          </div>
          <div className="goal-card">
            <h3>Emergency Fund</h3>
            <ProgressBar percentage={70} />
          </div>
          {/* Repeat for other goals */}
        </section>
  
        <footer>
          <button>Create New Goal</button>
        </footer>
      </div>
    );
  }
  
  export default Goals;
  