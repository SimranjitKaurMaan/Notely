import { Routes, Route } from "react-router-dom";
import { Archive } from "../";
import { Home } from "../";
import { Label } from "../";
import { Trash } from "../";
import { MockAPI } from "../../MockAPI";
import { SignUp } from '../';
export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    )
}