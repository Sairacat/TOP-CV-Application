import "../styles/result.css";
import arrowLeft from '../assets/arrow-left.svg';
import { TemplateA } from "./TemplateA.jsx";

function Result({infos, template, handleBackward}) {
    const generalInfo = infos.general;
    const educationInfo = infos.education;
    const careerInfo = infos.career;
    const certInfo = infos.cert;

    console.log(infos);
    return(
        <div className="base">
            {template === 0 && <TemplateA generalInfo={generalInfo} educationInfo={educationInfo} careerInfo={careerInfo} certInfo={certInfo}/>}
            <button
            onClick={handleBackward}
            type="button"
            title="to previous page"
            className="fixed-btn"
            >
            <img src={arrowLeft} alt="to previous page" height="80" />
            </button>
        </div>
    )
}

export {Result}