import React from 'react'
import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {



    
    const state = {
        'name': 'Avinash',
        'class': '5-Belowavg'
    }
    const [first, setFirst] = useState(state)
    const updateion = () => {
        setTimeout(() => {
            setFirst({
                'name': 'AvinashYesuri',
                'class': '5-Clever'
            })
        }, 2000)
    }



    const host = "http://localhost:5000"
    // const notesIntial = [
    //     {
    //         "id": "6936963696369",
    //         "user": "Avinash Sahu",
    //         "title": "My title",
    //         "description": "Pls wake me up early",
    //         "tag": "personal",
    //         "date": "2021-09-12",
    //         "_v": "0",
    //     },
    //     {
    //         "id": "6936963696364",
    //         "user": "Mukesh Sahu",
    //         "title": "My title",
    //         "description": "Pls wake me up early",
    //         "tag": "personal",
    //         "date": "2021-09-17",
    //         "_v": "5",
    //     },
    //     {
    //         "id": "6936963696365",
    //         "user": "ricky thomas",
    //         "title": "My title",
    //         "description": "Pls wake me up early",
    //         "tag": "personal",
    //         "date": "2021-09-26",
    //         "_v": "4",
    //     },
    //     {
    //         "id": "6936963696366",
    //         "user": "Suresh paandu",
    //         "title": "My title",
    //         "description": "Pls wake me up early",
    //         "tag": "personal",
    //         "date": "2021-09-15",
    //         "_v": "3",
    //     },
    //     {
    //         "id": "6936963696367",
    //         "user": "Aash Ripyt",
    //         "title": "My title",
    //         "description": "Pls wake me up early",
    //         "tag": "personal",
    //         "date": "2021-09-14",
    //         "_v": "2",
    //     },
    //     {
    //         "id": "6936963696368",
    //         "user": "mongia anawar",
    //         "title": "My title",
    //         "description": "Pls wake me up early",
    //         "tag": "personal",
    //         "date": "2021-09-13",
    //         "_v": "1",
    //     }
    // ]
    const notesIntial = []
    const [notes, setNotes] = useState(notesIntial)





    // GET ALL  all  NOTES 
    const getNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchNotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "jwtData": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YmRlNmNiYTM3Mzg0ZjA0ZTM2YjE4In0sImlhdCI6MTcxODM0NTczMH0.kLw0aWwNuWDGrahF53kbdh_KhOOxBeODPa78M2oCAIM'

            },
        });
       
        const json = await response.json();

    console.log(json + " GETTING all note" )
    setNotes(json)

    }





        // //add note

    // const addNote = (title, description, tag) => {
    //     console.log("adding a new note")
    //     const note = {
    //         "id": "6936963696371",
    //         "user": "komal sharma",
    //         "title": title,
    //         "description": description,
    //         "tag": "personal",
    //         "date": "2021-01-13",
    //         "_v": "1",
    //     }
    //     setNotes(notes.concat(note))
    //     //    setNotes(notes.push(note))  --------- it updates the array

    // }


     
    // ADD NOTES 
    const addNote = async (id, tag, title, description) => {
        const response = await fetch(`${host}/api/notes/addNotes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "jwtData": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YmRlNmNiYTM3Mzg0ZjA0ZTM2YjE4In0sImlhdCI6MTcxODM0NTczMH0.kLw0aWwNuWDGrahF53kbdh_KhOOxBeODPa78M2oCAIM'

            },
            body: JSON.stringify({title, description, tag})
        });
        // const json = await response.json();
        // console.log(json)
        // const note =json                                         // HARDCORED DATA ...........................
        // const note = await response.json();


        const note = await response.json();
        setNotes(notes.concat(note))                  //    setNotes(notes.push(note))  --------- it updates the array

    }






    //EDIT note

    const editNote = async (id, tag, title, description) => {


        const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "jwtData": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YmRlNmNiYTM3Mzg0ZjA0ZTM2YjE4In0sImlhdCI6MTcxODM0NTczMH0.kLw0aWwNuWDGrahF53kbdh_KhOOxBeODPa78M2oCAIM'

            },
            body: JSON.stringify(title, description, tag)
        });
   
        const json = await response.json(); 
        console.log(json)
let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index]
            if (element.id === id) {
                newNotes.title = title
                newNotes.description = description
                newNotes.tag = tag
                break;
            }
        }

        // USING HIGHER ORDER FUNCTIONALITY DONRE THIS FOR EDITING.........................................................
        // const newNotes = notes.map(note =>
        //     note.id === id ? { ...note, title, description, tag } : note
        // ); 
        // setNotes(newNotes);          
        setNotes(newNotes);



    }




  
    //delete note

    const deleteNote = async (id) => {
       
        const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "jwtData": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YmRlNmNiYTM3Mzg0ZjA0ZTM2YjE4In0sImlhdCI6MTcxODM0NTczMH0.kLw0aWwNuWDGrahF53kbdh_KhOOxBeODPa78M2oCAIM'

            },
        });
   
        const json = await response.json();
        console.log(json)

        console.log("delete a note" + id)

        const newDele = notes.filter((val) => {
            return val.id !== id
        })
        setNotes(newDele)


    }

    //uppercase
    const upperCase = () => {

    }
    //lowercase
    const lowerCase = () => {

    }

    const [mode, setMode] = useState("light")
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
            <NoteContext.Provider value={{ getNote, notes, setNotes, first, upperCase, lowerCase, updateion, editNote, deleteNote, addNote, mode, setMode, toggleMode }}>
                {props.children}
            </NoteContext.Provider>
        </>
    )
}

export default NoteState