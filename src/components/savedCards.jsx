import mailIcon from "../assets/mail-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import "../styles/savedCards.css";
import { formatName, formatDate, formatIncome } from "../format-functions.js";

function SavedGeneralCard({ savedValue, id, handleEdit, setterType, handleForward }) {
  return (
    <section className="info-card">
      <div className="card-header">
        <div className="name-title">
          <h2>
            {formatName(savedValue.firstName.value)}{" "}
            {formatName(savedValue.lastName.value)}
          </h2>
          <span className="value">{savedValue.currentTitle.value}</span>
        </div>
        <div className="button-set">
          <button
            className="preview-btn"
            type="button"
            onClick={handleForward}
            title="preview result"
          >
            Preview
          </button>

          <button
            className="edit-btn"
            type="button"
            onClick={() => handleEdit(id, setterType)}
            title="edit button"
          >
            Edit
          </button>          
        </div>
      </div>
      <div className="card-body-general">
        <p className="info-unit">
          <img src={mailIcon} alt="mail-icon" height="32" />
          <span className="value">{savedValue.email.value}</span>
        </p>
        <p className="info-unit">
          <img src={phoneIcon} alt="phone-icon" height="32" />
          <span className="value">{savedValue.phone.value}</span>
        </p>
        <p className="info-unit">
          <img src={locationIcon} alt="location-icon" height="32" />
          <span className="value">{savedValue.address.value}</span>
        </p>
        <p className="more-info-unit">{savedValue.aboutMe.value}</p>
      </div>
    </section>
  );
}

function SavedEducationCard({ savedValue, id, handleEdit, setterType, handleForward }) {
  return (
    <section className="info-card">
      <div className="card-header">
        <h2>
          {savedValue.degree.value} of {savedValue.major.value}
        </h2>
        <div className="button-set">
          <button
            className="preview-btn"
            type="button"
            onClick={handleForward}
            title="preview result"
          >
            Preview
          </button>
          
          <button
            className="edit-btn"
            type="button"
            onClick={() => handleEdit(id, setterType)}
            title="edit button"
          >
            Edit
          </button>          
        </div>
      </div>
      <div className="card-body-edu">
        <p className="info-unit">
          <span className="value">{savedValue.school.value}</span>
        </p>
        <p className="info-unit">
          <span className="value">
            {formatDate(savedValue.from.value)} - {formatDate(savedValue.to.value)}
          </span>
        </p>
        <p className="info-unit">
          <span className="value">{savedValue.gpa.value}/4.0</span>
        </p>
        <p className="more-info-unit">{savedValue.moreInfo.value}</p>
      </div>
    </section>
  );
}

function SavedCareerCard({ savedValue, id, handleEdit, setterType, handleForward }) {
  return (
    <section className="info-card">
      <div className="card-header">
        <h2>{savedValue.title.value}</h2>
        <div className="button-set">
          <button
            className="preview-btn"
            type="button"
            onClick={handleForward}
            title="preview result"
          >
            Preview
          </button>
          
          <button
            className="edit-btn"
            type="button"
            onClick={() => handleEdit(id, setterType)}
            title="edit button"
          >
            Edit
          </button>          
        </div>
      </div>
      <div className="card-body-career">
        <p className="info-unit">
          <span className="value">{savedValue.company.value}</span>
        </p>
        <p className="info-unit">
          <span className="value">
            {formatDate(savedValue.careerStart.value)} -{" "}
            {formatDate(savedValue.careerEnd.value)}
          </span>
        </p>
        <p className="info-unit">
          <span className="value">{savedValue.eType.value}</span>
        </p>
        <p className="info-unit">
          <span className="value">
            {savedValue.currency.value}
            {formatIncome(savedValue.income.value)}/year
          </span>
        </p>
        <p className="JB-unit">{savedValue.JB.value}</p>
      </div>
    </section>
  );
}

function SavedCertificationCard({ savedValue, id, handleEdit, setterType, handleForward }) {
  return (
    <section className="info-card">
      <div className="cert-header">
        <div className="cert-title">
          <h2>{savedValue.certName.value}</h2>
          <span className="value">{formatDate(savedValue.acquiredTime.value)}</span>
        </div>
        <div className="button-set">
          <button
            className="preview-btn"
            type="button"
            onClick={handleForward}
            title="preview result"
          >
            Preview
          </button>
          
          <button
            className="edit-btn"
            type="button"
            onClick={() => handleEdit(id, setterType)}
            title="edit button"
          >
            Edit
          </button>          
        </div>
      </div>
    </section>
  );
}

export {
  SavedGeneralCard,
  SavedEducationCard,
  SavedCareerCard,
  SavedCertificationCard,
};
