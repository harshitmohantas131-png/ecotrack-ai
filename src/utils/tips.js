export const getEcoTips = (score) => {
  if (score > 120) {
    return [
      { id: 1, text: "Use public transport more often", icon: "🚶" },
      { id: 2, text: "Reduce unnecessary electricity usage", icon: "💡" },
      { id: 3, text: "Buy fewer disposable products", icon: "♻️" },
      { id: 4, text: "Increase plant-based meals", icon: "🥗" }
    ];
  } else if (score > 60) {
    return [
      { id: 1, text: "Walk or cycle occasionally", icon: "🚲" },
      { id: 2, text: "Switch off appliances after use", icon: "🔌" },
      { id: 3, text: "Carry reusable bags", icon: "👜" }
    ];
  } else {
    return [
      { id: 1, text: "Excellent progress", icon: "🌱" },
      { id: 2, text: "Maintain your habits", icon: "🌎" },
      { id: 3, text: "Inspire others around you", icon: "🌿" }
    ];
  }
};
