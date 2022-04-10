import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { NotelyTheme } from '../../styles';

export function Note({...props}) {
    const {note} = props;
    return (
        <Card variant="outlined" sx={{...NotelyTheme.card.containerStyle, bgcolor: `${note.color}` }}>
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
        </CardContent>
        <CardActions>
           { note.tags.map( tag => <Typography variant="body2" color="text.secondary">{tag}</Typography>)}
            <IconButton aria-label="change color" sx={{...NotelyTheme.card.actionStyle}}>
                <ColorLensOutlinedIcon/>
            </IconButton>
            <IconButton aria-label="label">
                <LabelOutlinedIcon/>
            </IconButton>
            <IconButton aria-label="archive">
              {note.state === 'ARCHIVED' ? <ArchiveIcon/> : <ArchiveOutlinedIcon/>}
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteOutlinedIcon/>
            </IconButton>
        </CardActions>
        </Card>
    );
  }