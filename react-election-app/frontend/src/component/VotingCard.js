import Card  from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.css'
import MiniCardLayout from "./Layout/MiniCardLayout"
import axios from "axios"
function VotingCard(props){
     var cin = props.cin
    function voteHandler(){
        alert("avec succés")
    }
    return(
    <MiniCardLayout>
        <Card>
    <Card.Header>Candidat</Card.Header>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        Si vous voulez voter à ce candidat, veuillez appuyer sur le bouton 
      </Card.Text>
      <Button variant="success" onClick={voteHandler}>Votez !!</Button>
    </Card.Body>
        </Card>
  </MiniCardLayout>
    ) 
    
}
export default VotingCard