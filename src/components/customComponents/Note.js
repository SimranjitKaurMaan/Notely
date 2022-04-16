import * as React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import dayjs from "dayjs";
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, Chip, Stack } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { NotelyTheme } from '../../styles';
import { useNote } from '../../contexts/note-context';
import { useFilter } from '../../contexts/filter-context';

export function Note({note}) {
    const {deleteNote, setNote} = useNote();
    const {clearFilters} = useFilter();

    const showDeleteToast = () => toast.info("Note is deleted.");
    return (<>
        <ToastContainer/>
        <Card variant="outlined" sx={{...NotelyTheme.card.containerStyle, bgcolor: `${note.color}` }} onClick={() => setNote(note)}>
            <CardHeader sx={{...NotelyTheme.card.headerStyle}}
                action={
                <IconButton aria-label="pin note">
                    {note.pinned ? <PushPinIcon/> : <PushPinOutlinedIcon/> }
                </IconButton>
                }
            title={note.title}
      />
        <CardContent sx={{ ...NotelyTheme.card.contentStyle}}>
            <Typography variant="body2" color="text.secondary">
                {note.content}
            </Typography>
            <Stack direction="row" spacing={2} mt={4}>
                { note.tags.map( tag => <Chip label={tag} ></Chip>)}
            </Stack>          
        </CardContent>
        <CardActions>
           <Typography variant="body2" color="text.secondary">
                Created On: {dayjs(note.createdAt).format('DD-MM-YYYY')}
           </Typography>
            <IconButton aria-label="change color" sx={{...NotelyTheme.card.actionStyle}}>
                <ColorLensOutlinedIcon/>
            </IconButton>
            <IconButton aria-label="label">
                <LabelOutlinedIcon/>
            </IconButton>
            <IconButton aria-label="archive">
              {note.state === 'ARCHIVED' ? <ArchiveIcon/> : <ArchiveOutlinedIcon/>}
            </IconButton>
            <IconButton aria-label="delete" onClick={(event) => {showDeleteToast();clearFilters(); deleteNote(note); event.stopPropagation()}}>
            {note.state === 'DELETED' ? <DeleteIcon/> : <DeleteOutlinedIcon/>}
            </IconButton>
        </CardActions>
        </Card>
        </>
    );
  }