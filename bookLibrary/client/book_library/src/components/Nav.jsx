import { Link, useLocation} from "react-router-dom"
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Nav = () => {

    const { pathname } = useLocation();

    return (
        <>
            <header className="nav">
                <div className="close">
                    {pathname != "/create/book"?
                        <Link to={"/create/book"}>Add Book</Link>
                        : null
                    }
                    {pathname != "/"?
                        <Link to={"/"}>Library</Link>
                        : null
                    }
                </div>
            </header>
        </>
    )
}

export default Nav;