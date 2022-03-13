import React, { FC } from "react";
import { Props } from "./typing";
import imgUrl from "../../lib/imgUrl";
import "./styles.scss";

const PostedJobCard: FC<Props> = ({ location, jobTitle, jobDescription, id }) => {
  return (
    <div className="col-3">
      <div className="shadow-sm p-3 mb-5 bg-white rounded job-post-card ">
        <h4>{jobTitle}</h4>
        <p>
          {jobDescription}
        </p>
        <div className="job-card-footer">
          <div title={location}>
            <img
              src={imgUrl["locationIcon"].src}
              alt={imgUrl["locationIcon"].alt}
            />
            {location}
          </div>
          <button
            className="btn btn-primary btn-sm"
            id={`view_applicants_${id}`}
          >
            View Applicants
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostedJobCard;
