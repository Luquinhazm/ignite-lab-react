import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/Inicio" element={<HomePage/>}/>
            <Route path="/Inicio/lesson/:slug" element={<HomePage/>}/>
        </Routes>
    )
}