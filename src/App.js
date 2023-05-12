/*********************************
 ******|      App.js     |******
 *********************************/

import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Agenda from './components/AgendaO';

function App() {

  const nome = 'admin';
  const password = '123';

  return (
    <div>
     
      <Agenda/>
      

    </div>
  );
 
}

export default App;
