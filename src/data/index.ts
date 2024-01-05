export const CSVData = [
  {
    text: 'annual-enterprise-survey-2021.csv',
  },
  {
    text: 'bankloan.csv',
  },
  {
    text: 'color_srgb.csv',
  },
  {
    text: 'currency.csv',
  },

  {
    text: 'state_us.csv',
  },
];

export const Conditions = {
  number: [
    { text: 'number equals' },
    { text: 'number is greater than' },
    { text: 'number is greater than or equals' },
    { text: 'number is less than' },
    { text: 'number is less than or equals' },
    { text: 'data is not empty or null' },
    { text: 'data matches regex' },
  ],
  string: [
    { text: 'text is exactly' },
    { text: 'text is not exactly' },
    { text: 'text includes' },
    { text: 'text does not includes' },
    { text: 'data is not empty or null' },
    { text: 'data matches regex' },
  ],
};

export const blocksLibrary = [
  {
    title: 'Input',
    blocks: [
      {
        title: 'File',
        type: 'fileNode',
        desc: 'Handles csv files.',
        input: 'Dataset (csv file)',
        output: 'Dataset, csv or json',
      },
    ],
  },
  {
    title: 'Transforms',
    blocks: [
      {
        title: 'Filter',
        type: 'filterNode',
        desc: 'Filter a dataset based on a given column and condition',
        input: 'Dataset',
        output: 'Dataset',
      },
      {
        title: 'Sort',
        type: 'sortNode',
        desc: 'Sort dataset based on a given column.',
        input: 'Dataset ',
        output: 'Dataset',
      },
      {
        title: 'Slice',
        type: 'sliceNode',
        desc: 'Slice a dataset based on indices.',
        input: 'Dataset ',
        output: 'Dataset',
      },
      {
        title: 'Find',
        type: 'findNode',
        desc: 'Find first occurance of value in given column of dataset.',
        input: 'Dataset ',
        output: 'Dataset',
      },
    ],
  },
];
