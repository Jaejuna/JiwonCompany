import React from "react";

import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Calender from "./routes/Calender";
import Empty from "./routes/Empty";

import {BrowserRouter, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Empty />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Calender" element={<Calender />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
