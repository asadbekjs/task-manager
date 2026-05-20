const StatsBar = ({ total, done }) => {
  // derived state/props
  const remaining = total - done;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span style={{ fontSize: 13, color: "#6b7280" }}>
          {done}/{total} bajarildi
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6" }}>
          {percent}%
        </span>
      </div>
      {/* Progress bar */}
      <div style={{ height: 8, background: "#e5e7eb", borderRadius: 999 }}>
        <div
          style={{
            height: "100%",
            borderRadius: 999,
            width: `${percent}%`,
            background: percent === 100 ? "#10b981" : "#3b82f6",
            transition: "width 0.4s ease",
          }}
        />
      </div>
      {remaining === 0 && total > 0 && (
        <p
          style={{
            textAlign: "center",
            color: "#10b981",
            fontWeight: 700,
            marginTop: 8,
          }}
        >
          🎉 Barcha vazifalar bajarildi!
        </p>
      )}
    </div>
  );
};

export default StatsBar;
