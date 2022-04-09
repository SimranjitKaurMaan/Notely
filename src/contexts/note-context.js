import { createContext, useContext, useState } from "react";
import { postNote , archiveNoteHandler} from "../utils/requestUtils/NoteRequestUtils";

const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const defaultState = {
        title: '',
        content: '',
        pinned: false,
        color: 'default',
        state: 'CREATED',
        tags: []
    }
    const [ note , setNote ] = useState(defaultState);
    const [ notes , setNotes ] = useState([]);
    const [ archivedNotes, setArchivedNotes ] = useState([]);

    const saveNote = async () => {
        // eslint-disable-next-line eqeqeq
        if(note == defaultState) return;
        const updatedNotes = await postNote(note);
        setNotes(updatedNotes);
        setNote(defaultState);
    }

    const archiveNote = async ({...note}) => {
         const archivedNotes = await archiveNoteHandler(note);
         setArchivedNotes(archivedNotes);
    }

    return ( <NoteContext.Provider value={{note , setNote,  saveNote, notes, archiveNote, archivedNotes }}>
        {children}
    </NoteContext.Provider> );
}

export const useNote = () => useContext(NoteContext);