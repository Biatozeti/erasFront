import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import CadastroCliente from "../components/CadastroCliente";

const AppRouter = () => {
 return (
    <BrowserRouter>
    <Routes>
        <Route path="cliente/cadastro" element={<CadastroCliente/>}/>
    </Routes>
    </BrowserRouter>
 )
}

export default AppRouter;