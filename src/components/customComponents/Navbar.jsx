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
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LabelOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Labels" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ArchiveOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DeleteOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
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