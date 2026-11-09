import { useState } from "react";
import "../styles/generalInfo.css";

const errorMessageMap = {
  valueMissing: "/Required*",
  typeMismatch: "/Invalid Email Format*",
  tooShort: {
    firstName: "/2 characters at least",
    lastName: "/2 characters at least",
    phone: "/8 numbers at least",
  },
};

const validityStates = ["valueMissing", "tooShort", "typeMismatch"];

function GeneralInfo({ id, handleSave, savedValue, setterType }) {
  const [generalInfo, setGeneralInfo] = useState(
    savedValue === null
      ? {
          firstName: { value: "", isValid: true, errorMsg: "" },
          lastName: { value: "", isValid: true, errorMsg: "" },
          email: { value: "", isValid: true, errorMsg: "" },
          phone: { value: "", isValid: true, errorMsg: "" },
          currentTitle: {value:"", isValid: true, errorMsg:""},
          address: {value:"", isValid: true, errorMsg: ""},
          aboutMe: {value:"", isValid: true, errorMsg:""},
        }
      : { ...savedValue },
  );

  function handleGeneralInfoChange(e) {
    const { name, value, validity } = e.target;
    const failedKeys = validityStates.filter((key) => validity[key]);
    const errorMsg =
      failedKeys.length > 0
        ? failedKeys
            .map((key) => {
              if (key === "tooShort") {
                return errorMessageMap[key][name];
              } else {
                return errorMessageMap[key];
              }
            })
            .join("")
            .slice(1)
        : "";
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: { value: value, isValid: validity.valid, errorMsg: errorMsg },
    }));
  }

  function handleValidationAndSave() {
    let hasError = false;
    const validatedInfo = { ...generalInfo };

    Object.keys(validatedInfo).forEach((key) => {
      const field = validatedInfo[key];
      if (!field.isValid) {
        console.log(key)
        hasError = true;
        return;
      }

      if (field.value.trim() === "" && field.isValid) {
        console.log(key)
        validatedInfo[key] = {
          ...field,
          isValid: false,
          errorMsg: "Required*",
        };

        hasError = true;
      }
    });

    if (hasError) {
      console.log('validating...')
      setGeneralInfo(validatedInfo);
    } else {
      console.log('proceeding save')
      handleSave(id, generalInfo, setterType);
    }
  }

  return (
    <section id="general-info">
      <div className="input-unit">
        <label htmlFor={`firstName-${id}`}>
          First Name{" "}
          {generalInfo.firstName.isValid ? null : (
            <span
              style={{
                color: "red",
                paddingLeft: "10px",
                fontWeight: "initial",
              }}
            >
              {generalInfo.firstName.errorMsg}
            </span>
          )}
        </label>
        <input
          type="text"
          id={`firstName-${id}`}
          name="firstName"
          placeholder="Jack"
          value={generalInfo.firstName.value}
          onChange={handleGeneralInfoChange}
          minLength={2}
          required
        />
      </div>

      <div className="input-unit">
        <label htmlFor={`email-${id}`}>
          E-mail{" "}
          {generalInfo.email.isValid ? null : (
            <span
              style={{
                color: "red",
                marginLeft: "10px",
                fontWeight: "initial",
              }}
            >
              {generalInfo.email.errorMsg}
            </span>
          )}
        </label>
        <input
          type="email"
          id={`email-${id}`}
          name="email"
          placeholder="fakeEmail@mail.com"
          value={generalInfo.email.value}
          onChange={handleGeneralInfoChange}
          required
        />
      </div>

      <div className="input-unit">
        <label htmlFor={`lastName-${id}`}>
          Last Name{" "}
          {generalInfo.lastName.isValid ? null : (
            <span
              style={{
                color: "red",
                marginLeft: "10px",
                fontWeight: "initial",
              }}
            >
              {generalInfo.lastName.errorMsg}
            </span>
          )}
        </label>
        <input
          type="text"
          id={`lastName-${id}`}
          name="lastName"
          placeholder="Muller"
          value={generalInfo.lastName.value}
          onChange={handleGeneralInfoChange}
          minLength={2}
          required
        />
      </div>

      <div className="input-unit">
        <label htmlFor={`phone-${id}`}>
          Phone{" "}
          {generalInfo.phone.isValid ? null : (
            <span
              style={{
                color: "red",
                marginLeft: "10px",
                fontWeight: "initial",
              }}
            >
              {generalInfo.phone.errorMsg}
            </span>
          )}
        </label>
        <input
          type="tel"
          id={`phone-${id}`}
          name="phone"
          placeholder="051-8233"
          value={generalInfo.phone.value}
          onChange={handleGeneralInfoChange}
          minLength={8}
          required
        />
      </div>

      <div className="input-unit">
        <label htmlFor={`currentTitle-${id}`}>
          Current Title{" "}
          {generalInfo.currentTitle.isValid ? null : (
            <span
              style={{
                color: "red",
                marginLeft: "10px",
                fontWeight: "initial",
              }}
            >
              {generalInfo.currentTitle.errorMsg}
            </span>
          )}
        </label>
        <input 
          type="text"
          id={`currentTitle-${id}`}
          name="currentTitle"
          placeholder="cat owner"
          value={generalInfo.currentTitle.value}
          onChange={handleGeneralInfoChange}
          required />
      </div>

      <div className="input-unit">
        <label htmlFor={`address-${id}`}>
          Address{" "}
          {generalInfo.address.isValid ? null : (
            <span
              style={{
                color: "red",
                marginLeft: "10px",
                fontWeight: "initial",
              }}
            >
              {generalInfo.address.errorMsg}
            </span>
          )}
        </label>
        <input 
          type="text"
          id={`address-${id}`}
          name="address"
          placeholder="213 random St. Any City"
          value={generalInfo.address.value}
          onChange={handleGeneralInfoChange}
          required />
      </div>

      <div className="input-unit text-area">
        <label htmlFor={`aboutMe-${id}`}>
          About Me{" "}
          {generalInfo.aboutMe.isValid ? null : (
            <span
              style={{
                color: "red",
                marginLeft: "10px",
                fontWeight: "initial",
              }}
            >
              {generalInfo.aboutMe.errorMsg}
            </span>
          )}
        </label>
        <textarea
          id={`aboutMe-${id}`}
          name="aboutMe"
          value={generalInfo.aboutMe.value}
          onChange={handleGeneralInfoChange}
          placeholder="Your hobbies, your experties, how do you consider yourself, what are your dreams..."
          required
        ></textarea>
      </div>

      <button
        className="save-btn"
        type="button"
        onClick={handleValidationAndSave}
      >
        Save
      </button>
    </section>
  );
}

export { GeneralInfo };
