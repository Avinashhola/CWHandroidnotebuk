import React, { useContext } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'

const LandingPage = () => {

const {mode} = useContext(NoteContext)



  return (
    <div className='container text-center'>
           <h1 className={`text-center m-2 text-${mode === "light"? "grey":"white"}`}>This is avinash android notebuk</h1>
    </div>
  )
}

export default LandingPage