import { Position, useNodeId } from 'reactflow';
import { HandleType, SelectOption } from '../types';
import CustomNode from './CustomNode';
import SelectDropdown from './SelectDropdown';
import { CSVData } from '../data';
import { useState } from 'react';
import useCSVData from '../hooks/useCSVData';
import toast from 'react-hot-toast';
import { setNodeOutput } from '../redux/slices/workflow';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import useNodeColsCount from '../hooks/useNodeColsCount';

const options: SelectOption[] = CSVData;

const FileNode = () => {
  const dispatch = useAppDispatch();
  const { nodeOutputs } = useAppSelector((store) => store.workflow);

  const nodeId = useNodeId();

  const [path, setPath] = useState<string>('');

  const handles: HandleType[] = [
    { type: 'source', position: Position.Right, id: 'right' },
  ];

  // node cols count hook
  const { nodeColsCount } = useNodeColsCount(nodeId || '');

  // read csv hook
  const { readCSVData } = useCSVData();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value) {
      setPath(value);

      try {
        const data = await readCSVData(value);

        if (data && nodeId) {
          dispatch(setNodeOutput({ id: nodeId, data }));
        }
      } catch (error) {
        toast.error('Something went wong. Try again');
        console.error(error);
      }
    }
  };

  return (
    <CustomNode
      title="File"
      handles={handles}
      datasetInfo={nodeColsCount > 0 ? `[DATASET] ${nodeColsCount} rows` : ''}
    >
      <p className="text-gray-400 text-sm mb-2">Allowed types: csv, json</p>
      <SelectDropdown
        label="File name"
        options={options}
        value={path}
        onChange={handleChange}
      />
    </CustomNode>
  );
};

export default FileNode;
