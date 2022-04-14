import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { NoteProvider } from "./contexts/note-context";
import { FilterProvider } from "./contexts/filter-context";
import { AuthProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <NoteProvider>
        <FilterProvider>  
         <App />
        </FilterProvider>
      </NoteProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
