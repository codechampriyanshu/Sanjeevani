import React, { useState, useEffect } from "react";
import Menuitem from "./Menuitem";
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = ({ sidebarOn, onSidebarChange, active }) => {
    const [navcolor, setNavcolor] = useState(false);


    const changeNavBg = () => {
        window.scrollY >= 80 ? setNavcolor(true) : setNavcolor(false);
    };

    useEffect(() => {
        changeNavBg();
        window.addEventListener("scroll", changeNavBg);
    });


    return (
        <div
            className={`sticky top-0 duration-500 z-40 items-center flex flex-row justify-between h-14 md:h-20 px-2 md:px-10 lg:px-28 py-5 ${navcolor ? `bg-custom-muted opacity-90` : `bg-custom-transparent`
                } ${navcolor ? `text-custom-primary` : `text-custom-muted`}`}
        >
            {/* Logo */}
            <Link to="/#Home">
                <img
                    src={process.env.PUBLIC_URL + "/images/logo/logo.png"}
                    alt="Logo"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
            </Link>

            {/* Menubar */}
            <ul className="flex flex-row space-x-1">
                <Menuitem title="Home" section="#Home" active={active === "home"} />
                <Menuitem title="Events" section="#Events" active={active === "events"} />
                <Menuitem title="StartUps" section="#Startups" active={active === "startups"} />
                <Menuitem title="Team" section="/team" active={active === "team"} />
                <Menuitem title="Contact" section="#Contact" active={active === "contact"} />

                {/* Hamburger menu icon */}
                <li
                    className="md:hidden"
                    onClick={() => {
                        onSidebarChange();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 p-2 mr-2 rounded-full hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </li>
            </ul>
        </div>
    );
}

export default Navbar
