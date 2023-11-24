import React from "react";

function ArchiveButton({ id, onArchive, isArchived }) {
    return <button className='note-item__archive-button' id={id} onClick={(e) => onArchive(e)}>
        {isArchived ? "Pindahkan" : "Arsipkan"}
    </button>
}


export default ArchiveButton;