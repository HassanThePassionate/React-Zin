import React from 'react';
import './Scss/index.scss';

const Navbar = () => {

    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar flex-2">

                        <div className="logo">
                            <i className="fa-solid fa-gear text-light"></i>
                            <span>ZinTools</span>
                        </div>

                        <form>
                            <div className="search-bar">
                                <input
                                    type="search"
                                    name="search"
                                    className="search"
                                    placeholder="Search for Movie, TV Shows, Themes & Cast"

                                />
                                <button type="submit" className="search-button">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </form>

                        <div className="btns">
                            <button className="btn bg-light">Login</button>
                            <button className="btn purple bg-primary">Sign Up</button>
                        </div>
                    </nav>

                    <section className="crumber">
                        <ul className="list">
                            <li><a href="#">Stock Video</a></li>
                            <li><a href="#">Video template</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Sound Effect</a></li>
                            <li><a href="#">Graphic Template</a></li>
                            <li><a href="#">Graphic</a></li>
                            <li><a href="#">Presentation Tempalte</a></li>
                            <li><a href="#">Photo</a></li>
                            <li><a href="#">Fonts</a></li>
                            <li><a href="#">Add ons</a></li>
                            <li><a href="#">More</a></li>
                        </ul>
                    </section>
                </div>
            </header>
        </>
    );
};

export default Navbar;
