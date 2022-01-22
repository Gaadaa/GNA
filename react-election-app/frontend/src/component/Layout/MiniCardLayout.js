import classes from './MiniCardLayout.module.css';

function MiniCardLayout(props) {
    return (
      <div>
        <main className={classes.main}>{props.children}</main>
      </div>
    );
  }
  export default MiniCardLayout