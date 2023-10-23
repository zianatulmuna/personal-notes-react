import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          title: '',
          body: '',
          limit: 50,
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
      
    onTitleChangeEventHandler(event) {
        const value = event.target.value;
        if (value.length <= 50) {
            this.setState(() => {
                return {
                    title: value,
                    limit: 50 - value.length
                }
            });
        }
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault(); 
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: '',
            limit: 50
        });
    }

    render() {
        return (
            <div className="bg-danger bg-gradient pt-5 pb-3">
                <div className="note-input">
                    <h3 className='text-center pb-2 border-bottom text-white'>Create Note</h3>
                    <form onSubmit={this.onSubmitEventHandler} className='my-4 mx-3'>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between">
                                <label className="form-label text-white">Judul</label>
                                <div className="form-text text-white">Sisa karakter: {this.state.limit}</div>
                            </div>
                            <input type="text" className="form-control" placeholder='Tuliskan judul..' required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Deskripsi</label>
                            <textarea className="form-control" rows="3" placeholder='Tuliskan deskripsi..' required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                        </div>
                        <div className="text-center mt-4">
                            <button className='btn btn-warning px-4 rounded-5'>Tambah Note</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default NoteInput;