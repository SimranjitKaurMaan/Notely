import * as React from 'react';
import {Button, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


import { Note, Navbar, SearchBar } from './customComponents';
import { NotelyTheme } from '../styles';

export const Label = () => {
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
                            LABEL 1
                        </Typography>
                        <IconButton aria-label="edit note" sx={{...NotelyTheme.notes.headerIconStyle}}>
                            <EditOutlinedIcon/>
                        </IconButton>
                        </div>
                        <Note/>
                    </div>
                    <div className="notes-wrapper">
                        <div className="notes-header">
                        <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                            LABEL 2
                        </Typography>
                        <IconButton aria-label="edit note" sx={{...NotelyTheme.notes.headerIconStyle}}>
                            <EditOutlinedIcon/>
                        </IconButton>
                        </div>
                        <Note/>
                        <Note/>
                    </div>
            </div>
        </main>
    </div>
    </>
}