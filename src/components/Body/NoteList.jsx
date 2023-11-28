import React from "react";
import NoteItem from "../Card/NoteItem";
import NoteItemEmpty from "../Card/NoteItemEmpty";


function NoteList({ notes, onDelete, onArchive }) {
    if (notes.length === 0) {
        return (
            <NoteItemEmpty />
        )
    } else {
        return (
            <div className="notes-list">
                {
                    notes.map((note) => (
                        <NoteItem 
                            key={note.id} 
                            id={note.id} 
                            onDelete={onDelete} 
                            onArchive={onArchive} 
                            archived={note.archived} 
                            {...note} 
                        />
                    ))
                }
            </div>
        )
    }
}


export default NoteList;