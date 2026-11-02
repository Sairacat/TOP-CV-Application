import { useState } from "react";
import '../styles/educationInfo.css';
import deleteBtn from '../assets/delete-btn.svg';

function EducationInfo({id, handleRemove, handleSave, savedValue, setterType}) {
    const [educationInfo, setEducationInfo] = useState(savedValue === null ?
    {
        school: '', 
        major: '', 
        from: '', 
        to: '',
        degree: "Master",
        gpa: 3.5,
        moreInfo:'',
    } : {...savedValue})

    function handleEducationInfoChange(e) {
        const {id, value} = e.target;
        setEducationInfo(educationInfo => ({...educationInfo, [id]: value}))
    }

    return(
        <li key={id}>        
            <section className="education-info">
                <div className="input-unit">
                    <label htmlFor="school">Graduated School </label>
                    <input type="text" 
                            id="school" 
                            placeholder="Brown University" 
                            value={educationInfo.school} 
                            onChange={handleEducationInfoChange}/>
                </div>

                <div className="input-unit">
                    <label htmlFor="major">Major </label>
                    <input type="text"
                            id="major"
                            placeholder="Computer Science"
                            value={educationInfo.major}
                            onChange={handleEducationInfoChange} />
                </div>

                <div className="input-unit">
                    <label htmlFor="from">From</label>
                    <input type="date"
                            id="from"
                            value={educationInfo.from}
                            onChange={handleEducationInfoChange} />
                </div>

                <div className="input-unit">
                    <label htmlFor="to">To</label>
                    <input type="date"
                            id="to"
                            value={educationInfo.to}
                            min={educationInfo.from}
                            onChange={handleEducationInfoChange} />
                </div>

                <div className="input-unit">
                    <label htmlFor="degree">Degree</label>
                    <div className="select-container">
                        <select id="degree" value={educationInfo.degree} onChange={handleEducationInfoChange}>
                            <option value="High School">High School</option>
                            <option value="Associate">Associate</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                            <option value="Doctorate">Doctorate</option>
                        </select>
                        <div className="select-arrow">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="input-unit">
                    <label htmlFor="gpa">GPA</label>
                    <input type="number" 
                            id="gpa"
                            value={educationInfo.gpa}
                            min={0}
                            max={4}
                            step={0.1}
                            onChange={handleEducationInfoChange} />
                </div>

                <div className="input-unit more-info">
                    <label htmlFor="moreInfo">More information</label>
                    <textarea id="moreInfo" 
                    value={educationInfo.moreInfo} 
                    onChange={handleEducationInfoChange}
                    placeholder="Your achievements, your hobbies, your school life, etc... Help us know more about you."
                    ></textarea>
                </div>

                <button type="button" onClick={() => handleRemove(id, setterType)} title="remove field" className="remove-btn">
                    <img src={deleteBtn} alt="delete your education field" height="32"/>
                </button>

                <button className="save-btn" type="button" title="save your info" onClick={() => handleSave(id, educationInfo, setterType)}>Save</button>
            </section>
        </li>
    )
}

export {EducationInfo}