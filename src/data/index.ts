export const CSVData = [
  // {
  //   text: 'annual-enterprise-survey-2021.csv',
  // },
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
    { text: 'number is less than or equals ' },
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
