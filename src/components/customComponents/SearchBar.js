import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { NotelyTheme } from '../../styles';
export const SearchBar = () => {
    return (<Paper component="form" sx={{...NotelyTheme.searchBar.containerStyle}}>
                <IconButton sx={{ ...NotelyTheme.searchBar.iconStyle }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{...NotelyTheme.searchBar.inputStyle}}
                    placeholder="Search Notes"
                    inputProps={{ 'aria-label': 'search notes' }}
                />
                <IconButton type="submit" sx={{ ...NotelyTheme.searchBar.iconStyle }} aria-label="search">
                    <SearchIcon />
                </IconButton>
        </Paper>
    )
}