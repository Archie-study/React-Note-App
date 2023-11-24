import React from "react";
import NoteItem from "../Card/NoteItem";

function NoteList({ notes }) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem 
                        key={note.id}
                        id={note.id} 
                        {...note} 
                    />
                ))
            }
        </div>
    )
}

export default NoteList;