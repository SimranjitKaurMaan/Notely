import { Card, CardContent, CardActions, Typography, IconButton, TextField , Button} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { NotelyTheme } from '../../styles';
import { useNote } from '../../contexts/note-context';
import { ColorPallete } from "./ColorPallete";
import { AddTag } from "./AddTag";
import { useState } from "react";

export function EmptyNote() {
    const {note , setNote, saveNote } = useNote();
    const [showColorPallete, setShowColorPallete] = useState(false);
    const [showAddTags , setShowAddTags] = useState(false);
      
    const handleNoteDetailsChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setNote({...note, [inputName]:inputValue});
    }

    const showSaveToast = () => toast.info("Note is saved.");
    const showArchivedToast = () => toast.info("Note is archived.");

    return (<>
            <ToastContainer />
            <Card variant="outlined" sx={{...NotelyTheme.card.containerStyle , bgcolor: `${note.color}`}}>
                <div style={{...NotelyTheme.editableCard.titleContainerStyle}}>   
                    <TextField variant="standard" InputProps={{disableUnderline: true}} placeholder="Title" name="title" value={note.title} onChange={(event) => handleNoteDetailsChange(event)}/>
                    <IconButton aria-label="pin note" sx={{...NotelyTheme.card.actionStyle}} onClick={() => setNote({...note, pinned: !note.pinned})}>
                        {note.pinned ? <PushPinIcon/> : <PushPinOutlinedIcon/> }
                    </IconButton>
                </div>  
                <CardContent sx={{ textAlign: 'start'}}>
                    <Typography variant="body2" color="text.secondary">
                        <TextField multiline fullWidth variant="standard" InputProps={{disableUnderline: true, style: {...NotelyTheme.card.textAreaStyle}}} placeholder="Take a note..."  name="content" value={note.content} onChange={(event) => handleNoteDetailsChange(event)}/>
                    </Typography>
                </CardContent>
                <CardActions>
                    { note.tags.map( tag => <Typography variant="body2" color="text.secondary">{tag}</Typography>)}
                    <IconButton aria-label="change color" sx={{...NotelyTheme.card.actionStyle}} onClick={() => setShowColorPallete(true)}>
                        <ColorLensOutlinedIcon/>
                    </IconButton>
                    <IconButton aria-label="tag" onClick={() => setShowAddTags(true)}>
                        <LabelOutlinedIcon/>
                    </IconButton>
                    <IconButton aria-label="archive" onClick={() => {showArchivedToast();setNote({...note, state: 'ARCHIVED'});}}>
                        {note.state === 'ARCHIVED' ?  <ArchiveIcon/>: <ArchiveOutlinedIcon/>}
                    </IconButton>
                    <Button variant="text" style={{...NotelyTheme.card.closeButtonStyle}} onClick={() => {showSaveToast(); saveNote()}}>Close</Button>
                </CardActions>
            </Card>
            {showColorPallete && <ColorPallete setShowColorPallete={setShowColorPallete}/>}
            {showAddTags && <AddTag setShowAddTags={setShowAddTags}/>}
        </>
    );
  }