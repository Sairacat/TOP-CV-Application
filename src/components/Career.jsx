import { useState } from "react";
import '../styles/careerInfo.css';
import deleteBtn from '../assets/delete-btn.svg';

function Career({id, handleRemove, handleSave, savedValue, setterType}) {
    const [careerInfo, setCareerInfo] = useState(savedValue === null ?
        {
            company: '',
            title: '',
            careerStart: '',
            careerEnd: '',
            eType: 'Full-time',
            currency: '¥',
            income: '',
            JB: '',
        } : {...savedValue}
    )

    function handleCareerInfoChange(e) {
        const {id, value} = e.target;
        setCareerInfo({...careerInfo, [id]: value})
    }


    return(
        <li key={id}>
            <section className="career-info">
                <div className="input-unit">
                    <label htmlFor="company">Company:</label>
                    <input type="text"
                            id="company"
                            placeholder="Apple Inc"
                            value={careerInfo.company}
                            onChange={handleCareerInfoChange} />
                </div>

                <div className="input-unit">
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                            id="title"
                            placeholder="Front-End Engineer"
                            value={careerInfo.title}
                            onChange={handleCareerInfoChange} />
                </div>

                <div className="input-unit">
                    <label htmlFor="careerStart">From:</label>
                    <input type="date"
                            id="careerStart"
                            value={careerInfo.careerStart}
                            onChange={handleCareerInfoChange} />
                </div>

                <div className="input-unit">
                    <label htmlFor="careerEnd">To:</label>
                    <input type="date"
                            id="careerEnd"
                            value={careerInfo.careerEnd}
                            min={careerInfo.careerStart}
                            onChange={handleCareerInfoChange} />
                </div>

                <div className="input-unit">
                    <label htmlFor="eType">Employment Type:</label>
                    <div className="select-container">
                        <select id="eType" value={careerInfo.eType} onChange={handleCareerInfoChange}>
                            <option value="Part-time">Part-time</option>
                            <option value="Full-time">Full-time</option>
                        </select>
                        <div className="select-arrow">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="input-unit">
                    <label htmlFor="income">Annual Salary:</label>
                    <div className="input-box">
                        <select id="currency" value={careerInfo.currency} onChange={handleCareerInfoChange}>
                            <option value="$">$USD</option>
                            <option value="€">€EUR</option>
                            <option value="¥">¥CNY</option>
                        </select>
                        <input type="number"
                                id="income"
                                value={careerInfo.income}
                                min={0}
                                step={1000}
                                onChange={handleCareerInfoChange} />
                    </div>
                </div>

                <div className="input-unit job-info">
                    <label htmlFor="JB">Job Description:</label>
                    <textarea id="JB"
                    placeholder="What's your role in the team? What have you accomplished? What have you learned?... Help us learn more about you."
                    value={careerInfo.JB}
                    onChange={handleCareerInfoChange}
                    ></textarea>
                </div>

                <button type="button" onClick={() => handleRemove(id, setterType)} title="remove field" className="remove-btn">
                    <img src={deleteBtn} alt="delete your career field" height="32"/>
                </button>

                <button className="save-btn" type="button" title="save your info" onClick={() => handleSave(id, careerInfo, setterType)}>Save</button>
            </section>
        </li>
    )
}


export {Career};