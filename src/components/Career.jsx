import { useState } from "react";
import "../styles/careerInfo.css";
import deleteBtn from "../assets/delete-btn.svg";

const validityStates = ["valueMissing", "rangeUnderflow"];

const errorMessageMap = {
  valueMissing: "/Required*",
  rangeUnderflow: "/Only positive numbers allowed",
};

function Career({ id, handleRemove, handleSave, savedValue, setterType }) {
  const [careerInfo, setCareerInfo] = useState(
    savedValue === null
      ? {
          company: { value: "", isValid: true, errorMsg: "" },
          title: { value: "", isValid: true, errorMsg: "" },
          careerStart: { value: "", isValid: true, errorMsg: "" },
          careerEnd: { value: "", isValid: true, errorMsg: "" },
          eType: { value: "Full-time", isValid: true, errorMsg: "" },
          currency: { value: "¥", isValid: true, errorMsg: "" },
          income: { value: "", isValid: true, errorMsg: "" },
          JB: { value: "", isValid: true, errorMsg: "" },
        }
      : { ...savedValue },
  );

  function handleCareerInfoChange(e) {
    const { id, value, validity } = e.target;
    const failedKeys = validityStates.filter((key) => validity[key]);
    const errorMsg =
      failedKeys.length > 0
        ? failedKeys
            .map((key) => errorMessageMap[key])
            .join("")
            .slice(1)
        : "";
    setCareerInfo({
      ...careerInfo,
      [id]: { value: value, isValid: validity.valid, errorMsg: errorMsg },
    });
  }

  function handleValidationAndSave() {
    let hasError = false;
    const validatedInfo = { ...careerInfo };

    Object.keys(validatedInfo).forEach((key) => {
      if (key === "eType" || key === "currency" || key === "JB") return;

      const field = validatedInfo[key];
      if (!field.isValid) {
        hasError = true;
        return;
      }

      if (field.value === "" && field.isValid) {
        validatedInfo[key] = {
          ...field,
          isValid: false,
          errorMsg: "Required*",
        };

        hasError = true;
      }
    });

    if (hasError) {
      setCareerInfo(validatedInfo);
    } else {
      handleSave(id, careerInfo, setterType);
    }
  }

  return (
    <li key={id}>
      <section className="career-info">
        <div className="input-unit">
          <label htmlFor="company">
            Company:{" "}
            {careerInfo.company.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {careerInfo.company.errorMsg}
              </span>
            )}
          </label>
          <input
            type="text"
            id="company"
            placeholder="Apple Inc"
            value={careerInfo.company.value}
            onChange={handleCareerInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="title">
            Title:{" "}
            {careerInfo.title.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {careerInfo.title.errorMsg}
              </span>
            )}
          </label>
          <input
            type="text"
            id="title"
            placeholder="Front-End Engineer"
            value={careerInfo.title.value}
            onChange={handleCareerInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="careerStart">
            From:{" "}
            {careerInfo.careerStart.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {careerInfo.careerStart.errorMsg}
              </span>
            )}
          </label>
          <input
            type="date"
            id="careerStart"
            value={careerInfo.careerStart.value}
            onChange={handleCareerInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="careerEnd">
            To:{" "}
            {careerInfo.careerEnd.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {careerInfo.careerEnd.errorMsg}
              </span>
            )}
          </label>
          <input
            type="date"
            id="careerEnd"
            value={careerInfo.careerEnd.value}
            min={careerInfo.careerStart.value}
            onChange={handleCareerInfoChange}
            required
          />
        </div>

        <div className="input-unit">
          <label htmlFor="eType">Employment Type:</label>
          <div className="select-container">
            <select
              id="eType"
              value={careerInfo.eType.value}
              onChange={handleCareerInfoChange}
            >
              <option value="Part-time">Part-time</option>
              <option value="Full-time">Full-time</option>
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
          <label htmlFor="income">
            Annual Salary:{" "}
            {careerInfo.income.isValid ? null : (
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  fontWeight: "initial",
                }}
              >
                {careerInfo.income.errorMsg}
              </span>
            )}
          </label>
          <div className="input-box">
            <select
              id="currency"
              value={careerInfo.currency.value}
              onChange={handleCareerInfoChange}
            >
              <option value="$">$USD</option>
              <option value="€">€EUR</option>
              <option value="¥">¥CNY</option>
            </select>
            <input
              type="number"
              id="income"
              value={careerInfo.income.value}
              min={0}
              onChange={handleCareerInfoChange}
              required
            />
          </div>
        </div>

        <div className="input-unit job-info">
          <label htmlFor="JB">Job Description:</label>
          <textarea
            id="JB"
            placeholder="What's your role in the team? What have you accomplished? What have you learned?... Help us learn more about you."
            value={careerInfo.JB.value}
            onChange={handleCareerInfoChange}
          ></textarea>
        </div>

        <button
          type="button"
          onClick={() => handleRemove(id, setterType)}
          title="remove field"
          className="remove-btn"
        >
          <img src={deleteBtn} alt="delete your career field" height="32" />
        </button>

        <button
          className="save-btn"
          type="button"
          title="save your info"
          onClick={handleValidationAndSave}
        >
          Save
        </button>
      </section>
    </li>
  );
}

export { Career };
