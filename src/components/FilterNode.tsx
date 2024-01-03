import { Position, useEdges, useNodeId } from 'reactflow';
import { HandleType, SelectOption } from '../types';
import CustomNode from './CustomNode';
import InputBox from './Inputbox';
import SelectDropdown from './SelectDropdown';
import useNodeColsCount from '../hooks/useNodeColsCount';

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

const handles: HandleType[] = [
  { type: 'target', position: Position.Left, id: 'left' },
  { type: 'source', position: Position.Right, id: 'right' },
];

const FilterNode = () => {
  const nodeId = useNodeId();

  // inbuilt hook that gives all the edges
  const edges = useEdges();

  // node cols count hook
  const { nodeColsCount, getNodeColsCount } = useNodeColsCount(nodeId || '');

  // handle all oprations for filter
  const handleRun = () => {};

  return (
    <CustomNode
      title="Filter"
      handleRun={handleRun}
      datasetInfo={nodeColsCount > 0 ? `[DATASET] ${nodeColsCount} rows` : ''}
      handles={handles}
    >
      <SelectDropdown label="Column name" options={columnNames} />
      <SelectDropdown label="Condition" options={conditions} />
      <InputBox />
    </CustomNode>
  );
};

export default FilterNode;
