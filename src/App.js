import './App.css';
import AlbumList from './Components/AlbumList';

import WeatherDetails from './Components/WeatherDetails';

import EffectComp from './Components/EffectComp';

function App() {
  const stl={
    textAlign:"center"
  }
  return (
    <div className="App">
        <h2 style={stl}>Side Effect Test</h2>
      <EffectComp />
      <h2 style={stl}>Weather Card</h2>
      
      <WeatherDetails />
      <h2 style={stl}>Album List</h2>
      <AlbumList />
    </div>
  );
}

export default App;
