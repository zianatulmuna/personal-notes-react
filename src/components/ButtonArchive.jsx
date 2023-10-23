import React from 'react';
 
function ButtonArchive({ id, onArchive}) {
    return <button type='button' className='notes-list__archive btn' onClick={() => onArchive(id)}><i className="bi bi-archive pe-1"></i> Arsipkan</button>;
}
 
export default ButtonArchive;