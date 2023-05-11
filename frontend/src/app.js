import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topBar';
import Home from './pages/home';
import SideBar from './components/sideBar';

const App = () => {
  return ( 
    <Router>
    <TopBar />
    <div className='container'>
      <SideBar/>
        <Routes>
          <Route path ='/' element = {<Home />} />
        </Routes>
    </div>
    </Router>
   );
}
 
export default App;