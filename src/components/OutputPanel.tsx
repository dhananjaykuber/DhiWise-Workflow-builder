import { FC, useState } from 'react';

const OutputPanel: FC = () => {
  const [height, setHeight] = useState<number>(200);

  const handleDrag = (e: MouseEvent) => {
    setHeight(window.innerHeight - e.clientY);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 overflow-y-auto border-t border-navy-500 z-10 bg-navy-700"
      style={{ maxHeight: `400px`, minHeight: '50px', height: `${height}px` }}
      onMouseDown={(e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', () =>
          document.removeEventListener('mousemove', handleDrag)
        );
      }}
    >
      <p className="text-white border-b border-b-navy-500 p-1 uppercase text-xs font-medium tracking-wider">
        Output
      </p>
    </div>
  );
};

export default OutputPanel;
