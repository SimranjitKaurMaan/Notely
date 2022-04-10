import * as React from 'react';
import { useNote } from '../contexts/note-context';
import { Navbar, SearchBar, EmptyNote, Note } from './customComponents';

export const Home = () => {
    const {notes} = useNote();
    return <>
    <div className="wrapper">
    <aside>
      <Navbar/>
    </aside>
        <main>
             <div className="main-wrapper" onClick={(e) => e.stopPropagation()}>
                    <SearchBar/>
                    <div className="notes-wrapper">
                        <EmptyNote/>
                        {notes.map(note => <Note note={note}/>)}
                    </div>
            </div>
        </main>
    </div>
    </>
}