import React from 'react';
import {Outlet,Link} from "react-router-dom";
const Form=()=>{
    return(
    <>
    <nav>
        <ol>
            <li>
                <Link to="/">Registration</Link>
            </li>
            <li>
                <Link to="/">Log In</Link>
            </li>
            <li>
                <Link to="/">Sign Up</Link>
            </li>
        </ol>
    </nav>
    </>
    );
}