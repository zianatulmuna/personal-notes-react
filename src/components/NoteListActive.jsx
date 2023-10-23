import React from 'react';
import NoteItem from './NoteItem';
 
function NoteActiveList({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            <h3 className='py-2 border-bottom'>Active Notes</h3>
            <div className="row row-cols-sm-2 row-cols-lg-3 g-4 my-3">
            { 
                notes.length > 0 ? (
                    notes.map((note) => (
                        <NoteItem 
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note} />
                    ))
                ) : (
                    <p className='fst-italic'>Tidak ada catatan.</p>
                )
            }
            </div>
        </div>
    );
}
 
export default NoteActiveList;