import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Edge, Node } from 'reactflow';

interface WorkflowInitialState {
  nodes: Node[];
  edges: Edge[];
}

const initialState: WorkflowInitialState = {
  nodes: [],
  edges: [],
};

export const workflowSlice = createSlice({
  name: 'workflow',
  initialState: initialState,
  reducers: {
    setNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes = action.payload;
    },
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload);
    },
    removeNode: (state, action: PayloadAction<string>) => {
      const nodeIdToDelete = action.payload;
      const updatedNodes = state.nodes.filter(
        (node) => node.id != nodeIdToDelete
      );

      return {
        ...state,
        nodes: updatedNodes,
      };
    },
    setEdges: (state, action: PayloadAction<Edge[]>) => {
      state.edges = action.payload;
    },
    addEdge: (state, action: PayloadAction<Edge>) => {
      state.edges.push(action.payload);
    },
  },
});

export const { setNodes, addNode, removeNode, setEdges, addEdge } =
  workflowSlice.actions;

export default workflowSlice.reducer;
