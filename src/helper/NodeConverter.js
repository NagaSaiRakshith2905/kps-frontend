export const NodeConverter = (x, y, label) => {
  return {
    id: label,
    position: { x: x, y: y },
    data: { label: label },
    style: {
      minWidth: "75px",
      width: "auto",
      minHeight: "75px",
      aspectRatio: "1/1",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "var(--clr-text-300)",
      fontWeight: "var(--fw-600)",
      background: "var(--clr-node-main)",
      border: "none",
      boxShadow: "none",
    },
  };
};
