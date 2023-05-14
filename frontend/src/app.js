import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Register from './pages/register';
import Login from './pages/login';

const App = () => {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

        </Routes>
    </Router>


    </>

   );
}
 
export default App;