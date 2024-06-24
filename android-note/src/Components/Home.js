// import React from 'react';

// const Home = (props) => {
//   return (
//     <div>
//       Home
//       {/* <h6>{props.props1}</h6>
//       <p>{props.props2}</p>
//       <p>{props.prop3}</p>
//       <button onClick={props.changeState}>Change State</button> */}
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import NotesMain from './NotesMain';
import AddNotes from './AddNotes';


const Home = (props) => {

  
  return (
    <div className='container my-3'>
      <AddNotes />
      <NotesMain />
    </div>
  );
};

export default Home;



