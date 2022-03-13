import React, { FC } from "react";
import { Props } from "./typing";
import "./styles.scss";

const ApplicantCard: FC<Props> = ({ name, skills, email }) => {
  return (
    <div className="col-6">
      <div className="shadow-sm bg-white rounded applicant-card d-flex flex-column">
        <div className="d-flex flex-row mb-3">
          <div className="applicant-card-avatar">{name[0].toUpperCase()}</div>
          <div className="d-flex flex-column applicant-contact-details">
            <span>{name}</span>
            <span>{email}</span>
          </div>
        </div>
        <div>
          <label htmlFor="#applicant-skills">Skills</label>
          <p id="applicant-skills">{skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
