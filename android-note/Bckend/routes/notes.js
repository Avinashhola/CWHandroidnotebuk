const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');
//VALIDATION'S
const { body, validationResult } = require('express-validator');


//PATH1: get all the notes using: GET method 'api/notes/fetchNotes'.  LoginRequired
router.get('/fetchNotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ error: "Internal error occured" });
    }
});




//PATH2: add all notes: POST method 'api/notes/addNotes'.  LoginRequired
router.post('/addNotes', fetchUser,
    [body('title', 'Enter a Valid Title').isLength({ min: 4 }),
     body('description', 'Enter a Valid Descriptuion').isLength({ min: 5 }),], async (req, res) => {
        //if there are err return bad req

        try {
            const { title, description, tag } = req.body

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, tag, user: req.user.id
            })

            const savedNotes = await note.save()
            res.json(savedNotes)
        }
        catch (error) {
            console.error(error.message)
            return res.status(500).json({ error: "Internal error occured" });
        }
    });




//PATH3: Update  notes: PUT method 'api/notes/updateNotes'.  LoginRequired
router.put('/updateNotes/:id', fetchUser, async (req, res) => {
            //if there are err return bad req
    const {title,description,tag} =req.body;
    //create a newNote obj
    const newNote= {}
    if(title){newNote.title = title}  // if having title then add up in the objevt
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}


try{
    //find the note to be updated
    let note = await Notes.findById(req.params.id);   //we check here whether  req.params.id === updateNotes:id & awit shuld be ther otherwise 500 error and also usage of "CONST" we get error
    if(!note){
         return res.status(404).send('not found')
    }
    // Allow update only if user owns this note
    if(note.user.toString() !== req.user.id){     //we check here whether  note.str === id  
        return res.status(401).send('not allowed')
    }
    
    note =await  Notes.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true})
    res.json({note})    
}
    catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Internal error occurred" });
    }
       


});  
    
    
        
//PATH4: Delete  notes: Delete method 'api/notes/deleteNotes'.  LoginRequired
router.delete('/deleteNotes/:id', fetchUser, async (req, res) => {
    //if there are err return bad req
const {title,description,tag} =req.body;

try{
//find the note to be Deleted and Deelte it !
let note = await Notes.findById(req.params.id);   //we check here whether  req.params.id === updateNotes:id & awit shuld be ther otherwise 500 error and also usage of "CONST" we get error
if(!note){
 return res.status(404).send('not found')
}
// Allow deletin  only if user owns this note
if(note.user.toString() !== req.user.id){     //we check here whether  note.str === id  
return res.status(401).send('not allowed')
}

note =await  Notes.findByIdAndDelete(req.params.id)
res.json({"Success": "Successfully deleted the req --- note", note:note})    
}
catch (error) {
console.error(error.message);
return res.status(500).json({ error: "Internal error occurred" });
}



});  


module.exports = router