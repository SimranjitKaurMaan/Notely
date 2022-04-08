import * as React from 'react';
import { Navbar, SearchBar, EmptyNote } from './customComponents';

export const Home = () => {
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
                    </div>
            </div>
        </main>
    </div>
    </>
}