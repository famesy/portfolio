const colors = [
  "#FFB3BA", // Pastel Red
  "#FFDFBA", // Pastel Orange
  "#FFFFBA", // Pastel Yellow
  "#BAFFC9", // Pastel Green
  "#BAE1FF", // Pastel Blue
  "#E0BBE4", // Pastel Purple
  "#FFB3E6", // Pastel Pink
];

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function getImageURL(name) {
  return `/src/assets/${name}`;
}
