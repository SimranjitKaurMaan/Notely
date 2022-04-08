import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const defaultState = {
        title: '',
        content: '',
        pinned: false,
        color: 'default',
        state: 'CREATED'
    }
    const [ note , setNote ] = useState(defaultState);

    const addNoteTitle = (event) => {
        setNote({...note, title: event.target.value});
    }

    const addNoteContent = (event) => {
        setNote({...note, content: event.target.value});
    }

    const togglePinned = () => {
        setNote({...note , pinned: !note.pinned});
    }

    const saveNote = () => {
        // make API call to the backend to save the note
        console.log("Save this", note);
    }

    return ( <NoteContext.Provider value={{note , addNoteTitle, addNoteContent , togglePinned , saveNote }}>
        {children}
    </NoteContext.Provider> );
}

export const useNote = () => useContext(NoteContext);