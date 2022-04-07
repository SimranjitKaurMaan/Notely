import * as React from 'react';
import {Button} from '@mui/material'
import { Note, Navbar, SearchBar, EmptyNote } from './customComponents';

export const Home = () => {
    return <>
    <div className="wrapper">
    <aside>
      <Navbar/>
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