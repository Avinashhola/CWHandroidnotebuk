// import './App.css';
// import Home from './Components/Home';
// import About from './Components/About';
// import Navbar from './Components/Navbar';
// import {
// BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";
// import { useState } from 'react';




// function App() {

// const [stae1,setStae1]  =useState('hero')
// const changeState = () => {
//   // Example of changing the state
//   setStae1('new value');
// };
//   return (

// <>
// <Router>
//           <h1 className='text-center m-2'>This is avinash android notebuk</h1>
//       <Navbar />

//         <Routes>
//         <Route exact path="/Home"  element=
//         {<Home props1={"Props can call by giving directly string val or by state"} props2={'2nd way of calling by state as in line 34 or having a button line 38'} 
//         prop3={stae1} changeState={changeState} />}  />     
//         <Route exact path="/About" element={<About/>} />
//         </Routes>
//       </Router>
//       <button onClick={changeState}>Change State</button> 



// </>
//   );
// }

// export default App;

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import NoteState from './Contexts/Notes/NoteState';
import LandingPage from './Components/LandingPage';
function App() {




  
  return (
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </Router>
      </NoteState>


  
  );
}

export default App;