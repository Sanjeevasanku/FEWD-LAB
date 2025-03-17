import logo from './logo.svg';
import './App.css';

function App() {

  let message;
  const isLogged=true;

  if(isLogged){
    message="Welcome, user!"
  }
  else{
    message="Please log in"
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      {isLogged?<p>You have access to dashboard</p>:<p>Access denied</p>}
    </div>
  );
}

export default App;
