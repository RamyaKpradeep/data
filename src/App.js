import {Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import UserList from './UserList';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/UserList' element={<UserList/>} />
        
        </Routes>

      
      <Footer/>
    </div>
  );
}

export default App;