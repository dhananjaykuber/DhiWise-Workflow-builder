import { Plus } from 'lucide-react';
import Button from './Button';
import { useAppDispatch } from '../redux/hooks';
import { onOpen } from '../redux/slices/blockmodal';

const LeftPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[250px] overflow-hidden overflow-y-auto border-r border-navy-500 p-3 pb-[200px]">
      <div className="text-white font-semibold text-xs tracking-wider uppercase mb-5">
        Blocks
      </div>
      <Button
        className="flex gap-2 bg-transparent border border-navy-100 rounded-full hover:bg-navy-500 w-fit px-5"
        onClick={() => dispatch(onOpen())}
      >
        <Plus className="w-4 h-4" /> Add Block
      </Button>
    </div>
  );
};

export default LeftPanel;
