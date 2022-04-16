import { Box, Checkbox, FormControlLabel, Button, FormGroup} from "@mui/material";
import { useNote } from "../../contexts/note-context";
import { NotelyTheme } from "../../styles";
import { labels } from "../../utils/Constants";

export const AddTag = ({...props}) => {
    const {note , setNote} = useNote();
    const {setShowAddTags} = props;
    const handleLabelsChange = (label) => {
        note.tags.includes(label) ? setNote({...note, tags: note.tags.filter(tag => tag !== label)}):setNote({...note, tags: [...note.tags, label]})
    };

    return (<Box sx={{...NotelyTheme.addTagDialog.containerStyle}}>
               <FormGroup>
                 {labels.map(label => <FormControlLabel control={<Checkbox/>} label={label} checked={note.tags.includes(label)} onChange={() => handleLabelsChange(label)}/> )}
               </FormGroup>
               <Button variant="outlined" size="small" onClick={() => setShowAddTags(false)}>CLOSE</Button>
            </Box>
    );
}