import { useContext, useEffect,useRef,useState } from 'react';
import NoteContext from '../Contexts/Notes/NoteContext';
import NotesItem from './NotesItem';
import './Notes.css'; // Import the CSS file
const NotesMain = () => {

    const { notes, setNotes, mode, toggleMode, getNote, editNote} = useContext(NoteContext);

    useEffect(() => {
        getNote()
        //eslint-disable-next-line
    }, [])
    const ref= useRef(null)
    const refClose= useRef(null)
    const [firstAdd, setfirstAdd] = useState({id:"",etitle:"", edescription:"", etag:""})
    const updateNote = (currentNote) => {
        ref.current.click()
        setfirstAdd({id:currentNote.id ,etitle:currentNote.title, edescription:currentNote.edescription,  etag:currentNote.etag})
    }


    const onChange=(e)=>{
        setfirstAdd({...firstAdd, [e.target.name]:e.target.value})
    }
    const addOverClick=(e)=>{
        editNote(firstAdd.id, firstAdd.etitle, firstAdd.edescription, firstAdd.etag)

        refClose.current.click()
    }

    return (
        <>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className = "btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className = "modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className = "modal-dialog">
                    <div className = "modal-content">
                        <div className = "modal-header">
                            <h5 className = "modal-title" id="exampleModalLabel">Edit note</h5>
                            <button type="button" className = "btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className = "modal-body">
                           <form className="my-3">
                    
                        <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={firstAdd.etitle} aria-describedby="emailHelp" onChange={onChange}/>
                
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription"  name="edescription"  value={firstAdd.edescription} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">tag</label>
                    <input type="text" className="form-control" id="etag"  name="etag" value={firstAdd.etag} onChange={onChange}/>
                </div>
                {/* <button type="submit" className="btn btn-primary mx-2" onClick={addOverClick}>AddNote</button> */}

                </form>

                        </div>
                        <div className = "modal-footer">
                            <button  ref={refClose} type="button" className = "btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button onClick={addOverClick}  disabled={firstAdd.etitle.length<5 || firstAdd.edescription.length<5} type="button" className = "btn btn-primary">update</button>
                        </div>
                    </div>
                </div>
            </div>









            <div className='row my-3 '>
                <h3 className={`text-${mode === "light" ? 'black' : 'white'} m-4 `}>Your Note</h3>
               <div className='container mx-4'>
                {notes.length === 0 && 'No notes to display'}
               </div>
                {notes.map((ele) => {
                    return <NotesItem key={ele.id} updateNote={updateNote} usingProps={ele} />

                })}
            </div>
        </>

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






