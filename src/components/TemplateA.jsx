import mailIcon from "../assets/mail-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import { formatDate, formatIncome, formatName } from "../format-functions.js";

function TemplateA({ generalInfo, educationInfo, careerInfo, certInfo }) {
  console.log(careerInfo);
  return (
    <div className="templateA">
      <header className="resume-title">
        <h1>
          {formatName(generalInfo[0]?.firstName) ?? null}{" "}
          {formatName(generalInfo[0]?.lastName) ?? null}
        </h1>
        <span>{generalInfo[0]?.currentTitle ?? null}</span>
      </header>
      <div className="resume-body">
        <aside className="sidebar">
          <section className="contact-area" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact</h2>
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

          <section
            className="education-area"
            aria-labelledby="education-heading"
          >
            <h2 id="education-heading">Education</h2>
            <ul>
              {educationInfo.map((section) => (
                <li className="education-unit" key={section.id}>
                  <h3>
                    {section.school}
                    <span>{section.gpa}/4</span>
                  </h3>
                  <p>
                    {formatDate(section.from)}-{formatDate(section.to)}
                  </p>
                  <p>
                    {section.degree} of {section.major}
                  </p>
                  <p className="education-moreInfo">{section.moreInfo}</p>
                </li>
              ))}
            </ul>
          </section>
        </aside>
        <main>
          <section className="profile-area" aria-labelledby="profile-heading">
            <h2 className="profile-heading">Profile</h2>
            <p>{generalInfo[0]?.aboutMe ?? null}</p>
          </section>

          <section className="career-area" aria-labelledby="career-heading">
            <h2 id="career-heading">Work Experience</h2>
            <ul>
              {careerInfo.map((section) => (
                <li className="career-unit" key={section.id}>
                  <h3>
                    {section.company}
                    <span>{section.eType}</span>
                    <span>
                      {section.currency}
                      {formatIncome(section.income)}/year
                    </span>
                  </h3>
                  <p>{section.title}</p>
                  <p>
                    {formatDate(section.careerStart)}-
                    {formatDate(section.careerEnd)}
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
    </div>
  );
}

export { TemplateA };
