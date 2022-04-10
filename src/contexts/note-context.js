import { createContext, useContext, useState } from "react";
import dayjs from "dayjs";
import { postNote , archiveNoteHandler, deleteNoteHandler, updateNote} from "../utils/requestUtils/NoteRequestUtils";

const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const defaultState = {
        title: '',
        content: '',
        pinned: false,
        color: 'default',
        state: 'CREATED',
        tags: [],
        createdAt: formatDate()
    };
    const [ note , setNote ] = useState(defaultState);
    const [ notes , setNotes ] = useState([]);
    const [deletedNotes, setDeletedNotes ] = useState([]);
    
    const saveNote = async () => {
        // eslint-disable-next-line eqeqeq
        console.log(note);
        if((JSON.stringify(note.title) && JSON.stringify(note.content))  === (JSON.stringify(defaultState.title) && JSON.stringify(defaultState.content))) return;
        const updatedNotes = note._id ? await updateNote(note): await postNote(note);
        console.log(`Saved...${note}`);
        setNotes(updatedNotes);
        setNote(defaultState);
    }

    const archiveNote = async ({...note}) => {
         const updatedNotes = await archiveNoteHandler(note);
         note = {...note , state: note.state='ARCHIVED'};
         setNotes(updatedNotes);
    }

    const deleteNote = async ({...note}) => {
        const updatedNotes = await deleteNoteHandler(note);
        note = {...note , state: note.state='DELETED'};
        setDeletedNotes(deletedNotes => [...deletedNotes, note]);
        setNotes(updatedNotes);
    }

    return ( <NoteContext.Provider value={{note , setNote,  saveNote, notes, archiveNote, deleteNote, deletedNotes}}>
        {children}
    </NoteContext.Provider> );
}

export const formatDate = () => dayjs().format("DD-MM-YYYY");

export const useNote = () => useContext(NoteContext);

