import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import RestaurantList from './components/RestaurantList'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBarMenu from './components/NavBarMenu' 
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <div className="">
      <Router>

      
        <NavBarMenu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <ProtectedRoutes path='/' component={<Home />} /> */}
          <Route path='/list' element={<ProtectedRoutes ><RestaurantList /></ProtectedRoutes>}></Route>
          <Route path='/detail' element={<RestaurantDetail />}></Route>
          <Route path='/create' element={<RestaurantCreate />}></Route>
          <Route path='/search' element={<RestaurantSearch />}></Route>
          <Route path='/update/:id' element={ <RestaurantUpdate/>}></Route>
          <Route path='/login' element={ <Login/>}></Route>
          <Route path='/logout' element={ <Logout/>}></Route>
        
        </Routes>


      </Router>
    </div>
  );
}

export default App;
