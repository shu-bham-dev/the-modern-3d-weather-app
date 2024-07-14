// const url =  "weather?q=varanasi&appid=304c939ff86647d778efacce515fee8f";
const API_KEY = "304c939ff86647d778efacce515fee8f";
const baseUrl = "https://api.openweathermap.org/data/2.5/";
export const getWeatherData = async (infoType: string, searchParam: any) => {
  const url = new URL(infoType, baseUrl);
  // Build the query parameters as a URLSearchParams object
  const params = new URLSearchParams({ ...searchParam, appid: API_KEY });

  // Set the search string with the URLSearchParams object
  url.search = params.toString();

  // Now fetch the data with the constructed URL
  const response = await fetch(url.toString());

  const data = await response.json(); // Parse the JSON response
  return data; // Return the fetched data
};

export const getFormatedData = async (infoType: string, searchParam: any) => {
  const getFormatedData = await getWeatherData(infoType, searchParam);
  //   const aaa = await getFormatedData.json();
  console.log(getFormatedData, "data");
  return getFormatedData;
};
