import { useState } from "react";
import "../styles/educationInfo.css";
import deleteBtn from "../assets/delete-btn.svg";

const validityStates = [
  "valueMissing",
  "stepMismatch",
  "rangeOverflow",
  "rangeUnderflow",
];
const errorMessageMap = {
  valueMissing: "/Required*",
  stepMismatch: "/Decimal place: 1",
  rangeOverflow: "/Maximum value: 4",
  rangeUnderflow: "/Minimum value: 0",
};

function EducationInfo({
  id,
  handleRemove,
  handleSave,
  savedValue,
  setterType,
}) {
  const [educationInfo, setEducationInfo] = useState(
    savedValue === null
      ? {
          school: { value: "", isValid: true, errorMsg: "" },
          major: { value: "", isValid: true, errorMsg: "" },
          from: { value: "", isValid: true, errorMsg: "" },
          to: { value: "", isValid: true, errorMsg: "" },
          degree: { value: "Master", isValid: true, errorMsg: "" },
          gpa: { value: 3.5, isValid: true, errorMsg: "" },
          moreInfo: { value: "", isValid: true, errorMsg: "" },
        }
      : { ...savedValue },
  );

  function handleEducationInfoChange(e) {
    const { id, value, validity } = e.target;
    const failedKeys = validityStates.filter((key) => validity[key]);
    const errorMsg =
      failedKeys.length > 0
        ? failedKeys
            .map((key) => errorMessageMap[key])
            .join("")
            .slice(1)
        : "";
    setEducationInfo((prev) => ({
      ...prev,
      [id]: { value: value, isValid: validity.valid, errorMsg: errorMsg },
    }));
  }

  function handleValiadationAndSave() {
    let hasError = false;
    const validatedInfo = { ...educationInfo };

    Object.keys(validatedInfo).forEach((key) => {
      if (key === "moreInfo" || key === "degree") return;
      const field = validatedInfo[key];

      if (!field.isValid) {
        hasError = true;
        return;
      }

      if (String(field.value).trim() === "" && field.isValid) {
        validatedInfo[key] = {
          ...field,
          isValid: false,
          errorMsg: "Required*",
        };

        hasError = true;
      }
    });

    if (hasError) {
      setEducationInfo(validatedInfo);
    } else {
      handleSave(id, educationInfo, setterType);
    }
  }

  return (
    <li key={id}>
      <section className="education-info">
        <div className="input-unit">
          <label htmlFor="school">
            Graduated School{" "}
            {educationInfo.school.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {educationInfo.school.errorMsg}
              </span>
            )}
          </label>
          <input
            type="text"
            id="school"
            placeholder="Brown University"
            value={educationInfo.school.value}
            onChange={handleEducationInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="major">
            Major{" "}
            {educationInfo.major.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {educationInfo.major.errorMsg}
              </span>
            )}
          </label>
          <input
            type="text"
            id="major"
            placeholder="Computer Science"
            value={educationInfo.major.value}
            onChange={handleEducationInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="from">
            From{" "}
            {educationInfo.from.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {educationInfo.from.errorMsg}
              </span>
            )}
          </label>
          <input
            type="date"
            id="from"
            value={educationInfo.from.value}
            onChange={handleEducationInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="to">
            To{" "}
            {educationInfo.to.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {educationInfo.to.errorMsg}
              </span>
            )}
          </label>
          <input
            type="date"
            id="to"
            value={educationInfo.to.value}
            min={educationInfo.from.value}
            onChange={handleEducationInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="degree">Degree</label>
          <div className="select-container">
            <select
              id="degree"
              className="degree-select"
              value={educationInfo.degree.value}
              onChange={handleEducationInfoChange}
            >
              <option value="High School">High School</option>
              <option value="Associate">Associate</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Doctorate">Doctorate</option>
            </select>
            <div className="select-arrow">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="input-unit">
          <label htmlFor="gpa">
            GPA{" "}
            {educationInfo.gpa.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {educationInfo.gpa.errorMsg}
              </span>
            )}
          </label>
          <input
            type="number"
            id="gpa"
            value={educationInfo.gpa.value}
            min={0}
            max={4}
            step={0.1}
            onChange={handleEducationInfoChange}
            required
          />
        </div>

        <div className="input-unit text-area">
          <label htmlFor="moreInfo">More information</label>
          <textarea
            id="moreInfo"
            value={educationInfo.moreInfo.value}
            onChange={handleEducationInfoChange}
            placeholder="Your school life, what have your learned, your achievement etc... Help us know more about your education experience."
          ></textarea>
        </div>

        <button
          type="button"
          onClick={() => handleRemove(id, setterType)}
          title="remove field"
          className="remove-btn"
        >
          <img src={deleteBtn} alt="delete your education field" height="32" />
        </button>

        <button
          className="save-btn"
          type="button"
          title="save your info"
          onClick={handleValiadationAndSave}
        >
          Save
        </button>
      </section>
    </li>
  );
}

export { EducationInfo };
