import { useState } from "react";
import '../styles/App.css';
import { Greeting } from "./Greeting.jsx";
import { Selection } from "./Selection.jsx";
import { Form } from "./Form.jsx";
import { Result } from "./Result.jsx";

function App() {
    const [pageIndex, setPageIndex] = useState(0);
    const [template, setTemplate] = useState(null);
    const [infoObject, setInfoObject] = useState({
        generalInfo: null,
        educationInfo: null,
        careerInfo: null,
        certInfo: null,
    })

    function forwardPage() {
        setPageIndex(pageIndex+1);
    }

    function backwardPage() {
        setPageIndex(pageIndex-1);
    }

    function updateTemplate(layout) {
        setTemplate(layout);
    }

    function submitInfos(infos) {
        setInfoObject(infos);
        forwardPage();
    }

    console.log(template);

    return(
        <div>
            {pageIndex === 0 && (<Greeting handleForward={forwardPage}/>)}
            {pageIndex === 1 && (<Selection handleForward={forwardPage} handleBackward={backwardPage} updateTemplate={updateTemplate} templateIndex={template}/>)}
            {pageIndex === 2 && (<Form handleBackward={backwardPage} handleSubmitInfo={submitInfos}/>)}
            {pageIndex === 3 && (<Result infos={infoObject} template={template}/>)}
        </div>
    )

}

export {App}