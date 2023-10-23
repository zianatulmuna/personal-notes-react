import React from 'react';
 
function SearchNote ({ search, onSearchNote }) {
    return (
        <div className="note-header__search w-100 mx-auto">
            <form className="d-flex" role="search">
                <div className="input-group border rounded-5">
                <span className="input-group-text border-0 rounded-5 bg-white text-secondary"><i className="bi bi-search"></i></span>
                <input type="text" className="form-control border-0 rounded-5" placeholder="Cari judul catatan" value={search} onChange={onSearchNote} />
                </div>
            </form>
        </div>
    );
}
 
export default SearchNote;