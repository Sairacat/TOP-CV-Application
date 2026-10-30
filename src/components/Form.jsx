import { useState } from "react";
import '../styles/form.css';
import arrowLeft from '../assets/arrow-left.svg';
import addBtn from '../assets/add-btn.svg'
import { GeneralInfo } from "./GeneralInfo.jsx";
import { EducationInfo } from "./EducationInfo.jsx";
import { SavedGeneralCard } from "./savedCards.jsx";

function Form({handleBackward}) {

    const [generalFields, setGeneralFields] = useState(
        [{id:crypto.randomUUID(), isSaved: false, savedValue: null,}]);

    const [educationFields, setEducationFields] = useState([{id:crypto.randomUUID()}]);

    function saveGeneralFields(id, info) {
        const savedFields = generalFields.map(field => {
            if(field.id === id) {
                return {...field, isSaved: true, savedValue: {...info}};
            }
        })

        setGeneralFields(savedFields);
    }

    function editGeneralFields(id) {
        const edittedFields = generalFields.map(field => {
            if(field.id === id) {
                return {...field, isSaved: false};
            }
        })

        setGeneralFields(edittedFields);
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
            field.isSaved 
            ? <SavedGeneralCard key={field.id} id={field.id} handleEdit={editGeneralFields} savedValue={field.savedValue}/>
            : <GeneralInfo key={field.id} id={field.id} savedValue={field.savedValue} handleSave={saveGeneralFields}/>)
            }

            <h2>Education</h2>
            
            <ul>
                {educationFields.map(field => <EducationInfo key={field.id} id={field.id} handleRemove={removeEducationField}/>)}
            </ul>
            <button onClick={addEducationField} type="button" title="add another education field" className="add-btn">
                <img src={addBtn} alt="add another education filed" height="32" />
            </button>
        </form>
        <button onClick={handleBackward}>
            <img src={arrowLeft} alt="to previous page" height="80"/>
        </button>
    </div>
)

}

export {Form};