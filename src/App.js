/*********************************
 ******|      App.js     |******
 *********************************/

import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {

  const nome = 'admin';
  const password = '123';

  return (
    <div>
     
      <Login UserID={nome} senha={password} />
      

    </div>
  );
 
}

export default App;
