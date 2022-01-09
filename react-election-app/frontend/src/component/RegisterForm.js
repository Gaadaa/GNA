import Card from './Layout/Card'
import classes from './RegisterForm.module.css'
import Recaptcha from 'react-google-recaptcha';
import {useState,useRef} from 'react'
import axios from 'axios';
import VotingPage from '../pages/VotingPage';
import Layout from './Layout/Layout';
import AppBar from './Layout/AppBar';

  
function RegisterForm(){
    const [isVerified,setIsVerified]= useState(false)
    const [isCorrect,setIsCorrect]= useState(false)
    const [isChecked,setIsChecked]=useState(false)
    const [isOpen,setIsOpen]=useState(true)
 const [inputed_cin,setInputed_cin]=useState("")
 const [inputed_token,setInputed_token]=useState("")
    const pwd_reg = useRef()
    const confpwd_reg = useRef()
    const nom_reg = useRef()
    const prenom_reg = useRef()
    const cin_reg = useRef()
 function onChange(){
  setIsVerified(true)
}
function OnCheckHandler(){
      setIsChecked(!isChecked)
    }
function SubmitHandler(event){
event.preventDefault()
var pwd_submitted = pwd_reg.current.value
var nom_submitted = nom_reg.current.value
var prenom_submitted = prenom_reg.current.value
var cin_submitted = cin_reg.current.value
if (pwd_reg.current.value===confpwd_reg.current.value){
    setIsCorrect(true)
}
else alert("vérifiez votre mot de passe")
if(!isVerified){
    alert("veuillez indiquer que vous n'êtes pas un robot")
}
else if(isCorrect&&isVerified&&!(isChecked)){
      axios.post("http://localhost:3001/register_electeur",{
            cin:cin_submitted,
        mot_de_passe:pwd_submitted,
      prenom:prenom_submitted,
      nom:nom_submitted
      }).then(result=>{
            if (result.data.message){
                  alert(result.data.message)
            }
            else{
                  if(result.data.token){
                        setInputed_cin(cin_submitted)
                        setInputed_token(result.data.token)
                        setIsOpen(false)    
                  }
                  
            }
      })
}
else if(isCorrect&&isVerified&&isChecked){
      axios.post("http://localhost:3001/inscription_candidat",{
            cin:cin_submitted,
        mot_de_passe:pwd_submitted,
      prenom:prenom_submitted,
      nom:nom_submitted
      }).then(result=>{
            if (result.data.message){
                  alert(result.data.message)
            }
            else{
                  if(result.data.token)
                  setInputed_cin(cin_submitted)
                  setInputed_token(result.data.token)
                  setIsOpen(false)
            
            }
      })
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
                  <text>Inscription</text>
              </div>
              <div className={classes.control}>
                  <label htmlFor='cin'>CIN</label>
                  <input type='text' required id='cin'ref={cin_reg} />
            </div>
            <div className={classes.control}>
                  <label htmlFor='nom'>Nom</label>
                  <input type='text' required id='nom'ref={nom_reg} />
            </div>
            <div className={classes.control}>
                  <label htmlFor='prenom'>Prénom</label>
                  <input type='text' required id='prenom'ref={prenom_reg} />
            </div>
            <div className={classes.control}>
                  <label htmlFor='password'>Mot de passe</label>
                  <input type='password' required id='password' ref={pwd_reg}/>
            </div>
            <div className={classes.control}>
                  <label htmlFor='confirmpassword'>Confirmer votre mot de passe</label>
                  <input type='password' required id='confirmpassword' ref={confpwd_reg}/>
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
              <button>S'inscrire</button>
            </div>
      </form>
      </Card>
      </Layout> 
      </section>
      )
}
else{
      return (
            <VotingPage cin={inputed_cin} token={inputed_token} />
          );
}
}
export default RegisterForm