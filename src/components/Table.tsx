import { useTable } from 'react-table';
import { useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { TableColumn } from '../types';
import useGetColumns from '../hooks/useGetColumns';

const Table = () => {
  const { currentSelected, nodeOutputs } = useAppSelector(
    (store) => store.workflow
  );

  const [columns, setColumns] = useState<TableColumn[]>([]);
  const [data, setData] = useState<{}[]>([]);

  const { getColumns } = useGetColumns();

  useEffect(() => {
    const cols = getColumns(currentSelected || '');

    if (currentSelected && nodeOutputs[currentSelected].output.length > 0) {
      // set cols
      let tableColumns: TableColumn[] = [];

      if (cols) {
        cols.map((col) =>
          tableColumns.push({ Header: col.key, accessor: col.key })
        );
      }
      setColumns(tableColumns);

      // set data
      setData(nodeOutputs[currentSelected].output);
    } else {
      setColumns([]);
      setData([]);
    }
  }, [currentSelected, nodeOutputs]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  if (currentSelected && nodeOutputs[currentSelected].output.length < 1) {
    return (
      <div className="mx-2 mt-1 text-xs tracking-wider">
        <span className="text-blue-400">root:</span>{' '}
        <span className="text-gray-600"> &#91; &#93; </span>
        <span className="text-gray-600 align-text-top">0 items</span>
      </div>
    );
  }

  return (
    <table {...getTableProps()} className="border-collapse">
      <thead className="bg-navy-600 text-white font-semibold text-xs">
        {headerGroups.map((hg) => (
          <tr {...hg.getHeaderGroupProps()} className="text-left">
            {hg.headers.map((header) => (
              <th
                {...header.getHeaderProps()}
                className="min-w-[150px] border border-navy-500 p-1"
              >
                {header.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-white text-xs">
        {rows.map((row, index) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="border border-navy-500 p-1"
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
