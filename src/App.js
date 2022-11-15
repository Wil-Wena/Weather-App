import './App.css';
import Entry from './components/Entry';
import Forecast from './components/Forecast';
import TempDetails from './components/TempDetails';
import TimeLocation from './components/TimeLocation';
import TopButtons from './components/TopButtons';
import getWeatherData from './services/Weather';

function App() {

  const fetchWeather =async  () =>{
   const data = await getWeatherData('weather', { q: 'Accra' });
   console.log(data);
  };

  fetchWeather();

  return (

    //Bigger div containing the size of the container
      <div className='text-3xl mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        <TopButtons />
        <Entry/>
        <TimeLocation/>
        <TempDetails/>
        <Forecast title="Hourly Forecast"/>
        <Forecast title="Daily Forecast"/>

      </div>
  );
}

export default App;
