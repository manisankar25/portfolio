import React, { useRef } from 'react';
import '../styles/portfolio.css';
const Header = ({ resultRef, projectRef }) => {
    const projects = useRef();
    const about = useRef();
    const content = useRef();
    const Personal = useRef();
    const projectHandle = () => {
        projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const aboutHandle = () => {
        about.current.scrollIntoView({ behavior: "smooth" });
    }
    const contactHandle = () => {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const personalHandle = () => {
        Personal.current.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div>
            <ul className='NavBar'>
                <li onClick={projectHandle}>Projects</li>
                <li onClick={aboutHandle}>About</li>
                <li onClick={contactHandle}>Contact</li>
                <li onClick={personalHandle}>Personal</li>
            </ul>
            <div className="intro">
                <h1>My Name is Venkat</h1>
                <h2>JavaScript Developer</h2>
            </div>
        </div>
    )

}
export default Header;