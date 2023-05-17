import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home';
import Profile from './pages/profile';
import Register from './pages/register';
import Login from './pages/login';
import PrivateRoute from './components/privateRoute';

const App = () => {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

        </Routes>
    </Router>

      <ToastContainer />
    </>

   );
}
 
export default App;