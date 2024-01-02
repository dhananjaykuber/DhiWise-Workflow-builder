import { FC } from 'react';

interface BlockProps {
  type: string;
  desc: string;
  input?: string;
  output?: string;
}

const Block: FC<{ data: BlockProps }> = ({ data }) => {
  return (
    <div className="p-3 rounded-md bg-navy-500 border border-transparent hover:scale-105 hover:border-navy-300 transition cursor-pointer">
      <div className="text-white font-semibold">{data.type}</div>
      <div className="text-gray-300 font-light tracking-wider text-xs my-2 mb-4">
        {data.desc}
      </div>
      <div className="text-gray-300 font-light tracking-wider text-xs">
        <p>Input:- {data.input}</p>
        <p>Output:- {data.output}</p>
      </div>
    </div>
  );
};

export default Block;
