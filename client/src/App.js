import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
// Routes is the list of all the possible routes
// Route is used for checking the url
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';


function App() {
  return (
    <>
      <Routes>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Policy' element={<Policy/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        {/* Here * means that whenever anything except for mentioned routed are called this page not found will be displayed */}
        
      </Routes>
    </>
  );
}

export default App;
