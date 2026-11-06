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

function Form({ handleBackward, handleForward, infos, onSave, onEdit, onAdd, onRemove, checkForm }) {

  const [showSubmitError, setShowSubmitError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let hasError = checkForm();
    if(hasError) {
      setShowSubmitError(true)
    }else {
      handleForward();
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
      <form action="" onSubmit={handleSubmit} noValidate>
        <h1>Fill Out Your CV/Resume!</h1>
        {infos.general.map((field) =>
          field.isSaved ? (
            <SavedGeneralCard
              key={field.id}
              id={field.id}
              handleEdit={onEdit}
              savedValue={field.savedValue}
              setterType="general"
            />
          ) : (
            <GeneralInfo
              key={field.id}
              id={field.id}
              handleSave={onSave}
              savedValue={field.savedValue}
              setterType="general"
            />
          ),
        )}

        <h2 className="fields-title">Education</h2>

        <ul>
          {infos.education.map((field) =>
            field.isSaved ? (
              <SavedEducationCard
                key={field.id}
                id={field.id}
                handleEdit={onEdit}
                savedValue={field.savedValue}
                setterType="education"
              />
            ) : (
              <EducationInfo
                key={field.id}
                id={field.id}
                handleSave={onSave}
                handleRemove={onRemove}
                savedValue={field.savedValue}
                setterType="education"
              />
            ),
          )}
        </ul>
        <button
          onClick={() => onAdd("education")}
          type="button"
          title="add another education field"
          className="add-btn"
          style={{ marginBottom: 30 }}
        >
          <img src={addBtn} alt="add another education filed" height="32" />
        </button>

        <h2 className="fields-title">Career</h2>
        <ul>
          {infos.career.map((field) =>
            field.isSaved ? (
              <SavedCareerCard
                key={field.id}
                id={field.id}
                handleEdit={onEdit}
                savedValue={field.savedValue}
                setterType="career"
              />
            ) : (
              <Career
                key={field.id}
                id={field.id}
                handleSave={onSave}
                handleRemove={onRemove}
                savedValue={field.savedValue}
                setterType="career"
              />
            ),
          )}
        </ul>
        <button
          onClick={() => onAdd("career")}
          type="button"
          title="add another career field"
          className="add-btn"
          style={{ marginBottom: 30 }}
        >
          <img src={addBtn} alt="add another career filed" height="32" />
        </button>

        <h2 className="fields-title">Certification</h2>
        <ul>
          {infos.cert.map((field) =>
            field.isSaved ? (
              <SavedCertificationCard
                key={field.id}
                id={field.id}
                handleEdit={onEdit}
                savedValue={field.savedValue}
                setterType="cert"
              />
            ) : (
              <Certification
                key={field.id}
                id={field.id}
                handleSave={onSave}
                handleRemove={onRemove}
                savedValue={field.savedValue}
                setterType="cert"
              />
            ),
          )}
        </ul>
        <button
          onClick={() => onAdd("cert")}
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
