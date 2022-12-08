import logo from './logo.svg';
import {message}  from './components/message/Message'
import './App.css';


function App () {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span>{message.text}</span>
          <span> {message.name}</span>
          <p>{message.surname}</p>
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
