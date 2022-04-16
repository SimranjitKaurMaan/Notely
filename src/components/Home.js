import * as React from 'react';
import {Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useFilter } from '../contexts/filter-context';
import { useNote } from '../contexts/note-context';
import { NotelyTheme } from '../styles';
import { Navbar, SearchBar, EmptyNote, Note } from './customComponents';

export const Home = () => {
    const {notes, saveNote } = useNote();
    const {filteredState, clearFilters } = useFilter();
    const deletedStates = ['ARCHIVED','DELETED'];
    const allNotes = notes && notes.filter(note => !deletedStates.includes(note.state));
    const displayNotes = filteredState ? filteredState.filteredNotes.length===0 ? allNotes : filteredState.filteredNotes : allNotes;
    const pinnedNotes = displayNotes && displayNotes.filter(note => note.pinned);
    const nonPinnedNotes = displayNotes && displayNotes.filter(note => !note.pinned);

    return <>
        <div className="wrapper">
            <aside>
            <Navbar/>
            </aside>
            <main onClick={() => {saveNote(); clearFilters();}}>
                <div className="main-wrapper">
                    <SearchBar/>
                    <div className="notes-wrapper" onClick={(e) => e.stopPropagation()}>
                        <EmptyNote/>
                    </div>
                    {pinnedNotes.length > 0 && <div className="notes-wrapper">
                        <div className="notes-header" style={{marginTop: '2rem'}}>
                            <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                                PINNED
                            </Typography>
                            <IconButton aria-label="edit note" sx={{...NotelyTheme.notes.headerIconStyle}}>
                                <EditOutlinedIcon/>
                            </IconButton>
                        </div>
                        {pinnedNotes.map(note => <Note note={note}/>)} 
                    </div>}
                    <div className="notes-wrapper">
                        {pinnedNotes.length > 0 && nonPinnedNotes.length > 0 &&  <div className="notes-header" style={{marginTop: '2rem'}}>
                            <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                                OTHERS
                            </Typography>
                            <IconButton aria-label="edit note" sx={{...NotelyTheme.notes.headerIconStyle}}>
                                <EditOutlinedIcon/>
                            </IconButton>
                        </div>}  
                        {nonPinnedNotes && nonPinnedNotes.map(note => <Note note={note}/>)} 
                    </div>
                </div>
            </main>
        </div>
    </>
}