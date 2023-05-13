 import './headerCss.css';
 import {Link} from 'react-router-dom';
 
 function Header() {
    return (
      <header class = "header">
        <h4 > Capybara</h4>
        <div>
           <Link to="/agenda">Home</Link>
           <Link to="/sobre">Sobre Nós</Link>
        </div>
      </header>
    );
  }
  export default Header;
  