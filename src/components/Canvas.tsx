import { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  NodeTypes,
  DefaultEdgeOptions,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Background,
  Controls,
} from 'reactflow';
import FileNode from './FileNode';
import SortNode from './SortNode';

// Nodes & Edges
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'fileNode',
    data: { label: 'Node 1' },
    position: { x: 5, y: 5 },
  },
  {
    id: '2',
    type: 'sortNode',
    data: { label: 'Node 2' },
    position: { x: 5, y: 100 },
  },
];
const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

// edge options
const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

// App
export default function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  // custom nodes
  const nodeTypes = useMemo(
    () => ({ fileNode: FileNode, sortNode: SortNode }),
    []
  );

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full pb-11">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        defaultEdgeOptions={defaultEdgeOptions}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
