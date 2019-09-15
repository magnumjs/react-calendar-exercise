import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar"

const App: React.FC = () => {
  return (
      <div className="App">
          <header>
              <div id="logo">
                  <img src={logo} className="App-logo" alt="logo" />

                  <span className="icon">date_range</span>
                  <span>
              react<b>calendar</b>
            </span>
              </div>
          </header>
          <main>
              <Calendar />
          </main>
      </div>
  );
}

export default App;
