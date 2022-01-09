import classes from './AppBar.module.css';
// la bar de navigation 
function AppBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Election app</div>
    </header>
  );
}

export default AppBar;