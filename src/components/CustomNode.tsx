import { FC, ReactNode } from 'react';
import { X, GripVertical } from 'lucide-react';
import Button from './Button';

interface CustomNodeProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  handleRun?: () => void;
}

const CustomNode: FC<CustomNodeProps> = ({
  title,
  onClose,
  children,
  handleRun,
}) => {
  return (
    <div className="flex">
      <div className="bg-navy-600 border border-navy-500">
        <div className="flex items-center justify-between border-b border-navy-500 p-2 gap-20">
          <div className="text-white flex items-center tracking-wider gap-1">
            <GripVertical className="w-4 h-4" />
            {title}
          </div>
          <button onClick={onClose}>
            <X className="w-4 h-4 text-navy-400" />
          </button>
        </div>

        <div className="p-2">{children}</div>
        {handleRun && <Button onClick={handleRun}>Run</Button>}
      </div>
      <div className="w-7 bg-navy-300 rounded-r-lg"></div>
    </div>
  );
};

export default CustomNode;
