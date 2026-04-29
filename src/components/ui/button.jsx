// src/components/ui/Button.jsx
function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  isDisabled = false,
  onClick,
  type = "button",
  fullWidth = false,
}) {
  const base = {
    border: "none",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    width: fullWidth ? "100%" : "auto",
    justifyContent: "center",
    transition: "opacity 0.2s",
    opacity: isDisabled || isLoading ? 0.6 : 1,
  };

  const variants = {
    primary: { background: "#3b82f6", color: "#fff" },
    secondary: { background: "#f3f4f6", color: "#374151" },
    danger: { background: "#ef4444", color: "#fff" },
    ghost: { background: "transparent", color: "#3b82f6" },
  };

  const sizes = {
    sm: { padding: "6px 14px", fontSize: "13px" },
    md: { padding: "10px 22px", fontSize: "14px" },
    lg: { padding: "13px 28px", fontSize: "16px" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      style={{ ...base, ...variants[variant], ...sizes[size] }}
    >
      {isLoading && <span>⏳</span>}
      {children}
    </button>
  );
}

export default Button;
