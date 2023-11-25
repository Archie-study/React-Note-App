import React from "react";
import NoteList from "./Body/NoteList";
import { getInitialData } from "../utils";
import NoteInputForm from "./Body/NoteInputForm";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this);
    }


    // Method Delete Handler
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }


    //Method Add New Note Handler
    onAddNewNoteHandler({ title, content }){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        content,
                    }
                ]
            }
        });
    }


    // Rendering
    render(){
        return (
            <div className="note-app__body">
                <NoteInputForm 
                    addNewNote={this.onAddNewNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList 
                    notes={this.state.notes} 
                    onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

export default NoteApp;






















// import React from "react";
// import NoteList from "./Body/NoteList";
// import { getInitialData } from "../utils";

// function NoteApp(){
//     const notes = getInitialData();

//     return (
//         <div className="note-app__body">
//             <h2>Catatan Aktif</h2>
//             <NoteList notes={notes} />
//         </div>
//     )
// }

// export default NoteApp;