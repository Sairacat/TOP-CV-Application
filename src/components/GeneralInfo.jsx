import { useState } from "react";

function GeneralInfo({id, savedValue, handleSave}) {
    const [generalInfo, setGeneralInfo] = useState({firstName:'', lastName:'', email:'', phone:''});
    function handleGeneralInfoChange(e) {
        const {id, value} = e.target;
        setGeneralInfo(generalInfo => ({...generalInfo, [id]:value}))
    }

    return(
        <section id="general-info">
            <div className="input-unit">
                <label htmlFor="firstName">First Name: </label>
                <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Jack" 
                    value={generalInfo.firstName} 
                    onChange={handleGeneralInfoChange}
                />
            </div>

            <div className="input-unit">
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" placeholder="fakeEmail@mail.com" value={generalInfo.email} onChange={handleGeneralInfoChange}/>
            </div>

            <div className="input-unit">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" placeholder="Muller" value={generalInfo.lastName} onChange={handleGeneralInfoChange}/>
            </div>

            <div className="input-unit">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" placeholder="051-8233" value={generalInfo.phone} onChange={handleGeneralInfoChange}/>
            </div>

            <button type="button" onClick={() => handleSave(id, generalInfo)}>Save</button>
        </section>
    )
}

export {GeneralInfo};