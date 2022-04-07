import * as React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, TextField } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

export function EmptyNote() {
    return (
        <Card variant="outlined" sx={{maxWidth: 400, mt: 4 }}>
            <CardHeader sx={{ textAlign: 'start'}}
                action={
                <IconButton aria-label="pin note">
                    <PushPinOutlinedIcon/>
                </IconButton>
                }
            title="Empty Note"
      />
        <CardContent sx={{ textAlign: 'start'}}>
            <Typography variant="body2" color="text.secondary">
               <TextField multiline fullWidth variant="standard" InputProps={{disableUnderline: true, style: {color: 'inherit'}}} placeholder="Take a note..."/>
            </Typography>
        </CardContent>
        <CardActions>
            <Typography variant="body2">
            Created on 26/10/2021
            </Typography>
            <IconButton aria-label="change color" sx={{marginLeft: 'auto'}}>
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