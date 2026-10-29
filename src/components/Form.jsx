import { useState } from "react";
import '../styles/form.css';
import arrowLeft from '../assets/arrow-left.svg';
import { GeneralInfo } from "./GeneralInfo.jsx";
import { EducationInfo } from "./EducationInfo.jsx";

function Form({handleBackward}) {

    const [generalFields, setGeneralFields] = useState(
        [{id:crypto.randomUUID(), isSaved: false, savedValue: null,}]);

    const [educationFields, setEducationFields] = useState([{id:crypto.randomUUID()}]);

    function saveGeneralFields(id, info) {
        const savedFields = generalFields.map(field => {
            if(field.id === id) {
                field.isSaved = true;
                field.savedValue = {...info};
            }
        })

        setGeneralFields(savedFields);
    }

    function addEducationField(e) {
        e.preventDefault();
        setEducationFields([...educationFields, {id:crypto.randomUUID()}]);
    }

    function removeEducationField(id) {
        const filterdFields = educationFields.filter(field => field.id !== id);
        setEducationFields(filterdFields);
    }



return(
    <div className="form-container">
        <form action="">
            <h1>Fill Out Your CV/Resume!</h1>
            {generalFields.map(field => 
                <GeneralInfo 
                    key={field.id} 
                    id={field.id} 
                    savedValue={field.savedValue} 
                    handleSave={saveGeneralFields}/>)
            }

            <ul>
                {educationFields.map(field => <EducationInfo key={field.id} id={field.id} handleRemove={removeEducationField}/>)}
            </ul>
            <button onClick={addEducationField} type="button">Add</button>
        </form>
        <button onClick={handleBackward}>
            <img src={arrowLeft} alt="to previous page" height="80"/>
        </button>
    </div>
)

}

export {Form};