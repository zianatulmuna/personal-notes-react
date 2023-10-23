import React from 'react';
import NoteInput from './NoteInput';
import NoteListActive from './NoteListActive';
import NoteListArchived from './NoteListArchived';

function Body({ notes, onDelete, onArchive, onActivate, addNote }) {
    let activeNotes = notes.filter(note => !note.archived);
    let archivedNotes = notes.filter(note => note.archived);

    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <NoteListActive notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
            <NoteListArchived notes={archivedNotes} onDelete={onDelete} onActivate={onActivate} />
        </div>
    );
}
 
export default Body;