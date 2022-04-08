import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, TextField } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { NotelyTheme } from '../../styles';
import { useNote } from '../../contexts/note-context';

export function EmptyNote() {
    const {addNoteTitle, addNoteContent , togglePinned } = useNote();

    return (
        <Card variant="outlined" sx={{...NotelyTheme.card.containerStyle }}>
            <div style={{...NotelyTheme.editableCard.titleContainerStyle}}>   
                <TextField variant="standard" InputProps={{disableUnderline: true}} placeholder="Title" onChange={(event) => addNoteTitle(event)}/>
                <IconButton aria-label="pin note" sx={{...NotelyTheme.card.actionStyle}} onClick={() => togglePinned()}>
                        <PushPinOutlinedIcon/>
                </IconButton>
            </div>  
            <CardContent sx={{ textAlign: 'start'}}>
                <Typography variant="body2" color="text.secondary">
                <TextField multiline fullWidth variant="standard" InputProps={{disableUnderline: true, style: {...NotelyTheme.card.textAreaStyle}}} placeholder="Take a note..." onChange={(event) => addNoteContent(event)}/>
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="change color" sx={{...NotelyTheme.card.actionStyle}}>
                    <ColorLensOutlinedIcon/>
                </IconButton>
                <IconButton aria-label="label">
                    <LabelOutlinedIcon/>
                </IconButton>
                <IconButton aria-label="archive">
                    <ArchiveOutlinedIcon/>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteOutlinedIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
  }