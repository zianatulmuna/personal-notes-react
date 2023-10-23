import React from 'react';
import SearchNote from './SearchNote';
 
function Header({ search, onSearchNote }) {
 return (
    <nav className="note-app__header navbar sticky-top bg-white shadow-sm">
    <div className="container-fluid p-0">
      <img className='d-none d-lg-block' src="/icons/denotes-text.png" alt="" />
      <SearchNote search={search} onSearchNote={onSearchNote} />
      <a href="https://www.linkedin.com/in/zianatulmuna/" target='_blank' className='btn btn-warning rounded-5 px-4 d-none d-lg-block'>About Us</a>
    </div>
  </nav>
 );
}
 
export default Header;