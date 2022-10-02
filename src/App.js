import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Nataliia Ivanchak and is {" "}
          <a
            href="https://github.com/Nataliiv/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

 
