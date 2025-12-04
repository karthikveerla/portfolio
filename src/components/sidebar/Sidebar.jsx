import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.png";
import LightLogo from "../../assets/light-logo.png";
import { FaGraduationCap } from "react-icons/fa";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";


const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link" title="Home">
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link" title="About">
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" className="nav__link" title="Skills">
                                    <RiFileList3Line />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#education" className="nav__link" title="Education">
                                <FaGraduationCap />
                                </a>
                            </li>
                            

                            <li className="nav__item">
                                <a href="#resume" className="nav__link" title="Experience">
                                    <RiBriefcase2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#Project" className="nav__link" title="Projects">
                                    <RiStackLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link" title="Contact">
                                    <RiChat3Line />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
