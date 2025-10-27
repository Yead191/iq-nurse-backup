import { EdgeLabelRenderer, getBezierPath, useInternalNode, useReactFlow } from '@xyflow/react';
import { getEdgeParams } from './initialElements';

type FloatingEdgeProps = {
  id: string;
  source: string;
  target: string;
  markerEnd?: string;
  style?: React.CSSProperties;
  selected?: boolean
};

function FloatingEdge({ id, source, target, markerEnd, style, selected }: FloatingEdgeProps) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) {
    return null;
  }

  // Fix for type issue: safely extract measured.width and measured.height, fallback to 0 if undefined
  const safeNode = (node: any) => ({
    measured: {
      width: node?.measured?.width ?? 0,
      height: node?.measured?.height ?? 0,
    },
    internals: {
      positionAbsolute: node?.internals?.positionAbsolute ?? { x: 0, y: 0 },
    },
  });

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    safeNode(sourceNode),
    safeNode(targetNode),
  );

  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });


  return (

    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      style={style}
    />

  );
}

export default FloatingEdge;
