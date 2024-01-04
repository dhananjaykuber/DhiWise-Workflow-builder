import { Position, useEdges, useNodeId } from 'reactflow';
import { HandleType, SelectOption } from '../types';
import CustomNode from './CustomNode';
import SelectDropdown from './SelectDropdown';
import useNodeColsCount from '../hooks/useNodeColsCount';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import useGetSource from '../hooks/useGetSource';
import { useEffect, useState } from 'react';
import useGetColumns from '../hooks/useGetColumns';
import { setNodeOutput } from '../redux/slices/workflow';

const orders: SelectOption[] = [
  {
    text: 'Ascending',
  },
  {
    text: 'Descending',
  },
];

const handles: HandleType[] = [
  { type: 'target', position: Position.Left, id: 'left' },
  { type: 'source', position: Position.Right, id: 'right' },
];

const SortNode = () => {
  const dispatch = useAppDispatch();
  const { nodeOutputs } = useAppSelector((store) => store.workflow);

  // nodeid inbuilt hook
  const nodeId = useNodeId();

  // inbuilt hook that gives all the edges
  const edges = useEdges();

  // node cols count hook
  const { nodeColsCount, getNodeColsCount } = useNodeColsCount(nodeId || '');

  // custom hook to get nodeids
  const { getLeftSourceNodeId } = useGetSource();

  // get column names from custom hook
  const { getColumns } = useGetColumns();

  // states
  const [columnNames, setColumnNames] = useState<SelectOption[]>([]);
  const [sortOption, setSortOption] = useState<{
    column: string | '';
    order: string | '';
  }>({
    column: '',
    order: '',
  });

  useEffect(() => {
    // get the columns of data and set to columnName local state to show column names in select tag
    const sourceId = getLeftSourceNodeId(nodeId, edges);

    if (sourceId) {
      const transformedCols = getColumns(sourceId).map((item) => ({
        text: item.key,
      }));

      setColumnNames(transformedCols);
    }
  }, [nodeId, edges, nodeOutputs]);

  // handle change
  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setSortOption((prevSortOption) => ({
      ...prevSortOption,
      [name]: value,
    }));
  };

  // handle all oprations for filter
  const handleRun = () => {
    if (nodeId) {
      const id = getLeftSourceNodeId(nodeId, edges);

      if (id) {
        const data = nodeOutputs[id].output;

        console.log(data);

        // sorting data
        if (sortOption.column && sortOption.order) {
          const sortedData = [...data].sort((a, b) => {
            const colA = a[sortOption.column];
            const colB = b[sortOption.column];

            if (sortOption.order === 'Ascending') {
              return colA < colB ? -1 : colA > colB ? 1 : 0;
            } else if (sortOption.order === 'Descending') {
              return colA > colB ? -1 : colA < colB ? 1 : 0;
            }

            return 0;
          });

          dispatch(setNodeOutput({ id: nodeId.toString(), data: sortedData }));
        }
      }
    }
  };

  return (
    <CustomNode
      title="Sort"
      handleRun={handleRun}
      datasetInfo={nodeColsCount > 0 ? `[DATASET] ${nodeColsCount} rows` : ''}
      handles={handles}
    >
      <SelectDropdown
        label="Column name"
        options={columnNames}
        name="column"
        onChange={handleChange}
      />
      <SelectDropdown
        label="Order"
        options={orders}
        name="order"
        onChange={handleChange}
      />
    </CustomNode>
  );
};

export default SortNode;
