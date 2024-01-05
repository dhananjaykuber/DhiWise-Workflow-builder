import Papa from 'papaparse';

const useCSVData = () => {
  const readCSVData = async (fileName: string) => {
    try {
      const response = await fetch(`/csvs/${fileName}`);
      if (!response.ok) {
        throw new Error('Failed to read csv file');
      }

      const data = await response.text();

      // my logic
      const logicRes = new Promise((resolve, reject) => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            resolve(result.data);
          },
          error: (error: Error) => {
            console.error(error);
            reject(error);
          },
        });
      });

      return logicRes;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { readCSVData };
};

export default useCSVData;
