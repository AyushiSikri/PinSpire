import React from "react";

const MessageModal = ({ isOpen, onClose, type = "success", message }) => {
  if (!isOpen) return null;

  // Different styles for success vs error
  const colors = {
    success: {
      border: "2px solid #4caf50",
      icon: "✅",
      textColor: "#2e7d32",
    },
    error: {
      border: "2px solid #f44336",
      icon: "❌",
      textColor: "#c62828",
    },
  };

  const { border, icon, textColor } = colors[type];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "1.5rem 2rem",
          borderRadius: "1rem",
          width: "320px",
          textAlign: "center",
          border,
        }}
      >
        <div style={{ fontSize: "2rem" }}>{icon}</div>
        <p
          style={{
            margin: "1rem 0",
            fontWeight: 600,
            color: textColor,
            fontSize: "1rem",
          }}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          style={{
            backgroundColor: textColor,
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
