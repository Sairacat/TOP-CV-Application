import { useState } from "react"

function EducationInfo({id, handleRemove}) {
    const [educationInfo, setEducationInfo] = useState({school: null,})

    function handleEducationInfoChange(e) {
        const {id, value} = e.target;
        setEducationInfo(educationInfo => ({...educationInfo, [id]: value}))
    }

    return(
        <li key={id}>        
            <section className="education-info">
                <label htmlFor="school">Graduated: </label>
                <input type="text" 
                        id="school" 
                        placeholder="Brown University" 
                        value={educationInfo.school} 
                        onChange={handleEducationInfoChange}/>
                <button type="button" onClick={() => handleRemove(id)}>Remove</button>
            </section>
        </li>
    )
}

export {EducationInfo}