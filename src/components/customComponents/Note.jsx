import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { NotelyTheme } from '../../styles';

export function Note() {
    return (
        <Card variant="outlined" sx={{...NotelyTheme.card.containerStyle }}>
            <CardHeader sx={{...NotelyTheme.card.headerStyle}}
                action={
                <IconButton aria-label="pin note">
                    <PushPinOutlinedIcon/>
                </IconButton>
                }
            title="Title of the note"
      />
        <CardContent sx={{ ...NotelyTheme.card.contentStyle}}>
            <Typography variant="body2" color="text.secondary">
                Body of the note
            </Typography>
        </CardContent>
        <CardActions>
            <Typography variant="body2">
            Created on 26/10/2021
            </Typography>
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