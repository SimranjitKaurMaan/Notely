import { Routes, Route } from "react-router-dom";
import { Archive } from "../Archive";
import { Home } from "../Home";
import { Label } from "../Label";
import { Trash } from "../Trash";
import { MockAPI } from "../../MockAPI";
import { SignUp } from "../Signup";
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