import { FC } from 'react';
import Button from './Button';
import Table from './Table';

const OutputPanel: FC = () => {
  return (
    <div className="h-full border-t border-navy-500 z-10 bg-navy-700">
      <div className="flex gap-2 w-[100%] items-center border-b border-b-navy-500 p-1">
        <p className="text-white uppercase text-xs font-medium tracking-wider">
          Output
        </p>
        <Button className="w-fit p-1 text-xs font-semibold hover:bg-navy-400">
          Export
        </Button>
      </div>

      <div className="overflow-y-auto h-[100vh] pb-[300px]">
        <Table />
      </div>
    </div>
  );
};

export default OutputPanel;
