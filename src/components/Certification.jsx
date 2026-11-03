import { useState } from "react";
import deleteBtn from '../assets/delete-btn.svg'

function Certification({id, handleRemove, handleSave, savedValue, setterType}) {
    const [certInfo, setCertInfo] = useState(savedValue === null ?
        {
            certName: '',
            acquiredTime: '',
        } : {...savedValue}
    )

    function handleCertInfoChange(e) {
        const {id, value} = e.target;
        setCertInfo({...certInfo, [id]:value});
    }

    return(
        <li key={id}>
            <section className="cert-info">
                <div className="input-unit">
                    <label htmlFor="certName">Certification Name:</label>
                    <input type="text"
                            id="certName"
                            placeholder="AI Researcher Certification"
                            value={certInfo.certName}
                            onChange={handleCertInfoChange} />
                </div>
                <div className="input-unit">
                    <label htmlFor="acquiredTime">Acquired Time:</label>
                    <input type="date"
                            id="acquiredTime"
                            value={certInfo.acquiredTime}
                            onChange={handleCertInfoChange} />
                </div>

                <button type="button" onClick={() => handleRemove(id, setterType)} title="remove field" className="remove-btn">
                    <img src={deleteBtn} alt="delete your certification field" height="32"/>
                </button>

                <button className="save-btn" type="button" title="save your info" onClick={() => handleSave(id, certInfo, setterType)}>Save</button>
            </section>
        </li>
    )
}

export {Certification}