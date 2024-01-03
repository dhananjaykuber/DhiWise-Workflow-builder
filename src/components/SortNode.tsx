import { Position } from 'reactflow';
import { HandleType, SelectOption } from '../types';
import CustomNode from './CustomNode';
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

const orders: SelectOption[] = [
  {
    text: 'Ascending',
  },
  {
    text: 'Descending',
  },
];

const SortNode = () => {
  const handles: HandleType[] = [
    { type: 'target', position: Position.Left, id: 'left' },
    { type: 'source', position: Position.Right, id: 'right' },
  ];

  return (
    <CustomNode
      title="Sort"
      // onClose={() => {}}
      handleRun={() => {}}
      datasetInfo="[DATASET] 41764 rows | 10 columns"
      handles={handles}
    >
      <SelectDropdown label="Column name" options={columnNames} />
      <SelectDropdown label="Order" options={orders} />
    </CustomNode>
  );
};

export default SortNode;
