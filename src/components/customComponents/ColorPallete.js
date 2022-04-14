import { Box } from "@mui/material";
import { useNote } from "../../contexts/note-context";
import { NotelyTheme } from "../../styles";

export const ColorPallete = ({...props}) => {
    const {note , setNote} = useNote();
    const {setShowColorPallete} = props;
    const colors = [NotelyTheme.colorPallete.redColor, NotelyTheme.colorPallete.yellowColor, NotelyTheme.colorPallete.greenColor, NotelyTheme.colorPallete.blueColor, NotelyTheme.colorPallete.pinkColor]
    return (<Box mb={4} sx={{...NotelyTheme.navBar.containerStyle, p: 2, borderRadius: 2, boxShadow: 1 }}>
                {colors.map(color => <button className="btn btn-round" style={{backgroundColor: color}} onClick={() => {setNote({...note, color: color});setShowColorPallete(false);}}/>)}
            </Box>
    );
}