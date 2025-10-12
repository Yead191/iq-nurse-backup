export const initialNode = {
    id: 'initial-node',
    position: { x: 0, y: 0 },
    data: {
      label: "Patient",
      description: "Write information about patient...",
      color: "#A34F41",
      type: "initial",
    },
    type: "initial",
    deletable: false,
  };

  export const colors = [
    "#4A6FA5",
    "#E74C3C",
    "#F39C12",
    "#9B59B6",
    "#2ECC71",
    "#3498DB",
    "#FF8A80",
    "#A34F41",
];
export function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}