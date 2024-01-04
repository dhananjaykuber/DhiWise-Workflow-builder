import { Position } from 'reactflow';

export interface SelectOption {
  text: string;
  value?: string;
  type?: string;
}

export interface HandleType {
  type: 'source' | 'target';
  position: Position;
  id: string;
}

export interface NodeOutput {
  [id: string]: {
    id: string;
    output: [];
  };
}

export interface TableColumn {
  Header: string;
  accessor: string;
}
