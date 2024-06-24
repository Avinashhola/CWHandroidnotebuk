import { React, useContext } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'
import { useEffect } from 'react'

const About = () => {
  const a = useContext(NoteContext)
  useEffect(() => {
    a.updateion();
  }, [])

const {mode} = useContext(NoteContext)

  return (

    <div className={`text-${mode === "light"? 'black':'white'} m-4 ` }>This is about <span className='fw-bolder'>{a.first.name}</span> who is in the class <span className='fw-bolder'>{a.first.class}</span></div>
  )
}

export default About