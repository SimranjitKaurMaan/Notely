import { Routes, Route } from "react-router-dom";
import { Archive } from "../Archive";
import { Home } from "../Home";
import { Label } from "../Label";
import { Trash } from "../Trash";
import { MockAPI } from "../../MockAPI";
export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/labels" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    )
}