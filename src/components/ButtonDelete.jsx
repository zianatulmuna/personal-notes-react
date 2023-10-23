import React from 'react';
 
function ButtonDelete({ id, onDelete }) {
 return <button 
            type='button' 
            className='notes-list__delete btn' 
            onClick={() => onDelete(id)}>
                <i className="bi bi-trash3 pe-1"></i> 
                Hapus
        </button>;
}
 
export default ButtonDelete;