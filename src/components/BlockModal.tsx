import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { onClose } from '../redux/slices/blockmodal';
import Block from './Block';
import Modal from './Modal';

const blocksLibrary = [
  {
    title: 'Input',
    blocks: [
      {
        type: 'File',
        desc: 'Handles csv, json or geojson files.',
        input: '',
        output: 'Dataset, Geojson',
      },
    ],
  },
  {
    title: 'Transforms',
    blocks: [
      {
        type: 'Filter',
        desc: 'Group a dataset based on a given column name.',
        input: '',
        output: 'Dataset',
      },
      {
        type: 'Sort',
        desc: 'Sort data based on a given column.',
        input: 'Dataset ',
        output: 'Dataset',
      },
    ],
  },
];

const BlockModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((store) => store.blockModal);

  return (
    <Modal isOpen={isOpen} onChange={() => dispatch(onClose())}>
      <div className="text-white font-medium text-lg">Blocks</div>
      {blocksLibrary?.map((library) => (
        <div className="mt-5" key={library.title}>
          <div className="uppercase text-white text-xs tracking-wider font-medium">
            {library.title}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-3">
            {library.blocks?.map((block) => (
              <Block key={block.type} data={block} />
            ))}
          </div>
        </div>
      ))}
    </Modal>
  );
};

export default BlockModal;
