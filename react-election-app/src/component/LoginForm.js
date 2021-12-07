import Card from './Layout/Card'
import classes from './LoginForm.module.css'
import {Link} from 'react-router-dom'
import Recaptcha from 'react-google-recaptcha';
// ceci est le formulaire de login 
function onChange(){
  console.log("verified")
}
function LoginForm(){
    return(
     <Card>
         
    <form className={classes.form}>
        <div className={classes.introduction}>
            <text>Login</text>
        </div>
      <div className={classes.control}>
        <label htmlFor='cin'>CIN</label>
        <input type='text' required id='cin' />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Mot de passe</label>
        <input type='password' required id='password' />
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
    );
}export default LoginForm
