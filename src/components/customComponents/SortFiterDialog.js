import { DialogTitle, Dialog, DialogContent , Box} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFilter } from "../../contexts/filter-context";
import { useNote } from "../../contexts/note-context";

export const SortFilterDialog = ({...props}) => {
    const {filteredState, handleSortByDate, handleFilterByLabel} = useFilter();
    const {notes} = useNote();
    const labels = ['Work','Health','Creativity','Teams','Exercise','Chores'];
    const {openDialog, setOpenDialog} = props;

    return <Dialog fullWidth open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Sort & Filter Notes</DialogTitle>
        <DialogContent>
            <Box sx={{ minWidth: 120 , padding: 4}}>
                <FormControl fullWidth>
                    <InputLabel id="sort-by">Sort By</InputLabel>
                    <Select
                        labelId="sort-by"
                        id="sort-by"
                        value={filteredState.sortBy}
                        label="Sort By"
                        onChange={(event) => handleSortByDate(event.target.value, notes)}
                    >
                        <MenuItem value={'descending'}>Newest First</MenuItem>
                        <MenuItem value={'ascending'}>Oldest First</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 4 , ml: 1 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Select Labels</FormLabel>
                    <FormGroup>
                        {labels.map(label => <FormControlLabel control={<Checkbox/>} label={label} checked={filteredState.labels.includes(label)} onChange={() => handleFilterByLabel(label, notes)}/> )}
                    </FormGroup>
                </FormControl>
            </Box>
        </DialogContent>
    </Dialog>
}