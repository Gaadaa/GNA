
import ClientBar from "../component/Layout/ClientBar"
import VotingCard from "../component/VotingCard"
import {useEffect } from 'react'
import axios from "axios";
function VotingPage(props){
    function onLoad(){
        axios.get("https://gnaserver.herokuapp.com/candidats",{}).then(result=>{

      alert(toString(result.data))  
      console.log("la fonction marche ")  
        })
    }
  // const  [state,setState]=useState(null)
   
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
        
          
      },[]);
     // if(!state) return(<div>ça n'a pas marché </div>)
onLoad()
return <div>
    
    <ClientBar/>
    <VotingCard title="nihel dakhlaoui" cin="22222222" cin_user={props.cin}/>
    <VotingCard title="amine mouhamed" cin="55554444" cin_user={props.cin}/>
</div>
}
export default VotingPage