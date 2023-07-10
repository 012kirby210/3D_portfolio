import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { style } from "../style.js";
import { NavLink } from "react-router-dom";
import { logo, menu, close } from '../assets';
import {navLinks} from "../constants/index.js";

import { useTheme } from "./ThemeContext.jsx";
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

const Navbar = () => {

    const [ active, setActive ] = useState("");
    const [ toggle, setToggle ] = useState(false);

    const { theme, toggleTheme } = useTheme();

    const handleClickLink = () => {
        setActive('');
        window.scrollTo(0,0);
    };

    return (
        <nav className={`${style.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-white dark:bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2"
                      onClick={handleClickLink}>
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="cursor-pointer text-white text-[18px]">Javascript Mastery</p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map( (link) => (
                        <li key={link.id}
                            className={`${active === link.title ? "text-white" : "text-secondary"}
                                hover:text-white text-[18px] font-medium cursor-pointer`
                            }
                        onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                    <li className="flex justify-center items-center w-8 h-8" onClick={toggleTheme}>
                       <img src={ "dark" === theme ? sun : moon } className="w-full h-full opacity-50 hover:opacity-100 cursor-pointer"/>
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={ toggle ? close : menu }
                         alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={()=> setToggle(!toggle)}
                    />
                    <div className={`${ !toggle ? "hidden" : "flex" } p-6 black-gradient absolute top-20
                    right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex  justify-end items-start flex-col gap-4">
                            {navLinks.map( (link) => (
                                <li key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-secondary"}
                                font-poppins font-medium cursor-pointer text-[16px]`
                                    }
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }
                                    }
                                        >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;