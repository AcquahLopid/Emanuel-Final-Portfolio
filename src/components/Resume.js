import React from "react";
import resume from "../assets/Emanuel-Molina resume 2021 OLD.pdf";
function Resume(){
    return (
    <div>
        <div>
            <p>Resume</p>
            <br></br>
        </div>
        <div>
        <a
        className="button is-primary"
        href={resume}
        download="EmanuelMolinaResume.pdf"
        >
        
        </a>
        </div>
    </div>    

    );
}

export default Resume;
