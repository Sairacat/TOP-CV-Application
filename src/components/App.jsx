import { useState } from "react";
import '../styles/App.css';
import { Greeting } from "./Greeting.jsx";
import { Selection } from "./Selection.jsx";

function App() {
    const [pageIndex, setPageIndex] = useState(0);
    const [template, setTemplate] = useState('');

    function forwardPage() {
        setPageIndex(pageIndex+1);
    }

    function backwardPage() {
        setPageIndex(pageIndex-1);
    }

    function updateTemplate(style) {
        setTemplate(style);
    }

    return(
        <div>
            <Greeting display={pageIndex === 0} handleForward={forwardPage}/>
            <Selection display={pageIndex === 1} 
                        handleForward={forwardPage} 
                        handleBackward={backwardPage} 
                        updateTemplate={updateTemplate}/>
        </div>
    )

}

export {App}