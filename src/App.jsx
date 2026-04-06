function App() {
  // Ma'lumotlar (keyingi darslarda state bo'ladi)
  const appName = "Task Manager";
  const totalTasks = 5;
  const completedTasks = 5;
  const isPremium = true;

  // Dynamic style
  const headerStyle = {
    backgroundColor: "#1a1a2e",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
  };

  // Dynamic className
  const badgeClass = `badge ${isPremium ? "badge-gold" : "badge-free"}`;

  return (
    <>
      {/* Header */}
      <header style={headerStyle}>
        <h1 className="app-title">📋 {appName}</h1>
        <span className={badgeClass}>{isPremium ? "⭐ Premium" : "Free"}</span>
      </header>

      {/* Stats */}
      <main className="main-content">
        <div className="stats-card">
          <p>
            Jami vazifalar: <strong>{totalTasks}</strong>
          </p>
          <p>
            Bajarilgan: <strong>{completedTasks}</strong>
          </p>

          {/* 0 ga bo'lish xavfsizligi */}
          <p>
            Natija:{" "}
            {totalTasks > 0
              ? `${Math.round((completedTasks / totalTasks) * 100)}%`
              : "Vazifalar yo'q"}
          </p>
        </div>

        {/* Shartli ko'rsatish */}
        {completedTasks === totalTasks && totalTasks > 0 && (
          <div className="success-banner">🎉 Barcha vazifalar bajarildi!</div>
        )}
      </main>
    </>
  );
}

export default App;
