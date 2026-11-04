import mailIcon from "../assets/mail-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";

function SavedGeneralCard({ savedValue, id, handleEdit, setterType }) {
  return (
    <section className="info-card">
      <div className="card-header">
        <h2>
          {formatName(savedValue.firstName.value)}{" "}
          {formatName(savedValue.lastName.value)}
        </h2>
        <button
          className="edit-btn"
          type="button"
          onClick={() => handleEdit(id, setterType)}
          title="edit button"
        >
          Edit
        </button>
      </div>
      <div className="card-body">
        <p className="info-unit">
          <img src={mailIcon} alt="mail-icon" height="32" />
          <span className="value">{savedValue.email.value}</span>
        </p>
        <p className="info-unit">
          <img src={phoneIcon} alt="phone-icon" height="32" />
          <span className="value">{savedValue.phone.value}</span>
        </p>
      </div>
    </section>
  );
}

function SavedEducationCard({ savedValue, id, handleEdit, setterType }) {
  return (
    <section className="info-card">
      <div className="card-header">
        <h2>
          {savedValue.degree.value} of {savedValue.major.value}
        </h2>
        <button
          className="edit-btn"
          type="button"
          onClick={() => handleEdit(id, setterType)}
          title="edit button"
        >
          Edit
        </button>
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

function SavedCareerCard({ savedValue, id, handleEdit, setterType }) {
  return (
    <section className="info-card">
      <div className="card-header">
        <h2>{savedValue.title.value}</h2>
        <button
          className="edit-btn"
          type="button"
          onClick={() => handleEdit(id, setterType)}
          title="edit button"
        >
          Edit
        </button>
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

function SavedCertificationCard({ savedValue, id, handleEdit, setterType }) {
  return (
    <section className="info-card">
      <div className="cert-header">
        <h2>{savedValue.certName}</h2>
        <span className="value">{formatDate(savedValue.acquiredTime)}</span>
        <button
          className="edit-btn"
          type="button"
          onClick={() => handleEdit(id, setterType)}
          title="edit button"
        >
          Edit
        </button>
      </div>
    </section>
  );
}

function formatName(name) {
  const trimmedName = name.trim();
  return (
    trimmedName.slice(0, 1).toUpperCase() + trimmedName.slice(1).toLowerCase()
  );
}

function formatDate(date) {
  if (!date) return;
  const dateArray = date.split("-");
  const formattedDate = `${dateArray[0]}.${dateArray[1]}`;
  return formattedDate;
}

function formatIncome(value) {
  if (value === "" || value === null || isNaN(value)) {
    return "0";
  }

  return Number(value).toLocaleString("en-US");
}

export {
  SavedGeneralCard,
  SavedEducationCard,
  SavedCareerCard,
  SavedCertificationCard,
};
