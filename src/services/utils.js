export const getPackTheme = (rarity) => {
  switch (rarity) {
    case "legendary":
      return {
        background: "linear-gradient(to right, #ffab40, #ff6600)",
        textColor: "white",
      };
    case "epic":
      return {
        background: "linear-gradient(to right, #8a2be2, #4b0082)",
        textColor: "white",
      };
    case "rare":
      return {
        background: "linear-gradient(to right, #0074e4, #001f4d)",
        textColor: "white",
      };
    case "common":
      return {
        background: "#888888",
        textColor: "black",
      };
    default:
      return {
        background: "transparent",
        textColor: "black",
      };
  }
};
