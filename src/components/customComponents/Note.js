import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { NotelyTheme } from '../../styles';

export function Note({...props}) {
    const {data} = props;
    return (
        <Card variant="outlined" sx={{...NotelyTheme.card.containerStyle, bgcolor: `${data.color}` }}>
            <CardHeader sx={{...NotelyTheme.card.headerStyle}}
                action={
                <IconButton aria-label="pin note">
                    {data.pinned ? <PushPinIcon/> : <PushPinOutlinedIcon/> }
                </IconButton>
                }
            title={data.title}
      />
        <CardContent sx={{ ...NotelyTheme.card.contentStyle}}>
            <Typography variant="body2" color="text.secondary">
                {data.content}
            </Typography>
        </CardContent>
        <CardActions>
           { data.tags.map( tag => <Typography variant="body2" color="text.secondary">{tag}</Typography>)}
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