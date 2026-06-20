export const calculateCarbonScore = (data) => {
  if (!data) return 0;
  
  let score = 0;

  switch (data.transportation) {
    case 'Bicycle': score += 10; break;
    case 'Public Transport': score += 25; break;
    case 'Motorcycle': score += 50; break;
    case 'Car': score += 70; break;
    default: break;
  }

  switch (data.diet) {
    case 'Vegan': score += 10; break;
    case 'Vegetarian': score += 20; break;
    case 'Mixed': score += 40; break;
    default: break;
  }

  switch (data.electricity) {
    case 'Low': score += 10; break;
    case 'Medium': score += 30; break;
    case 'High': score += 50; break;
    default: break;
  }

  switch (data.shopping) {
    case 'Minimal': score += 10; break;
    case 'Moderate': score += 30; break;
    case 'Frequent': score += 50; break;
    default: break;
  }

  return score;
};
