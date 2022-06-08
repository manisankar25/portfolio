import '../styles/portfolio.css';
import React from 'react';
import { forwardRef } from "react";


const Project = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="projectMain">
            <h2 className='header'>Projects</h2>
            <div className="projectsSection">
                <div className='projectContainer'>
                    <h2>National Grid</h2>
                    <div>
                        <p>*I got the opportunity to develop web application by reading JSON data from Liferay in Angular 5 framework and we use bootstrap for styling.</p>
                        <p>*Created multiple Form components and reusable Component.</p>
                        <p>*Created Dashboard, which is used for navigating to different applications.</p>
                        <p>*We have made the application to support on internet explorer(IE)</p>

                    </div>
                </div>
                <div className='projectContainer'>
                    <h2>National Grid</h2>
                    <div>
                        <p>*Developed front end application using ReactJS by Consuming Restful API services from Liferay.</p>
                        <p>*Used Gantt Chart from third party library DHTMLX.</p>
                        <p>*Used Redux for state management and along with that, we use thunk for middleware.</p>
                        <p>*Used Cypress for writing end to end test cases</p>

                    </div>
                </div>
                <div className='projectContainer'>
                    <h2>Amercan Express</h2>
                    <div>
                        <p>*Developed front end application using ReactJS by Consuming Restful API services from Back End Team.</p>
                        <p>*Developed service layer using NodeJS for communicating with back-end API calls.</p>
                        <p>*Written unit test cases using JEST with 100 % code coverage.</p>
                        <p>*Developed UI screens with responsive design and compactable in all browsers</p>
                    </div>
                </div>
                <div className='projectContainer'>
                    <h2>Amercan Express</h2>
                    <div>
                        <p>*Developed front end application using ReactJS by Consuming Restful API services from Back End Team.</p>
                        <p>*Developed service layer using NodeJS for communicating with back-end API calls.</p>
                        <p>*Written unit test cases using JEST with 100 % code coverage.</p>
                        <p>*Developed UI screens with responsive design and compactable in all browsers</p>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Project;