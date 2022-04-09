import * as React from 'react';
import { useNote } from '../contexts/note-context';
import { Navbar, SearchBar, EmptyNote, Note } from './customComponents';

export const Home = () => {
    const {notes, saveNote} = useNote();
    return <>
        <div className="wrapper">
        <aside>
        <Navbar/>
        </aside>
            <main onClick={() => saveNote()}>
                <div className="main-wrapper">
                        <SearchBar/>
                        <div className="notes-wrapper" onClick={(e) => e.stopPropagation()}>
                            <EmptyNote/>
                            {notes.map(note => <Note data={note}/>)}
                        </div>
                </div>
            </main>
        </div>
    </>
}