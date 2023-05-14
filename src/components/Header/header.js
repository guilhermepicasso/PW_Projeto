 import './header.css';
 import {Link} from 'react-router-dom';
 
 function Header() {
    return (
      <header class = "header">
        <h4 class = "h4-header"> CapNotion</h4>
        <div>
           <Link to="/agenda">Home</Link>
           <Link to="/sobre">Sobre Nós</Link>
        </div>
      </header>
    );
  }
  export default Header;
  