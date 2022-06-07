import Header from "./header";
import Project from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import { useRef } from "react";

const Root = () => {
    const resultRef = useRef(null);
    const projectRef = useRef(null);

    return(
        <div>
            <Header resultRef={resultRef} projectRef={projectRef} ></Header>
            <Project ref={projectRef}></Project>
            <Skills></Skills>
            <Contact ref={resultRef}></Contact>
        </div>
    )
}
export default Root;