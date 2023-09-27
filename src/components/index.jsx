export const FramedText = ({ text, icon, color, bgColor }) => {
  return (
    <div
      className="df aic"
      style={{
        color,
        backgroundColor: bgColor,
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <span
        style={{
          marginRight: "1rem",
        }}
      >
        {text}
      </span>
      {icon}
    </div>
  );
};
