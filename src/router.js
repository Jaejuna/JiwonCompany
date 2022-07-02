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
                <Route exact path="/" element={<Empty />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/calender" element={<Calender />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
