import { Box, Checkbox, FormControlLabel, Button} from "@mui/material";
import { useNote } from "../../contexts/note-context";
import { NotelyTheme } from "../../styles";

export const AddTag = ({...props}) => {
    const {note , setNote} = useNote();
    const {setShowAddTags} = props;
    const labels = ['Work','Health','Creativity','Teams','Exercise','Chores'];
    const handleLabelsChange = (label) => {
        note.tags.includes(label) ? setNote({...note, tags: note.tags.filter(tag => tag !== label)}):setNote({...note, tags: [...note.tags, label]})
    };

    return (<Box mb={4} sx={{...NotelyTheme.navBar.containerStyle, p: 2, borderRadius: 2, boxShadow: 1 }}>
               {labels.map(label => <FormControlLabel control={<Checkbox/>} label={label} checked={note.tags.includes(label)} onChange={() => handleLabelsChange(label)}/> )}
               <Button variant="outlined" size="small" onClick={() => setShowAddTags(false)}>CLOSE</Button>
            </Box>
    );
}