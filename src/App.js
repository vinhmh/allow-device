import logo from './logo.svg';
import './App.css';

function App() {
  navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        alert('You let me use your mic!')
      })
      .catch(function(err) {
        alert('No mic for you!')
      });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
