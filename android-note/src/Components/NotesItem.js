// import React, { useContext, useState } from 'react'
// import NoteContext from '../Contexts/Notes/NoteContext'

// const NotesItem = (props) => {

//     const { deleteNote, mode } = useContext(NoteContext)

//     const { usingProps } = props
//     const delteOvrClick = (e) => {
//         e.preventDefault();
//         deleteNote(usingProps.id)
//     }
//     // Consolidated state for all text elements
//     const [text, setText] = useState({
//         title: usingProps.title,
//         user: usingProps.user,
//         description: usingProps.description,
//         extra: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quae sed eum suscipit. Porro non consequuntur quos ad eius provident consectetur voluptas reprehenderit doloribus nihil accusamus alias cupiditate, ratione quo!'
//     });
//     const upperOvrClick = (e) => {
//         e.preventDefault();
//         setText({
//             title: text.title.toUpperCase(),
//             user: text.user.toUpperCase(),
//             description: text.description.toUpperCase(),
//             extra: text.extra.toUpperCase()
//         });
//     };

//     const lowerOvrClick = (e) => {
//         e.preventDefault();
//         setText({
//             title: text.title.toLowerCase(),
//             user: text.user.toLowerCase(),
//             description: text.description.toLowerCase(),
//             extra: text.extra.toLowerCase()
//         });
//     };
//     return (
//         <div className='col-md-3 m-3'>
//             <div className={`card shadow p-3 mb-5  rounded bg-${mode === "light"? 'light':'secondary'} text-${mode === "light"? 'black':'white'}  `}>
//                 <h5>{usingProps.title}</h5>
//                 <p>{usingProps.user} ....</p>
//                 <p>{usingProps.description}  <br />       <span className='fs-6 fst-italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quae sed eum suscipit. Porro non consequuntur quos ad eius provident consectetur voluptas reprehenderit doloribus nihil accusamus alias cupiditate, ratione quo!</span></p>
//                 <div className='flex justify-space-between'>
//                     <i className="fa-sharp fa-solid fa-trash mx-2" onClick={delteOvrClick}></i>
//                     <i class="fa-solid fa-file-pen mx-2"></i>
//                     <i class="fa-solid fa-arrow-up-a-z mx-2" onClick={upperOvrClick}></i>
//                     <i class="fa-solid fa-down-left-and-up-right-to-center" onClick={lowerOvrClick}></i>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default NotesItem 


import React, { useContext, useRef } from 'react';
import NoteContext from '../Contexts/Notes/NoteContext';

const NotesItem = (props) => {
    const { deleteNote, mode } = useContext(NoteContext);
    const { usingProps } = props;

    const textRefs = useRef([]);

    const deleteOvrClick = (e) => {
        e.preventDefault();
        deleteNote(usingProps.id);
    };

    const upperOvrClick = (e) => {
        e.preventDefault();
        textRefs.current.forEach(ref => {
            if (ref) {
                ref.innerText = ref.innerText.toUpperCase();
            }
        });
    };

    const lowerOvrClick = (e) => {
        e.preventDefault();
        textRefs.current.forEach(ref => {
            if (ref) {
                ref.innerText = ref.innerText.toLowerCase();
            }
        });
    };

    return (
        <div className='col-md-3 m-3'>
            <div className={`card shadow p-3 mb-5 rounded bg-${mode === "light" ? 'light' : 'secondary'} text-${mode === "light" ? 'black' : 'white'}`}>
                <h5 ref={el => textRefs.current[0] = el}>{usingProps.title}</h5>
                <p ref={el => textRefs.current[1] = el}>{usingProps.user} ....</p>
                <p ref={el => textRefs.current[2] = el}>{usingProps.description} <br />
                    <span ref={el => textRefs.current[3] = el} className='fs-6 fst-italic'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quae sed eum suscipit. Porro non consequuntur quos ad eius provident consectetur voluptas reprehenderit doloribus nihil accusamus alias cupiditate, ratione quo!
                    </span>
                </p>
                <div className='d-flex justify-content-between'>
                    <i className="fa-sharp fa-solid fa-trash" onClick={deleteOvrClick}></i>
                    <i className="fa-solid fa-file-pen "></i>
                    <i className="fa-solid fa-arrow-up-a-z " onClick={upperOvrClick}></i>
                    <i className="fa-solid fa-down-left-and-up-right-to-center " onClick={lowerOvrClick}></i>
                </div>
            </div>
        </div>
    );
};

export default NotesItem;
