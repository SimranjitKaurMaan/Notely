import * as React from 'react';
import {Box,Button} from '@mui/material'
import { Note } from './customComponents/Note';
import { Navbar } from './customComponents/Navbar';
import { SearchBar } from './customComponents/SearchBar';
import { EmptyNote } from './customComponents/EmptyNote';

export const Home = () => {
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
                        <EmptyNote/> 
                        <Note/>
                    </div>
            </div>
        </main>
    </div>
    </>
}