import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import { useNote } from "../../contexts/note-context";
import { NotelyTheme } from "../../styles";

export const AddTag = ({...props}) => {
    const {note , setNote} = useNote();
    const {setShowAddTags} = props;
    return (<Box mb={4} sx={{...NotelyTheme.navBar.containerStyle}}>
               <FormControlLabel control={<Checkbox/>} label="Work" onChange={() => setNote({...note, tags: [...note.tags, 'Work']})}/>
               <FormControlLabel control={<Checkbox/>} label="Health" onChange={() => setNote({...note, tags: [...note.tags, 'Health']})}/>
               <FormControlLabel control={<Checkbox/>} label="Teams" onChange={() => setNote({...note, tags: [...note.tags, 'Teams']})}/>
               <FormControlLabel control={<Checkbox/>} label="Creativity" onChange={() => setNote({...note, tags: [...note.tags, 'Creativity']})} />
               <FormControlLabel control={<Checkbox/>} label="Exercise" onChange={() => setNote({...note, tags: [...note.tags, 'Exercise']})}/>
               <FormControlLabel control={<Checkbox/>} label="Chores" onChange={() => setNote({...note, tags: [...note.tags, 'Chores']})}/>
               <Button variant="outlined" onClick={() => setShowAddTags(false)}>CLOSE</Button>
            </Box>
    );
}