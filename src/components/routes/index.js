import { Routes, Route } from "react-router-dom";
import { Archive } from "../";
import { Home } from "../";
import { Label } from "../";
import { Trash } from "../";
import { MockAPI } from "../../MockAPI";
import { SignUp } from '../';
import { RequiresAuth } from "../customComponents";
export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<RequiresAuth><Home /></RequiresAuth>} />
        <Route path="/label" element={<RequiresAuth><Label /></RequiresAuth>} />
        <Route path="/archive" element={<RequiresAuth><Archive /></RequiresAuth>} />
        <Route path="/trash" element={<RequiresAuth><Trash /></RequiresAuth>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    )
}