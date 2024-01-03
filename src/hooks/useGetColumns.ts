import { useAppSelector } from '../redux/hooks';

const useGetColumns = () => {
  const { nodeOutputs } = useAppSelector((store) => store.workflow);

  const getColumns = (id: string) => {
    let cols: { key: string; type: any }[] = [];

    if (id && nodeOutputs[id].output.length > 0) {
      const firstRow = nodeOutputs[id].output.at(0);

      if (firstRow) {
        Object.entries(firstRow).forEach(([key, value]) => {
          {
            const type =
              typeof value === 'number' && !isNaN(value) ? 'number' : 'string';
            cols.push({ key, type: type });
          }
        });
      }
    }

    return cols;
  };

  return { getColumns };
};

export default useGetColumns;
