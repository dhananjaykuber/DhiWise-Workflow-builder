import { Position } from 'reactflow';
import { HandleType, SelectOption } from '../types';
import CustomNode from './CustomNode';
import SelectDropdown from './SelectDropdown';

const options: SelectOption[] = [
  {
    text: 'heart.csv',
    value: '/heart.csv',
  },
  {
    text: 'election-2019.csv',
    value: '/election-2019.csv',
  },
  {
    text: 'covid19.csv',
    value: '/covid19.csv',
  },
  {
    text: 'sex-ratio.csv',
    value: '/sex-ratio.csv',
  },
];

const FileNode = () => {
  const handles: HandleType[] = [
    { type: 'source', position: Position.Right, id: 'right' },
  ];

  return (
    <CustomNode
      title="File"
      // onClose={() => {}}
      handles={handles}
    >
      <p className="text-gray-400 text-sm mb-2">Allowed types: csv, json</p>
      <SelectDropdown label="File name" options={options} />
    </CustomNode>
  );
};

export default FileNode;
