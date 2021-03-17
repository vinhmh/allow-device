import logo from './logo.svg';
import './App.css';

function App() {
    navigator.permissions.query({name: 'microphone'})
  .then((permissionObj) => {
    console.log(permissionObj.state); 
    if(permissionObj.state == 'denied' ){ }
    // else if (permissionObj.state === 'prompt') alert('You let me use your mic!')
  })
  .catch((error) => {
    console.log('Got error :', error);
  })

  navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
      })
      .catch(function(err) {
        if (err.message === "Requested device not found") alert('The microphone cannot be found, please install microphone!')
        if (err.message === "Permission denied") alert('Your microphone has been blocked from browser, Please click on the lock icon in the upper left then select allow and reload page to use microphone!')
        console.log(err.message)
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
