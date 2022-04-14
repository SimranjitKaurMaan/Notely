import * as React from 'react';
import {Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlineOutlined } from '@mui/icons-material';


import { Note, Navbar, SearchBar } from './customComponents';
import { NotelyTheme } from '../styles';
import { useNote } from '../contexts/note-context';


export const Archive = () => {
    const {notes} = useNote();
    const archivedNotes = notes.filter(note => note.state === 'ARCHIVED');
    return <>
    <div className="wrapper">
        <aside>
            <Navbar/>
        </aside>
            <main>
                <div className="main-wrapper">
                        <SearchBar/>
                        <div className="notes-wrapper">
                            <div className="notes-header">
                                <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                                    ARCHIVED
                                </Typography>
                                <IconButton aria-label="edit note" sx={{...NotelyTheme.notes.headerIconStyle}}>
                                    <DeleteOutlineOutlined/>
                                </IconButton>
                            </div>
                            {archivedNotes && archivedNotes.map(note => <Note note={note}/>)}
                        </div>
                </div>
            </main>
        </div>
    </>
}