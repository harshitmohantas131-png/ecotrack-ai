export const getEcoBadges = (score) => {
  if (score > 120) {
    return [
      { id: 1, text: "Eco Beginner", icon: "🌍" }
    ];
  } else if (score > 60) {
    return [
      { id: 1, text: "Conscious Citizen", icon: "🌱" },
      { id: 2, text: "Energy Saver", icon: "🚲" }
    ];
  } else {
    return [
      { id: 1, text: "Green Champion", icon: "🏆" },
      { id: 2, text: "Eco Hero", icon: "🌿" },
      { id: 3, text: "Sustainability Star", icon: "♻️" }
    ];
  }
};
