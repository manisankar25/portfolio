import React, { useRef } from 'react';
import '../styles/portfolio.css';
const Header = ({ resultRef, projectRef, skillref }) => {
    const projects = useRef();
    const about = useRef();
    const content = useRef();
    const Personal = useRef();
    const projectHandle = () => {
        projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const aboutHandle = () => {
        skillref.current.scrollIntoView({ behavior: "smooth" });
    }
    const contactHandle = () => {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <ul className='NavBar'>
                <li onClick={projectHandle}>Projects</li>
                <li onClick={aboutHandle}>About</li>
                <li onClick={contactHandle}>Contact</li>
            </ul>
            <div className="intro">
                <h1>Hello, I'm <span>Mani Sankar</span></h1>
                <h1>I'm a Front-End web developer</h1>
            </div>
        </div>
    )

}
export default Header;