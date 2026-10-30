function SavedGeneralCard({savedValue, id, handleEdit}) {
    return(
        <section id="general-info-card">
            <div className="card-header">
                <h2>General Information</h2>
                <button className="edit-btn" type="button" onClick={() => handleEdit(id)} title="edit button">Edit</button>
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

export {SavedGeneralCard};