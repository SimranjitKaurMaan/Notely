import * as React from 'react';
import { useFilter } from '../contexts/filter-context';
import { useNote } from '../contexts/note-context';
import { Navbar, SearchBar, EmptyNote, Note } from './customComponents';

export const Home = () => {
    const {notes, saveNote } = useNote();
    const {filteredState} = useFilter();
    filteredState && console.log(`filteredNotes in Home: ${JSON.stringify(filteredState.filteredNotes)}`)
    const allNotes = notes && notes.filter(note => note.state !== 'DELETED');
    const displayNotes = filteredState ? filteredState.filteredNotes.length===0 ? allNotes : filteredState.filteredNotes : allNotes;
    console.log(`displayNotes in Home: ${JSON.stringify(displayNotes)}`)

    return <>
        <div className="wrapper">
            <aside>
            <Navbar/>
            </aside>
            <main onClick={() => {saveNote()}}>
                <div className="main-wrapper">
                        <SearchBar/>
                        <div className="notes-wrapper" style= {{backgroundColor: 'tomato'}} onClick={(e) => e.stopPropagation()}>
                            <EmptyNote/>
                        </div>
                        <div className="notes-wrapper">
                         {displayNotes && displayNotes.map(note => <Note note={note}/>)} 
                        </div>
                </div>
            </main>
        </div>
    </>
}