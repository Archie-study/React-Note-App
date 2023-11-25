import React from "react";

class NoteInputForm extends React.Component {
    constructor(props) {
        super(props);

        //inisialisasi state
        this.state = {
            title: '',
            content: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    // Untuk Title
    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    //Untuk Content
    onContentChangeEventHandler(event) {
        this.setState(() => {
            return {
                content: event.target.value,
            }
        });
    }

    //Untuk Tombol Submit
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNewNote(this.state);
    }



    //




    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit"></p>
                    <input 
                        type="text" 
                        className="note-input__title" 
                        placeholder="Ini adalah judul ..." 
                        value={this.state.title} 
                        onChange={this.onTitleChangeEventHandler} 
                        required 
                    />
                    <textarea 
                        className="note-input__body" 
                        type="text" 
                        placeholder="Tuliskan catatanmu di sini ..." 
                        value={this.state.content}
                        onChange={this.onContentChangeEventHandler}
                        required></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInputForm;