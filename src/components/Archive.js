import * as React from 'react';
import {Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlineOutlined } from '@mui/icons-material';


import { Note, Navbar, SearchBar } from './customComponents';
import { NotelyTheme } from '../styles';
import { useNote } from '../contexts/note-context';
import { useFilter } from '../contexts/filter-context';


export const Archive = () => {
    const {notes} = useNote();
    const {filteredState} = useFilter();
    const archivedNotes = notes.filter(note => note.state === 'ARCHIVED');
    const displayNotes = filteredState ? filteredState.filteredNotes.length===0 ? archivedNotes : filteredState.filteredNotes.filter(note => note.state === 'ARCHIVED') : archivedNotes;

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
                            {displayNotes && displayNotes.map(note => <Note note={note}/>)}
                        </div>
                </div>
            </main>
        </div>
    </>
}