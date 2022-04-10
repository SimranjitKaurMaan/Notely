import {Link} from 'react-router-dom';

import { Box, ListItem, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NotelyTheme } from "../../styles";

export function Navbar() {
    return ( <Box mb={4} sx={{...NotelyTheme.navBar.containerStyle}}>
    <nav aria-label="main menu">
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <Link to="/"><ListItemText primary="Home" /></Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LabelOutlinedIcon />
          </ListItemIcon>
          <Link to="/label"><ListItemText primary="Labels" /></Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ArchiveOutlinedIcon />
          </ListItemIcon>
          <Link to="/archive"><ListItemText primary="Archive" /></Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DeleteOutlinedIcon />
          </ListItemIcon>
          <Link to="/trash"><ListItemText primary="Trash" /></Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <Link to="/signup"><ListItemText primary="Profile" /></Link>
        </ListItemButton>
      </ListItem>
    </List>
  </nav>
  </Box>)
}