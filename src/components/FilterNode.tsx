import { Position } from 'reactflow';
import { HandleType, SelectOption } from '../types';
import CustomNode from './CustomNode';
import InputBox from './Inputbox';
import SelectDropdown from './SelectDropdown';

const columnNames: SelectOption[] = [
  {
    text: 'Year',
  },
  {
    text: 'Units',
  },
  {
    text: 'Value',
  },
  {
    text: 'Industry Code',
  },
];

const conditions: SelectOption[] = [
  {
    text: 'text is exactly',
  },
  {
    text: 'text is not exactly',
  },
  {
    text: 'text includes',
  },
  {
    text: 'text does not includes',
  },
];

const FilterNode = () => {
  const handles: HandleType[] = [
    { type: 'target', position: Position.Left, id: 'left' },
    { type: 'source', position: Position.Right, id: 'right' },
  ];

  return (
    <CustomNode
      title="Filter"
      // onClose={() => {}}
      handleRun={() => {}}
      datasetInfo="[DATASET] 41764 rows | 10 columns"
      handles={handles}
    >
      <SelectDropdown label="Column name" options={columnNames} />
      <SelectDropdown label="Condition" options={conditions} />
      <InputBox />
    </CustomNode>
  );
};

export default FilterNode;
