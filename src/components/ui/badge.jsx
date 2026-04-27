// src/components/ui/Badge.jsx
function Badge({ children, type = "default" }) {
  const colors = {
    default: { bg: "#e5e7eb", color: "#374151" },
    success: { bg: "#d1fae5", color: "#065f46" },
    warning: { bg: "#fef3c7", color: "#92400e" },
    danger: { bg: "#fee2e2", color: "#991b1b" },
  };
  const style = colors[type] || colors.default;

  return (
    <span
      style={{
        ...style,
        padding: "2px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
