import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillControl } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Contact = () => {
    return (
        <div className="contactBox">
            <div className="contactBox2">
                <div>
                    <div className="header-contact">Contact</div>
                    <div id="contact-bar" class="bar"></div>
                    <div className="header-text">I'm currently open to new career opportunities. Would you like to contact me? Feel free to leave me a message, or reach out through the websites below:</div>
                    <div id="social-media">
                        <a id="linkedin-link" class="contact-button" href="https://www.linkedin.com/in/mani-sankar-72985093/" target="_blank" title="Linkedin.com/in/ManiSankar"><AiFillLinkedin /></a>
                        <a id="github-link" class="contact-button" href="https://github.com/manisankar25" taret="_blank" title="Github.com/Trajectum"><AiFillGithub /></a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Contact;