import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header id="masthead" className="site-header">
            <nav id="primary-navigation" className="site-navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#portfolio-perfect-collapse"
                            aria-expanded="false"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="site-logo">
                            <Link to="top" spy={true} smooth={true} duration={500}>
                                John
                            </Link>
                        </div>
                    </div>
                    <div className="main-menu collapse navbar-collapse" id="portfolio-perfect-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="top" spy={true} smooth={true} duration={500}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="intro" spy={true} smooth={true} duration={500}>
                                    Intro
                                </Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} duration={500}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="services" spy={true} smooth={true} duration={500}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="works" spy={true} smooth={true} duration={500}>
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true} duration={500}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;