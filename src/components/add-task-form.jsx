import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const handleSubmit = () => {
    if (!title.trim()) return;
    console.log(title, priority);
    onAdd({ title: title.trim(), priority });
    setTitle("");
    setPriority("medium");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        marginBottom: 24,
        padding: 16,
        background: "#f8fafc",
        borderRadius: 10,
        border: "1px solid #e5e7eb",
      }}
    >
      <input
        type="text"
        placeholder="Yangi vazifa ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          flex: 1,
          padding: "10px 14px",
          border: "1px solid #d1d5db",
          borderRadius: 8,
          fontSize: 14,
          outline: "none",
        }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #d1d5db",
          fontSize: 14,
        }}
      >
        <option value="high">🔴 Yuqori</option>
        <option value="medium">🟡 O'rta</option>
        <option value="low">🟢 Past</option>
      </select>
      <button
        onClick={handleSubmit}
        disabled={!title.trim()}
        style={{
          padding: "10px 20px",
          borderRadius: 8,
          background: title.trim() ? "#3b82f6" : "#93c5fd",
          color: "#fff",
          border: "none",
          cursor: title.trim() ? "pointer" : "not-allowed",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        + Qo'shish
      </button>
    </div>
  );
};

export default AddTaskForm;
