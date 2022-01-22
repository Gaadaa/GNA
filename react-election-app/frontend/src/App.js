
import LoginPage from "./pages/LoginPage";
import {Route,Routes} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
import VotingPage from "./pages/VotingPage";
import {LoginContext} from "./Helper/Context"
import { useState } from "react";
// routes permet d'attribuer un url à chaque component
function App() {
  const [LoggedIn,setLoggedIn] = useState(false)
  return (
    <LoginContext.Provider value={{LoggedIn,setLoggedIn}} >
      <Routes>
      <Route exact path='/' element={<LoginPage/>} />
      <Route exact path='/register' element={<RegisterPage/>} />
      <Route exact path='/votingSpace' element={<VotingPage/>} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
