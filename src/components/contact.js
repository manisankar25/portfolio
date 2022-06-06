import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <div className="contactBox">
            <div className="contactBox2">
                <div>
                    <div className="header-contact">Contact</div>
                    <div id="contact-bar" class="bar"></div>
                    <div className="header-text">I'm currently open to new career opportunities. Would you like to contact me? Feel free to leave me a message, or reach out through the websites below:</div>
                    <div id="social-media">
                        <a id="linkedin-link" class="contact-button" href="https://nl.linkedin.com/in/vincentoldenburg" target="_blank" title="Linkedin.com/in/VincentOldenburg"><i class="fa-brands fa-linkedin"></i></a>
                        <a id="github-link" class="contact-button" href="https://www.github.com/trajectum" target="_blank" title="Github.com/Trajectum"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                        <a id="codepen-link" class="contact-button" href="https://www.codepen.io/dirack" target="_blank" title="Codepen.io/Dirack"><i class="fa fa-5x fa-codepen"></i></a>
                        <a id="profile-link" class="contact-button" href="https://www.freecodecamp.org/dirack" target="_blank" title="FreeCodeCamp.com/Dirack"><i class="fa fa-5x fa-free-code-camp"></i></a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Contact;