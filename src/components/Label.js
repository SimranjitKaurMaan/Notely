import * as React from 'react';
import {Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


import { Note, Navbar, SearchBar } from './customComponents';
import { NotelyTheme } from '../styles';
import { useNote } from '../contexts/note-context';

const getLabels = (notes) => {
    return notes.reduce((acculumator,note) => [...acculumator, ...note.tags] ,[])
}

export const Label = () => {
    const {notes} = useNote();
    const labels = [...new Set(getLabels(notes))];
    return <>
    <div className="wrapper">
        <aside>
            <Navbar/>
        </aside>
        <main>
             <div className="main-wrapper">
                   <SearchBar/>
                    <div className="notes-wrapper">
                       {labels && labels.map(label => <>
                            <div className="notes-header">
                                <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                                    {label}
                                </Typography>
                                <IconButton aria-label="edit note" sx={{...NotelyTheme.notes.headerIconStyle}}>
                                    <EditOutlinedIcon/>
                                </IconButton>
                            </div>
                            {notes && notes.map(note => note.tags.includes(label)? <Note note={note}/>: null)}
                        </>)
                       }
                    </div>
            </div>
        </main>
    </div>
    </>
}