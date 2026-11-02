import { useState } from "react";
import '../styles/form.css';
import arrowLeft from '../assets/arrow-left.svg';
import addBtn from '../assets/add-btn.svg'
import { GeneralInfo } from "./GeneralInfo.jsx";
import { EducationInfo } from "./EducationInfo.jsx";
import { SavedGeneralCard, SavedEducationCard } from "./savedCards.jsx";

function Form({handleBackward}) {

    const [generalFields, setGeneralFields] = useState(
        [{id:crypto.randomUUID(), isSaved: false, savedValue: null,}]
    );

    const [educationFields, setEducationFields] = useState(
        [{id:crypto.randomUUID(), isSaved: false, savedValue: null,}]
    );

    const settersMap = {
        general: setGeneralFields,
        education: setEducationFields,
    }

    function saveFields(id, info, type) {
        const stateSetter = settersMap[type];
        stateSetter(prev => prev.map(field => {
            if(field.id === id) {
                return {...field, isSaved: true, savedValue: {...info}}
            }else {
                return field;
            }
        }))
    }

    function editFields(id, type) {
        const stateSetter = settersMap[type];
        stateSetter(prev => prev.map(field => {
            if(field.id === id) {
                return {...field, isSaved: false};
            }else {
                return field
            }
        }))
    }

    function addField(e, type) {
        e.preventDefault();
        const stateSetter = settersMap[type];
        stateSetter(prev => [...prev, {id:crypto.randomUUID(), isSaved: false, savedValue: null,}])
    }

    function removeField(id, type) {
        const stateSetter = settersMap[type];
        stateSetter(prev => prev.filter(field => field.id !== id));
    }



return(
    <div className="form-container">
        <form action="">
            <h1>Fill Out Your CV/Resume!</h1>
            {generalFields.map(field => 
            field.isSaved 
            ? <SavedGeneralCard key={field.id} id={field.id} handleEdit={editFields} savedValue={field.savedValue} setterType="general"/>
            : <GeneralInfo key={field.id} id={field.id} handleSave={saveFields} savedValue={field.savedValue} setterType="general"/>
            )}

            <h2 className="fields-title">Education</h2>
            
            <ul>
                {educationFields.map(field =>
                field.isSaved
                ? <SavedEducationCard key={field.id} id={field.id} handleEdit={editFields} savedValue={field.savedValue} setterType="education"/>
                : <EducationInfo key={field.id} id={field.id} handleSave={saveFields} handleRemove={removeField} savedValue={field.savedValue} setterType="education"/>                
            )}
            </ul>
            <button onClick={(e) => addField(e, 'education')} type="button" title="add another education field" className="add-btn">
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