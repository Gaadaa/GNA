import classes from './ClientBar.module.css';
import { Link } from 'react-router-dom';
// la bar de navigation 
//<li>  <Link to='/'>All MeetUp</Link></li>
function ClientBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Election app</div>
      <nav>
            <ul>
                
                <li> <Link to='/'>Vote</Link> </li>
                <li>  <Link to='/'>Statistique</Link></li>
                <li>  <Link to='/'>Quitter</Link></li>
            </ul>
            </nav>
    </header>
  );
}

export default ClientBar;