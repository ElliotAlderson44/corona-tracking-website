import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;

  }
  try {
    //! this is called the best dig destructuring
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeableUrl);
    // const modefiedData = {
    //   confirmed,
    //   deaths,
    //   recovered,
    //   lastUpdate,
    // };
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
export const fetchCountriesData = async () => {
  try {
    const {data:{countries}} = await axios.get(`${url}/countries`);
    return countries.map(mulk => mulk.name)
  } catch (err) {
    console.log(err);
  }
};
