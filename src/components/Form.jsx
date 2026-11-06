import { useState } from "react";
import "../styles/form.css";
import arrowLeft from "../assets/arrow-left.svg";
import arrowUp from "../assets/arrow-up.svg";
import addBtn from "../assets/add-btn.svg";
import closeBtn from "../assets/close-Btn.svg";
import { GeneralInfo } from "./GeneralInfo.jsx";
import { EducationInfo } from "./EducationInfo.jsx";
import { Career } from "./Career.jsx";
import { Certification } from "./Certification.jsx";
import {
  SavedGeneralCard,
  SavedEducationCard,
  SavedCareerCard,
  SavedCertificationCard,
} from "./savedCards.jsx";

function Form({ handleBackward, handleSubmitInfo }) {
  const [generalFields, setGeneralFields] = useState([
    { id: crypto.randomUUID(), isSaved: false, savedValue: null },
  ]);

  const [educationFields, setEducationFields] = useState([
    { id: crypto.randomUUID(), isSaved: false, savedValue: null },
  ]);

  const [careerFields, setCareerFields] = useState([
    { id: crypto.randomUUID(), isSaved: false, savedValue: null },
  ]);

  const [certFields, setCertFields] = useState([
    { id: crypto.randomUUID(), isSaved: false, savedValue: null },
  ]);

  const [showSubmitError, setShowSubmitError] = useState(false);

  const settersMap = {
    general: setGeneralFields,
    education: setEducationFields,
    career: setCareerFields,
    cert: setCertFields,
    //using a settersMap can save us from writing a lot more similar callbacks such as saveEducationFields or editCareerFields.
  };

  function saveFields(id, info, type) {
    const stateSetter = settersMap[type];
    stateSetter((prev) =>
      prev.map((field) => {
        if (field.id === id) {
          return { ...field, isSaved: true, savedValue: { ...info } };
        } else {
          return field; // must return it, otherwise it will return undefined, which will result a bug during rendering, since there is nothing to render.
        }
      }),
    );
  }

  function editFields(id, type) {
    const stateSetter = settersMap[type];
    stateSetter((prev) =>
      prev.map((field) => {
        if (field.id === id) {
          return { ...field, isSaved: false };
        } else {
          return field;
        }
      }),
    );
  }

  function addField(e, type) {
    e.preventDefault();
    const stateSetter = settersMap[type];
    stateSetter((prev) => [
      ...prev,
      { id: crypto.randomUUID(), isSaved: false, savedValue: null },
    ]);
  }

  function removeField(id, type) {
    const stateSetter = settersMap[type];
    stateSetter((prev) => prev.filter((field) => field.id !== id));
  }

  function checkInfoAndSubmit(e) {
    e.preventDefault()

    let shouldSubmit = true;

    const submitInfo = {
      generalInfo: [...generalFields],
      educationInfo: [...educationFields],
      careerInfo: [...careerFields],
      certInfo: [...certFields],
    };

    const keys = Object.keys(submitInfo);

    for (const key of keys) {
      const info = submitInfo[key];
      if (info.length === 0) {
        submitInfo[key] = null;
        continue;
      }

      const hasUnsavedField = info.some((field) => !field.isSaved);
      if (hasUnsavedField) {
        shouldSubmit = false;
        break;
      }
    }

    if (shouldSubmit) {
      handleSubmitInfo(submitInfo);
    } else {
      setShowSubmitError(true);
    }
  }

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="form-container">
      <form action="" onSubmit={checkInfoAndSubmit} noValidate>
        <h1>Fill Out Your CV/Resume!</h1>
        {generalFields.map((field) =>
          field.isSaved ? (
            <SavedGeneralCard
              key={field.id}
              id={field.id}
              handleEdit={editFields}
              savedValue={field.savedValue}
              setterType="general"
            />
          ) : (
            <GeneralInfo
              key={field.id}
              id={field.id}
              handleSave={saveFields}
              savedValue={field.savedValue}
              setterType="general"
            />
          ),
        )}

        <h2 className="fields-title">Education</h2>

        <ul>
          {educationFields.map((field) =>
            field.isSaved ? (
              <SavedEducationCard
                key={field.id}
                id={field.id}
                handleEdit={editFields}
                savedValue={field.savedValue}
                setterType="education"
              />
            ) : (
              <EducationInfo
                key={field.id}
                id={field.id}
                handleSave={saveFields}
                handleRemove={removeField}
                savedValue={field.savedValue}
                setterType="education"
              />
            ),
          )}
        </ul>
        <button
          onClick={(e) => addField(e, "education")}
          type="button"
          title="add another education field"
          className="add-btn"
          style={{ marginBottom: 30 }}
        >
          <img src={addBtn} alt="add another education filed" height="32" />
        </button>

        <h2 className="fields-title">Career</h2>
        <ul>
          {careerFields.map((field) =>
            field.isSaved ? (
              <SavedCareerCard
                key={field.id}
                id={field.id}
                handleEdit={editFields}
                savedValue={field.savedValue}
                setterType="career"
              />
            ) : (
              <Career
                key={field.id}
                id={field.id}
                handleSave={saveFields}
                handleRemove={removeField}
                savedValue={field.savedValue}
                setterType="career"
              />
            ),
          )}
        </ul>
        <button
          onClick={(e) => addField(e, "career")}
          type="button"
          title="add another career field"
          className="add-btn"
          style={{ marginBottom: 30 }}
        >
          <img src={addBtn} alt="add another career filed" height="32" />
        </button>

        <h2 className="fields-title">Certification</h2>
        <ul>
          {certFields.map((field) =>
            field.isSaved ? (
              <SavedCertificationCard
                key={field.id}
                id={field.id}
                handleEdit={editFields}
                savedValue={field.savedValue}
                setterType="cert"
              />
            ) : (
              <Certification
                key={field.id}
                id={field.id}
                handleSave={saveFields}
                handleRemove={removeField}
                savedValue={field.savedValue}
                setterType="cert"
              />
            ),
          )}
        </ul>
        <button
          onClick={(e) => addField(e, "cert")}
          type="button"
          title="add another certification field"
          className="add-btn"
          style={{ marginBottom: 30 }}
        >
          <img src={addBtn} alt="add another certification filed" height="32" />
        </button>

        <div
          className={
            showSubmitError ? "submit-area submit-error" : "submit-area"
          }
        >
          {showSubmitError ? (
            <p>
              Unsaved sections detected! Please save all your sections before submit.{" "}
              <button
                onClick={() => setShowSubmitError(false)}
                className="close-btn"
              >
                <img src={closeBtn} alt="close error information" height={30} />
              </button>{" "}
            </p>
          ) : (
            <button
              type="submit"
              title="submit your form"
              className="submit-btn"
            >
              Submit
            </button>
          )}
        </div>

        <button
          type="button"
          title="back to top"
          className="backToTopBtn"
          onClick={backToTop}
        >
          <img src={arrowUp} alt="back to top" height="80" />
        </button>
      </form>
      <button
        onClick={handleBackward}
        type="button"
        title="to previous page"
        className="fixed-btn"
      >
        <img src={arrowLeft} alt="to previous page" height="80" />
      </button>
    </div>
  );
}

export { Form };
