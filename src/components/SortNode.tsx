import { SelectOption } from '../types';
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
  return (
    <CustomNode title="Sort" onClose={() => {}} handleRun={() => {}}>
      <SelectDropdown label="Column name" options={columnNames} />
      <SelectDropdown label="Order" options={orders} />
    </CustomNode>
  );
};

export default SortNode;
