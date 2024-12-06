function calculateBonus(yearsOfExperience, performanceScore) {
  if (yearsOfExperience>5&&performanceScore>8) {
    return 0.2; 
  } else if (yearsOfExperience>3&&yearsOfExperience<=5&&performanceScore>7) {
    return 0.1; 
  } else {
    return 0.05;
  }
}
const yearsOfExperience = 4;
const performanceScore = 9;
const bonusPercentage = calculateBonus(yearsOfExperience, performanceScore);
console.log("Bonus percentage:", bonusPercentage * 100 + "%");