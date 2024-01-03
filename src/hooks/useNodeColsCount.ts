import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';

const useNodeColsCount = (nodeId: string) => {
  const { nodeOutputs } = useAppSelector((store) => store.workflow);

  const [nodeColsCount, setNodeColsCount] = useState<number>(0);

  useEffect(() => {
    if (nodeId && nodeOutputs[nodeId]?.output?.length > 0) {
      setNodeColsCount(nodeOutputs[nodeId].output.length);
    }
  }, [nodeId]);

  return { nodeColsCount };
};

export default useNodeColsCount;
