import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
    return <button 
                className='note-item__archive-button' 
                id={id} 
                onClick={() => onArchive(id)}>
        {
        archived === true ? "Pindahkan" : "Arsipkan"
        }
    </button>
}


export default ArchiveButton;