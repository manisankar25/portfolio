import '../styles/portfolio.css';

const Skills = () => {
    return (
        <div>
            <div className="header">About <span className="marker">Venkat Kantipudi</span></div>
            <div className="bar"></div>
            <div id="about-text">
                <p>ttttttttttttttttttttttttttttttttttttttttttt</p>
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
                        <div className="skills CSS">75%
                        </div></div>
                    <p>Java Script</p>
                    <div className="commonskill">
                        <div className="skills JS">60%
                        </div></div>
                    <p>React</p>
                    <div className="commonskill">
                        <div className="skills REACT">40%
                        </div>
                    </div>
                </div>
                <div className="support-skills">
                    <h2>Software Experience</h2>
                </div>
            </div>
        </div>
    )
}
export default Skills;