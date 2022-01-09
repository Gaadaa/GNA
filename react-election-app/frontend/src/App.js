
import LoginPage from "./pages/LoginPage";
import {Route,Routes} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
import VotingPage from "./pages/VotingPage";
// routes permet d'attribuer un url à chaque component
function App() {
  return (
    <div >
      <Routes>
      <Route exact path='/' element={<LoginPage/>} />
      <Route exact path='/register' element={<RegisterPage/>} />
      <Route exact path='/votingSpace' element={<VotingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
