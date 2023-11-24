import React from "react";
import NoteList from "./Body/NoteList";
import { getInitialData } from "../utils";

function NoteApp(){
    const notes = getInitialData();

    return (
        <div className="note-app__body">
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} />
        </div>
    )
}

export default NoteApp;