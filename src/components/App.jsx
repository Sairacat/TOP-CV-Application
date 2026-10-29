import { useState } from "react";
import '../styles/App.css';
import { Greeting } from "./Greeting.jsx";
import { Selection } from "./Selection.jsx";
import { Form } from "./Form.jsx";

function App() {
    const [pageIndex, setPageIndex] = useState(0);
    const [template, setTemplate] = useState('');
    const [infoObject, setInfoObject] = useState({
        generalInfo: null,
        educationInfo: null,
        workInfo: null,
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

    console.log(template);

    return(
        <div>
            {pageIndex === 0 && (<Greeting handleForward={forwardPage}/>)}
            {pageIndex === 1 && (<Selection handleForward={forwardPage} handleBackward={backwardPage} updateTemplate={updateTemplate}/>)}
            {pageIndex === 2 && (<Form handleBackward={backwardPage}/>)}
        </div>
    )

}

export {App}