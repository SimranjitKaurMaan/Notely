import { Box } from "@mui/material";
import { useNote } from "../../contexts/note-context";
import { NotelyTheme } from "../../styles";

export const ColorPallete = ({...props}) => {
    const {note , setNote} = useNote();
    const {setShowColorPallete} = props;
    const colors = Object.values(NotelyTheme.colorPallete.colors).map(color => color);
    return (<Box sx={{...NotelyTheme.colorPallete.containerStyle}}>
                {colors.map(color => <button className="btn btn-round" style={{backgroundColor: color}} onClick={() => {setNote({...note, color: color});setShowColorPallete(false);}}/>)}
            </Box>
    );
}