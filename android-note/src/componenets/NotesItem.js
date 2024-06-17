import React from 'react'

const NotesItem = (props) => {
    const {note} = props;
  return (
    <div>
        <div class="card container my-3"  key={note.id} >
  <img src="..." class="card-img-top py-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{note.user}</h5>
    <p class="card-text">{note.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
  )
}

export default NotesItem