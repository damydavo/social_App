import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home';
import Profile from './pages/profile';
import Register from './pages/register';
import Login from './pages/login';

const App = () => {
  return ( 
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

        </Routes>
    </Router>

      <ToastContainer />
    </>

   );
}
 
export default App;