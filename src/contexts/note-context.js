import { createContext, useContext, useState } from "react";
import { postNote } from "../utils/requestUtils/NoteRequestUtils";

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
    const [ notes , setNotes ] = useState([]);

    const saveNote = async () => {
        if(note == defaultState) return;
        // make API call to the backend to save the note
        console.log("Save this to backend", note);
        const updatedNotes = await postNote(note);
        setNotes(updatedNotes);
        setNote(defaultState);
    }

    return ( <NoteContext.Provider value={{note , setNote,  saveNote, notes }}>
        {children}
    </NoteContext.Provider> );
}

export const useNote = () => useContext(NoteContext);