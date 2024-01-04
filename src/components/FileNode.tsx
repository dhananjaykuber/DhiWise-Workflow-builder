import { Position, useNodeId } from 'reactflow';
import { HandleType, SelectOption } from '../types';
import CustomNode from './CustomNode';
import SelectDropdown from './SelectDropdown';
import { CSVData } from '../data';
import { useState } from 'react';
import useCSVData from '../hooks/useCSVData';
import toast from 'react-hot-toast';
import { setNodeOutput } from '../redux/slices/workflow';
import { useAppDispatch } from '../redux/hooks';

const options: SelectOption[] = CSVData;

const handles: HandleType[] = [
  { type: 'source', position: Position.Right, id: 'right' },
];

const FileNode = () => {
  const dispatch = useAppDispatch();

  const nodeId = useNodeId();

  const [path, setPath] = useState<string>('');

  // read csv hook
  const { readCSVData } = useCSVData();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value) {
      setPath(value);

      try {
        const data = await readCSVData(value);

        console.log(data.length);

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
    <CustomNode title="File" handles={handles}>
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
