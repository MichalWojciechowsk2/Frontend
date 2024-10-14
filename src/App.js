import logo from "./logo.svg";
import "./App.css";
import { data } from "./module-data";
import CarProfile from "./components/CarProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Car List</h1>
        {data.map((car) => (
          <CarProfile key={car.id} car={car} />
        ))}
      </header>
    </div>
  );
}

export default App;
