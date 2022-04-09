import { Box } from "@mui/material";
import { useNote } from "../../contexts/note-context";
import { NotelyTheme } from "../../styles";

export const ColorPallete = ({...props}) => {
    const {note , setNote} = useNote();
    const {setShowColorPallete} = props;
    return (<Box mb={4} sx={{...NotelyTheme.navBar.containerStyle}}>
                <button className="btn btn-round" style={{backgroundColor: NotelyTheme.colorPallete.redColor}} onClick={() => {setNote({...note, color: NotelyTheme.colorPallete.redColor});setShowColorPallete(false);}}/>
                <button className="btn btn-round" style={{backgroundColor: NotelyTheme.colorPallete.yellowColor}} onClick={() => {setNote({...note, color: NotelyTheme.colorPallete.yellowColor});setShowColorPallete(false);}}/>
                <button className="btn btn-round" style={{backgroundColor: NotelyTheme.colorPallete.greenColor}} onClick={() => {setNote({...note, color: NotelyTheme.colorPallete.greenColor});setShowColorPallete(false);}}/>
                <button className="btn btn-round" style={{backgroundColor: NotelyTheme.colorPallete.blueColor}} onClick={() => {setNote({...note, color: NotelyTheme.colorPallete.blueColor});setShowColorPallete(false);}}/>
                <button className="btn btn-round" style={{backgroundColor: NotelyTheme.colorPallete.pinkColor}} onClick={() => {setNote({...note, color: NotelyTheme.colorPallete.pinkColor});setShowColorPallete(false);}}/>
            </Box>
    );
}