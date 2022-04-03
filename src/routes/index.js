import { Routes, Route } from "react-router-dom";
import { Archive } from "../components/Archive";
import { Home } from "../components/Home";
import { Label } from "../components/Label";

import { Main } from "../components/Main";
import { Trash } from "../components/Trash";
import { MockAPI } from "../MockAPI";
export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/labels" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    )
}