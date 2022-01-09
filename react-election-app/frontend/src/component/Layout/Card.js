import classes from './Card.module.css';
//permet de mettre les component enfant dans une carte 
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;