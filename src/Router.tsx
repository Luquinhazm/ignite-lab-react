import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InscricaoPage from "./pages/InscricaoPage";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<InscricaoPage/>}/>
            <Route path="/Inicio" element={<HomePage/>}/>
            <Route path="/Inicio/lesson/:slug" element={<HomePage/>}/>
        </Routes>
    )
}