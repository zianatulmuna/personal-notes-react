import React from 'react';
import { getInitialData } from '../utils/data';
import Header from './LayoutHeader';
import Body from './LayoutBody';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: ''
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActivateHandler = this.onActivateHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            archived: true
          };
        }
        return note;
      });
      return { notes: updatedNotes };
    });
  }

  onActivateHandler(id) {
    this.setState(prevState => {
      const updatedNotes = prevState.notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            archived: false
          };
        }
        return note;
      });
      return { notes: updatedNotes };
    });
  }
 
  onAddNoteHandler({ title, body }) {
   this.setState((prevState) => {
     return {
       notes: [
         ...prevState.notes,
         {
           id: +new Date(),
           title,
           body,
           createdAt: new Date().toDateString(),
           archived: false
         }
       ]
     }
   });
  }

  onSearchNoteHandler(event) {
    this.setState(() => {
      return {
        search : event.target.value
      }
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))

    return (
      <div className='note-app bg-body-tertiary'>
        <Header search={this.state.search} onSearchNote={this.onSearchNoteHandler} />
        <Body notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActivate={this.onActivateHandler} addNote={this.onAddNoteHandler} />
        <footer>
          <div className="d-flex justify-content-center bg-level1 py-4 text-white">
           2023 © Denotes
          </div>
        </footer>
      </div>
    );
  }
}

export default NoteApp;

