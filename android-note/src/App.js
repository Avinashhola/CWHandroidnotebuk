import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import About from './componenets/About';
import NoteState from './Contexts/Notes/NoteState';
function App() {
  return (
    // if we dont wrap content or routers iside the notestate like usecontext file it will never work  
    <NoteState> 
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path = "/" element = {<>Hi am avinash yesuri this is android notebook app</>}/>

        <Route exact path = "/Home" element = {<Home/>}/>
        <Route exact path = "/about" element = {<About/>}/>

    </Routes>

    </Router>
    </NoteState>
  );
}

export default App;
