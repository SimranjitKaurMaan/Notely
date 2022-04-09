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

    const saveNote = () => {
        // make API call to the backend to save the note
        console.log("Save this to backend", note);
        //show it in the list now
    }

    return ( <NoteContext.Provider value={{note , setNote,  saveNote }}>
        {children}
    </NoteContext.Provider> );
}

export const useNote = () => useContext(NoteContext);