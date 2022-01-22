import Card from './Layout/Card'
import classes from './LoginForm.module.css'
import {Link} from 'react-router-dom'
import Recaptcha from 'react-google-recaptcha';
import {useState,useRef} from 'react'
import axios from 'axios';
import VotingPage from '../pages/VotingPage';
import Layout from './Layout/Layout'
import AppBar from './Layout/AppBar'
//import { LoginContext } from '../Helper/Context';
// ceci est le formulaire de login 

function LoginForm(){
  //const {LoggedIn,setLoggedIn} = useContext(LoginContext)
 const [isVerified,setIsVerified]= useState(false)
 const [isChecked,setIsChecked]=useState(false)
 const [isOpen,setIsOpen]=useState(true)
 const [inputed_cin,setInputed_cin]=useState("")
 const [inputed_token,setInputed_token]=useState("")

 const cin = useRef()
 const mot_de_passe = useRef()

 function onChange(){
  setIsVerified(true)
} 
function OnCheckHandler(){
  setIsChecked(!isChecked)
}
function SubmitHandler(event)
{
  
  event.preventDefault()
  if(!isVerified)
  {
    alert("veuillez indiquer que vous n'êtes pas un robot")
  } 
else if(!(isChecked)&&isVerified){
      axios.post("https://gnaserver.herokuapp.com/login_electeur",{
        cin:cin.current.value,
        mot_de_passe:mot_de_passe.current.value
          }).then(result =>{
            console.log(result)
            if (result.data.message){
              alert(result.data.message)
            }else {            
            setInputed_cin(cin.current.value)
            setInputed_token(result.data.token)
            setIsOpen(false)
            

            }
           
          }).catch(err=>{console.log(err)})
    }
    else if(isChecked&&isVerified){
      axios.post("https://gnaserver.herokuapp.com/login_candidat",{
        cin:cin.current.value,
        mot_de_passe:mot_de_passe.current.value
          }).then(result =>{
            console.log(result)
            if (result.data.message){
              alert(result.data.message)
            }else {
            setInputed_cin(cin.current.value)
            setInputed_token(result.data.token)
            setIsOpen(false)
                  }
          }).catch(err=>{console.log(err)})
    }

} 
 if(isOpen){
  return(
    <section>
      <AppBar/>
    <Layout>
    <Card>
   <form className={classes.form} onSubmit={SubmitHandler}>
       <div className={classes.introduction}>
           <text>S'authentifier</text>
       </div>
     <div className={classes.control}>
       <label htmlFor='cin'>CIN</label>
       <input type='text' required id='cin' ref={cin}/>
     </div>
     <div className={classes.control}>
       <label htmlFor='password'>Mot de passe</label>
       <input type='password' required id='password' ref={mot_de_passe}/>
     </div>
     <div >
     <label>
         je suis un candidat 
         <input
           name="isGoing"
           type="checkbox"
           size="big"
           onChange={OnCheckHandler}
            />
       </label> 
     </div>
     <div className={classes.divrec}>
       <div className={classes.recaptcha}>
         <Recaptcha
   sitekey="6LdPF4QdAAAAAKfLUAYCnjzLsOqQ6l9lflNGTuR5"
   onChange={onChange}
 />,
       </div>
 </div>
     <div className={classes.actions}>
       <button>Se connecter</button>
     </div>
     <div className={classes.link} >
       <text>Si vous n'avez pas de compte veuillez cliquer <Link to='/register'>ici</Link></text>
     </div>
   </form>
 </Card>
 </Layout>
 </section>
   );
 }
    else{
      return (
        <VotingPage cin={inputed_cin} token={inputed_token} />
      );
    }
}export default LoginForm
