
import LoginPage from "./pages/LoginPage";
import {Route,Routes} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
// routes permet d'attribuer un url à chaque component
function App() {
  return (
    <div >
      <Routes>
      <Route exact path='/' element={<LoginPage/>} />
      <Route exact path='/register' element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
