import React from "react";
import NoteItemContent from "./NoteItemContent";
import {showFormattedDate} from "../../utils/index";

function NoteItem({ title, createdAt, body}) {
    return (
        <div className="note-item">
            <NoteItemContent 
                title={title} 
                date={showFormattedDate(createdAt)} 
                body={body} 
            />
        </div>
    )
}
export default NoteItem;
