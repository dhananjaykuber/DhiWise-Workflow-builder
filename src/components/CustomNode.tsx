import { FC, ReactNode } from 'react';
import { X, GripVertical } from 'lucide-react';
import Button from './Button';
import { Handle } from 'reactflow';
import { HandleType } from '../types';
import { useNodeId } from 'reactflow';
import { useAppDispatch } from '../redux/hooks';
import { removeNode } from '../redux/slices/workflow';

interface CustomNodeProps {
  title: string;
  // onClose: () => void;
  children: ReactNode;
  handleRun?: () => void;
  datasetInfo?: string;
  handles?: HandleType[];
}

const CustomNode: FC<CustomNodeProps> = ({
  title,
  // onClose,
  children,
  handleRun,
  datasetInfo,
  handles,
}) => {
  const dispatch = useAppDispatch();

  // inbuilt hook to get id of node
  const nodeId = useNodeId();

  const handleRemoveNode = () => {
    if (nodeId) {
      dispatch(removeNode(nodeId.toString()));
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="bg-navy-600 border border-navy-500">
          <div className="flex items-center justify-between border-b border-navy-500 p-2 gap-20">
            <div className="text-white flex items-center tracking-wider gap-1">
              <GripVertical className="w-4 h-4" />
              {title}
            </div>
            <button onClick={handleRemoveNode}>
              <X className="w-4 h-4 text-navy-400" />
            </button>
          </div>

          <div className="p-2">{children}</div>
          {handleRun && <Button onClick={handleRun}>Run</Button>}
        </div>
        <div className="w-7 bg-navy-300 rounded-r-lg"></div>
      </div>
      {handles?.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
        />
      ))}

      {datasetInfo && (
        <p className="text-xs mt-1 text-gray-200">{datasetInfo}</p>
      )}
    </div>
  );
};

export default CustomNode;
