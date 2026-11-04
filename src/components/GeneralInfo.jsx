import { useState } from "react";
import '../styles/generalInfo.css';

const errorMessageMap = {
    valueMissing: '/Required*',
    typeMismatch: '/Invalid Email Format*',
    tooShort: {
        firstName: '/2 letters at least',
        lastName: '/2 letters at least',
        phone: '/8 numbers at least',
    }
}

const validityStates = [
        'valueMissing',
        'tooShort',
        'typeMismatch'
]
        
function GeneralInfo({id, handleSave, savedValue, setterType}) {
    const [generalInfo, setGeneralInfo] = useState(savedValue === null ?
        {
            firstName: {value: '', isValid: true, errorMsg: ''},
            lastName: {value: '', isValid: true, errorMsg: ''},
            email: {value: '', isValid: true, errorMsg: ''},
            phone: {value: '', isValid: true, errorMsg: ''},
        } : {...savedValue}
    )
    

    function handleGeneralInfoChange(e) {
        const {id, value, validity} = e.target;
        const failedKeys = validityStates.filter(key => validity[key]);
        const errorMsg = failedKeys.length > 0 ? failedKeys.map(key => {
            if(key === 'tooShort') {
                return errorMessageMap[key][id];
            }else {
                return errorMessageMap[key];
            }
        }).join('').slice(1) : '';
        setGeneralInfo(prev => ({...prev, [id]: {value: value, isValid: validity.valid, errorMsg: errorMsg}}));
    }

    function handleValidationBeforeSave() {
        let hasError = false;
        const validatedInfo = {...generalInfo};

        Object.keys(validatedInfo).forEach(key => {
            const field = validatedInfo[key];
            if(!field.isValid) {
                hasError = true;
            }

            if(field.value.trim() === '' && field.isValid) {
                validatedInfo[key] = {
                    ...field,
                    isValid: false,
                    errorMsg: 'Required*'
                }

                hasError = true;
            }
        })

        if(hasError) {
            setGeneralInfo(validatedInfo);
            return
        }else {
            handleSave(id, generalInfo, setterType)
        }
    }

    return(
        <section id="general-info">
            <div className="input-unit">
                <label htmlFor="firstName">
                    First Name {generalInfo.firstName.isValid ? null : <span style={{color:'red', paddingLeft: '10px', fontWeight: 'initial'}}>{generalInfo.firstName.errorMsg}</span>}
                </label>
                <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Jack" 
                    value={generalInfo.firstName.value} 
                    onChange={handleGeneralInfoChange}
                    minLength={2}
                    required/>
            </div>

            <div className="input-unit">
                <label htmlFor="email">E-mail {generalInfo.email.isValid ? null : <span style={{color:'red', marginLeft: '10px', fontWeight: 'initial'}}>{generalInfo.email.errorMsg}</span>}</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="fakeEmail@mail.com" 
                    value={generalInfo.email.value} 
                    onChange={handleGeneralInfoChange}
                    required/>
            </div>

            <div className="input-unit">
                <label htmlFor="lastName">Last Name {generalInfo.lastName.isValid ? null : <span style={{color:'red', marginLeft: '10px', fontWeight: 'initial'}}>{generalInfo.lastName.errorMsg}</span>}</label>
                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Muller" 
                    value={generalInfo.lastName.value} 
                    onChange={handleGeneralInfoChange}
                    minLength={2}
                    required/>
            </div>

            <div className="input-unit">
                <label htmlFor="phone">Phone {generalInfo.phone.isValid ? null : <span style={{color:'red', marginLeft: '10px', fontWeight: 'initial'}}>{generalInfo.phone.errorMsg}</span>}</label>
                <input 
                    type="tel" 
                    id="phone" 
                    placeholder="051-8233" 
                    value={generalInfo.phone.value} 
                    onChange={handleGeneralInfoChange}
                    minLength={8}
                    required/>
            </div>

            <button className="save-btn" type="button" onClick={handleValidationBeforeSave}>Save</button>
        </section>
    )
}

export {GeneralInfo};