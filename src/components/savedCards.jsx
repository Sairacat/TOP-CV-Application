function SavedGeneralCard({savedValue, id, handleEdit, setterType}) {
    return(
        <section id="info-card">
            <div className="card-header">
                <h2>General Information</h2>
                <button className="edit-btn" type="button" onClick={() => handleEdit(id, setterType)} title="edit button">Edit</button>
            </div>
            <div className="card-body">
                <p className="info-unit">
                    <span className="label">First Name: </span>
                    <span className="value">{savedValue.firstName}</span>
                </p>
                <p className="info-unit">
                    <span className="label">Email: </span>
                    <span className="value">{savedValue.email}</span>
                </p>
                <p className="info-unit">
                    <span className="label">Last Name: </span>
                    <span className="value">{savedValue.lastName}</span>
                </p>
                <p className="info-unit">
                    <span className="label">Phone: </span>
                    <span className="value">{savedValue.phone}</span>
                </p>
            </div>
        </section>
    )
}

function SavedEducationCard({savedValue, id, handleEdit, setterType}) {
    return(
        <section id="info-card">
            <div className="card-header">
                <h2>{savedValue.degree} of {savedValue.major}</h2>
                <button className="edit-btn" type="button" onClick={() => handleEdit(id, setterType)} title="edit button">Edit</button>
            </div>
            <div className="card-body-edu">
                <p className="info-unit">
                    <span className="label">School: </span>
                    <span className="value">{savedValue.school}</span>
                </p>
                <p className="info-unit">
                    <span className="label">Dates: </span>
                    <span className="value">{formatDate(savedValue.from)} - {formatDate(savedValue.to)}</span>
                </p>
                <p className="info-unit">
                    <span className="label">GPA: </span>
                    <span className="value">{savedValue.gpa}/4.0</span>
                </p>
                <p className="more-info-unit">
                    {savedValue.moreInfo}
                </p>
            </div>
        </section>
    )
}

function formatDate(date) {
    if(!date) return;
    const dateArray = date.split('-');
    const formattedDate = `${dateArray[0]}.${dateArray[1]}`;
    return formattedDate;
}

export {SavedGeneralCard, SavedEducationCard};