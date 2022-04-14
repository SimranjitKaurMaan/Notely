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
      <ListItem button component={Link} to="/" disablePadding>
      <ListItemButton>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem button component={Link} to="/label" disablePadding>
      <ListItemButton>
          <ListItemIcon>
            <LabelOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Label" />
        </ListItemButton>
      </ListItem>
      <ListItem button component={Link} to="/archive" disablePadding>
      <ListItemButton>
          <ListItemIcon>
            <ArchiveOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItemButton>
      </ListItem>
      <ListItem button component={Link} to="/trash" disablePadding>
      <ListItemButton>
          <ListItemIcon>
            <DeleteOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItemButton>
      </ListItem>
      <ListItem button component={Link} to="/" disablePadding>
      <ListItemButton>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
    </List>
  </nav>
  </Box>)
}