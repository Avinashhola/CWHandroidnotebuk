import React from 'react'
import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {

const state={
    'name':'Avinash',
    'class':'5-Belowavg'
}
const [first, setFirst] = useState(state)


const updation =()=>{
    setTimeout(()=>{
         setFirst({
               'name':'AvinashYesuri',
               'class':'V b'
         })       
    }, 2000)
}
// const updateion=()=>{
//    setTimeout(()=>{
//     setFirst({
//         'name':'AvinashYesuri',
//         'class':'5-Clever'
//     })
//    },2000)
// }




const notesIntial =[
    {
        "id":"6936963696369",
        "user":"Avinash Sahu",
        "title":"My title",
        "description":"Pls wake me up early",
        "tag":"personal",
        "date":"2021-09-12",
        "_v":"0",
    },
    {
        "id":"6936963696364",
        "user":"Mukesh Sahu",
        "title":"My title",
        "description":"Pls wake me up early",
        "tag":"personal",
        "date":"2021-09-17",
        "_v":"5",
    },
    {
        "id":"6936963696365",
        "user":"ricky thomas",
        "title":"My title",
        "description":"Pls wake me up early",
        "tag":"personal",
        "date":"2021-09-26",
        "_v":"4",
    },
    {
        "id":"6936963696366",
        "user":"Suresh paandu",
        "title":"My title",
        "description":"Pls wake me up early",
        "tag":"personal",
        "date":"2021-09-15",
        "_v":"3",
    },
    {
        "id":"6936963696367",
        "user":"Aash Ripyt",
        "title":"My title",
        "description":"Pls wake me up early",
        "tag":"personal",
        "date":"2021-09-14",
        "_v":"2",
    },
    {
        "id":"6936963696368",
        "user":"mongia anawar",
        "title":"My title",
        "description":"Pls wake me up early",
        "tag":"personal",
        "date":"2021-09-13",
        "_v":"1",
    }
]

const [notes, setNotes] = useState(notesIntial)



//add note

const addNote =(title,description, tag)=>{
    console.log("adding a new note")
    const note= {
        "id":"6936963696371",
        "user":"komal sharma",
        "title":title,
        "description":description,
        "tag":"personal",
        "date":"2021-01-13",
        "_v":"1",
    }
      setNotes(notes.concat(note))
//    setNotes(notes.push(note))  --------- it updates the array

}
//edit note
const editNote =()=>{
    return ;
}
//delete note

const deleteNote =(id)=>{
    console.log("delete a note" + id)

    const newDele = notes.filter((val)=>{
        return  val.id !== id
    })
    setNotes(newDele)
}

//uppercase
const upperCase=()=>{

}
//lowercase
const lowerCase=()=>{
    
}

const [mode,setMode] = useState("light")
const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = 'white'
    //   showAlert(" Light mode is Enabled", "success")
      document.title = "NOTEBUK---LIGHTMODE"
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = 'grey'
    //   showAlert(" Dark mode is Enabled", "success")
      document.title = "NOTEBUK---DARKMODE"
    }

  }


  return (
   <>
    <NoteContext.Provider value={{notes,setNotes,first,upperCase,lowerCase, updation, editNote, deleteNote, addNote, mode, setMode, toggleMode}}>
        {props.children}
    </NoteContext.Provider>
   </>
  )
}

export default NoteState