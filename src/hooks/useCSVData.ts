const useCSVData = () => {
  const readCSVData = async (fileName: string) => {
    try {
      const response = await fetch(`/csvs/${fileName}`);
      if (!response.ok) {
        throw new Error('Failed to read csv file');
      }

      const data = await response.text();

      // parsing data in array of objects
      const parsedData = data.split('\n').map((row) => row.split(','));
      const headers = parsedData[0];
      const objectsArray = parsedData.slice(1).map((row) => {
        const rowData: any = {};
        headers.forEach((header, index) => {
          rowData[header] = row[index];
        });
        return rowData;
      });

      return objectsArray;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { readCSVData };
};

export default useCSVData;
