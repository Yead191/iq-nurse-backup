import type { Node } from "@xyflow/react";

export const CENTER_ID = "center-node";

const makeCenterNode = (label: string = "Patient"): Node => ({
  id: CENTER_ID,
  position: { x: 0, y: 0 },
  data: {
    label,
    description: "write description..",
    color: "#A34F41",
    type: "initial",
  },
  type: "initial",
});

export default makeCenterNode;