import { useState } from "react";
import deleteBtn from '../assets/delete-btn.svg';

const validationStates = ["valueMissing"];
const errorMessageMap = {
    valueMissing: "/Required*",
}

function Certification({id, handleRemove, handleSave, savedValue, setterType}) {
    const [certInfo, setCertInfo] = useState(savedValue === null ?
        {
            certName: {value: "", isValid: true, errorMsg: ""},
            acquiredTime: {value: "", isValid: true, errorMsg: ""},
        } : {...savedValue}
    )

    function handleCertInfoChange(e) {
        const {name, value, validity} = e.target;
        const failedKeys = validationStates.filter(key => validity[key]);
        const errorMsg = failedKeys.length > 0 ? failedKeys.map(key => errorMessageMap[key]).join("").slice(1) : "";
        setCertInfo({...certInfo, [name]:{value: value, isValid: validity.valid, errorMsg: errorMsg}});
    }

    function handleValidationAndSave() {
        let hasError = false;
        const validatedInfo = {...certInfo};

        Object.keys(validatedInfo).forEach(key => {
            const field = validatedInfo[key];
            if(!field.isValid) {
                hasError = true;
                return
            }

            if(field.value === "" && field.isValid) {
                validatedInfo[key] = {
                    ...field,
                    isValid: false,
                    errorMsg: "Required*"
                }

                hasError = true;
            }
        })

        if(hasError) {
            setCertInfo(validatedInfo);
        }else {
            handleSave(id, certInfo, setterType)
        }
    }

    return(
        <li key={id}>
            <section className="cert-info">
                <div className="input-unit">
                    <label htmlFor={`certName-${id}`}>
                        Name{" "}
                        {certInfo.certName.isValid ? null : (
                        <span
                            style={{
                            color: "red",
                            paddingLeft: "10px",
                            fontWeight: "initial",
                            }}
                        >
                            {certInfo.certName.errorMsg}
                        </span>
                        )}
                    </label>
                    <input type="text"
                            id={`certName-${id}`}
                            name="certName"
                            placeholder="AI Researcher Certification"
                            value={certInfo.certName.value}
                            onChange={handleCertInfoChange} 
                            required/>
                </div>
                <div className="input-unit">
                    <label htmlFor={`acquiredTime-${id}`}>
                        Acquired Time{" "}
                        {certInfo.acquiredTime.isValid ? null : (
                        <span
                            style={{
                            color: "red",
                            paddingLeft: "10px",
                            fontWeight: "initial",
                            }}
                        >
                            {certInfo.acquiredTime.errorMsg}
                        </span>
                        )}
                    </label>
                    <input type="date"
                            id={`acquiredTime-${id}`}
                            name="acquiredTime"
                            value={certInfo.acquiredTime.value}
                            onChange={handleCertInfoChange} 
                            required/>
                </div>

                <button type="button" onClick={() => handleRemove(id, setterType)} title="remove field" className="remove-btn">
                    <img src={deleteBtn} alt="delete your certification field" height="32"/>
                </button>

                <button className="save-btn" type="button" title="save your info" onClick={handleValidationAndSave}>Save</button>
            </section>
        </li>
    )
}

export {Certification}