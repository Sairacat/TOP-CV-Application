import mailIcon from "../assets/mail-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import { formatDate, formatIncome, formatName } from "../format-functions.js";

function TemplateB({ generalInfo, educationInfo, careerInfo, certInfo }) {
  return (
    <div className="templateB">
      <header className="resume-title">
        <h1>
          {formatName(generalInfo[0]?.firstName) ?? null}{" "}
          {formatName(generalInfo[0]?.lastName) ?? null}
        </h1>
        <span className="job-title">
          {generalInfo[0]?.currentTitle ?? null}
        </span>
        <section className="contact-area" aria-label="contact">
          <ul>
            <li className="contact-unit">
              <img src={phoneIcon} alt="" height={32} />
              <p>{generalInfo[0]?.phone ?? null}</p>
            </li>
            <li className="contact-unit">
              <img src={mailIcon} alt="" height={32} />
              <p>{generalInfo[0]?.email ?? null}</p>
            </li>
            <li className="contact-unit">
              <img src={locationIcon} alt="" height={32} />
              <p>{generalInfo[0]?.address ?? null}</p>
            </li>
          </ul>
        </section>
      </header>
      <main className="resume-body">
        <section className="profile-area" aria-labelledby="profile-heading">
          <h2 id="profile-heading">About Me</h2>
          <p>{generalInfo[0]?.aboutMe ?? null}</p>
        </section>

        <section className="education-area" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <ul>
            {educationInfo.map((section) => (
              <li className="education-unit" key={section.id}>
                <h3>
                  {section.school} |{" "}
                  <span>
                    {formatDate(section.from)}-{formatDate(section.to)}
                  </span>
                </h3>
                <p className="degree-major">
                  {section.degree} of {section.major} |{" "}
                  <span>{section.gpa}/4</span>
                </p>
                <p className="education-moreInfo">{section.moreInfo}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="career-area" aria-labelledby="career-heading">
          <h2 id="career-heading">Work Experience</h2>
          <ul>
            {careerInfo.map((section) => (
              <li className="career-unit" key={section.id}>
                <h3>
                  {section.company} |{" "}
                  <span>
                    {formatDate(section.careerStart)}-
                    {formatDate(section.careerEnd)}
                  </span>{" "}
                  | <span>{section.eType}</span>
                </h3>
                <p className="title-income">
                  {section.title} |{" "}
                  <span>
                    {section.currency}
                    {formatIncome(section.income)}/year
                  </span>
                </p>
                <p className="career-JB">{section.JB}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cert-area" aria-labelledby="cert-heading">
          <h2 id="cert-heading">Awards&Certification</h2>
          <ul>
            {certInfo.map((section) => (
              <li className="cert-unit" key={section.id}>
                <p>{section.certName}</p>
                <p className="ac-time">{formatDate(section.acquiredTime)}</p>
                <span className="dot"></span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export { TemplateB };
