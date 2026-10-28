import { useState } from "react";
import '../styles/form.css';
import arrowLeft from '../assets/arrow-left.svg';

function Form({handleBackward}) {
    const [generalInfo, setGeneralInfo] = useState({firstName:'', lastName:'', email:'', phone:''});

    function handleFirstNameChange(e) {
        setGeneralInfo({...generalInfo, firstName:e.target.value});
    }

    function handleLastNameChange(e) {
        setGeneralInfo({...generalInfo, lastName:e.target.value});
    }

    function handleEmailChange(e) {
        setGeneralInfo({...generalInfo, email:e.target.value});
    }

    function handlePhoneChange(e) {
        setGeneralInfo({...generalInfo, phone:e.target.value});
    }

return(
    <div className="form-container">
        <form action="">
            <h1>Fill Out Your CV/Resume!</h1>
            <section id="general-info">
                <div className="input-unit">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" placeholder="Jack" value={generalInfo.firstName} onChange={handleFirstNameChange}/>
                </div>

                <div className="input-unit">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email" placeholder="fakeEmail@mail.com" value={generalInfo.email} onChange={handleEmailChange}/>
                </div>

                <div className="input-unit">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" placeholder="Muller" value={generalInfo.lastName} onChange={handleLastNameChange}/>
                </div>

                <div className="input-unit">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" placeholder="051-8233" value={generalInfo.phone} onChange={handlePhoneChange}/>
                </div>
            </section>
        </form>
        <button onClick={handleBackward}>
            <img src={arrowLeft} alt="to previous page" height="80"/>
        </button>
    </div>
)

}

export {Form};