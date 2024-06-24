import { useContext,useEffect } from 'react';
import NoteContext from '../Contexts/Notes/NoteContext';
import NotesItem from './NotesItem';
import './Notes.css'; // Import the CSS file
const NotesMain = () => {


    const { notes, setNotes,mode ,toggleMode,getNote } = useContext(NoteContext);
    useEffect(()=>{
        getNote()
    },[])
    return (

        <div className='row my-3 '>
            <h3 className ={`text-${mode === "light"? 'black':'white'} m-4 ` }>Your Note</h3>
            {notes.map((ele) => {
                return <NotesItem key={ele.id} usingProps={ele} />

            })}
        </div>
    )
}

export default NotesMain






// Understanding Object Destructuring
// Object destructuring is a convenient way to extract values from objects. Consider the following object:

// javascript
// Copy code
// const obj = { a: 1, b: 2, c: 3 };
// If you want to extract the values of a and b, you can do it like this:

// javascript
// Copy code
// const { a, b } = obj;
// console.log(a); // 1
// console.log(b); // 2
// In the context of your React application, the value returned by useContext(NoteContext) is an object:

// javascript
// Copy code
// const contextValue = { notes, setNotes, first, updateion };
// By using destructuring, you directly extract notes and setNotes:

// javascript
// Copy code
// const { notes, setNotes } = useContext(NoteContext);
// This allows you to use notes and setNotes directly in your component.

// Summary
// Provider: NoteState provides state and functions to its children via NoteContext.Provider.
// Consumer: Home uses the useContext hook to access and destructure the values provided by the context.
// By ensuring you're correctly destructuring the context values, you avoid the issue of trying to access properties on undefined, which was the cause of your error.






