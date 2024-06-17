import { React, useContext,useEffect } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'
// import { useEffect } from 'react'
const About = () => {
  const noteContext= useContext(NoteContext)
  useEffect(() => {
    noteContext.updation();
  }, [])
  const {mode,first} = noteContext
  return (
    <div className={`text-${mode === "light"? 'black':'white'} m-4 `}>This is about the student <span  className='fw-bolder bg-warning'>{first.name}</span> who is studying in the class <span  className='fw-bolder text-warning'>{first.class}</span></div>

  )
}

export default About