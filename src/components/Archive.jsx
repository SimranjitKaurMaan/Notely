import * as React from 'react';
import {Box,Button, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlineOutlined } from '@mui/icons-material';


import { Note } from './customComponents/Note';
import { Navbar } from './customComponents/Navbar';
import { SearchBar } from './customComponents/SearchBar';


export const Archive = () => {
    return <>
    <div className="wrapper">
    <aside>
        <Box mb={4} sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper'}}>
            <Navbar/>
        </Box>
        <Button variant="contained">Create New Note</Button>
    </aside>
        <main>
             <div className="main-wrapper">
                    <SearchBar/>
                    <div className="notes-wrapper">
                        <div className="notes-header">
                        <Typography variant="body2" color="text.secondary" textAlign='start' lineHeight='4'>
                            ARCHIVED
                        </Typography>
                        <IconButton aria-label="edit note" sx={{marginLeft: 'auto'}}>
                            <DeleteOutlineOutlined/>
                        </IconButton>
                        </div>
                        <Note/>
                    </div>
            </div>
        </main>
    </div>
    </>
}