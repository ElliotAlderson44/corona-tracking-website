import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api/index";
import image from './components/image.png';
class App extends React.Component {
  //! we can also create state like this mean without constructors
  state = {
    data: {},
    country:''
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  onHandleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData,country:country })
  }

  render() {
    const { data , country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19"  />
        <Cards data={data} />
        <CountryPicker onHandleCountryChange={this.onHandleCountryChange} />
        <Charts   data={data} country={country} />
      </div>
    );
  }
}

export default App;
