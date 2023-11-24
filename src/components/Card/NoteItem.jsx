import React from "react";
import NoteItemContent from "./NoteItemContent";
import {showFormattedDate} from "../../utils/index";
import NoteItemAction from "./NoteItemAction";

// function NoteItem({ title, createdAt, body, onDelete, onArchive, isArchived}) {
//     return (
//         <div className="note-item">
//             <NoteItemContent 
//                 title={title} 
//                 date={showFormattedDate(createdAt)} 
//                 body={body} 
//             />
//             <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} isArchived={is}/>
//         </div>
//     )
// }

function NoteItem({ title, createdAt, body, onDelete, id }) {
    return (
        <div className="note-item">
            <NoteItemContent 
                title={title} 
                date={showFormattedDate(createdAt)} 
                body={body} 
            />
            <NoteItemAction id={id} onDelete={onDelete} />
        </div>
    )
}
export default NoteItem;
