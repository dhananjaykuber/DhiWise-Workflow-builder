import { Position } from 'reactflow';

export interface SelectOption {
  text: string;
  value?: string;
}

export interface HandleType {
  type: 'source' | 'target';
  position: Position;
  id: string;
}
