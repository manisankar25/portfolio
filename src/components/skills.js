import '../styles/portfolio.css';
import { forwardRef } from "react";


const Skills = forwardRef((props, ref) => {
    return (
        <div  ref={ref} class="skillsContainer" >
            <div className="header">About <span className="marker">Venkat Kantipudi</span></div>
            <div className="bar"></div>
            <div id="about-text">
                <p className='header'>Experience in developing web applications by using JavaScript Frameworks ( ReactJS and Angular)</p>
            </div>
            <div className="about-skills">
                <div className="forntend-skills">
                    <h2>Front-end Development Skills</h2>
                    <p>HTML</p>
                    <div className="commonskill">
                        <div className="skills htmling">75%
                        </div></div>
                    <p>CSS</p>
                    <div className="commonskill">
                        <div className="skills CSS">70%
                        </div></div>
                    <p>Java Script</p>
                    <div className="commonskill">
                        <div className="skills JS">90%
                        </div></div>
                    <p>React</p>
                    <div className="commonskill">
                        <div className="skills REACT">80%
                        </div>
                    </div>
                </div>
                <div className="support-skills">
                    <h2>Software Experience</h2>
                    <div className="skillsName">
                        <p>Cypress</p>
                        <p>Jest</p>
                        <p>NodeJS</p>
                        <p>Git Hub</p>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Skills;