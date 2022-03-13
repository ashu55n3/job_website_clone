import React, { FC, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import apiCall from "../../api/apiCall";
import apiEndpoints from "../../lib/apiEndpoints";
import imgUrl from "../../lib/imgUrl";
import routesConfig from "../../lib/routesConfig";
import ApplicantCard from "../ApplicantCard";
import EmptyList from "../EmptyList";
import "./styles.scss";
import { Props } from "./typing";

const ApplicantsModal: FC<Props> = (props) => {
  const [applicantData, setApplicantData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (props.applicantId)
      apiCall({
        endpoint: apiEndpoints.applicantData(props.applicantId),
        method: "get",
      })
        .then(async (res) => {
          const json = await res.json();
          if (json?.code === 200) {
            setApplicantData(json?.data || []);
          } else if (json?.code === 401) {
            localStorage.clear();
            navigate(routesConfig.login.path, { replace: true });
          }
        })
        .catch((err) => console.log(err));
    return () => {
      setApplicantData([]);
    };
  }, [props.applicantId, navigate]);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="applicant-modal-wrapper"
    >
      <Modal.Header closeButton className="applicant-modal-header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="applicant-modal-title"
        >
          Applicants for this job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="applicant-modal-body">
        <span>Total {applicantData.length} applications</span>
        <div className={`list-wrapper ${applicantData.length ? "" : "empty-list-styles"}`}>
          {applicantData.length ? (
            <div className="row gy-3">
              {applicantData.map((applicant: any) => (
                <ApplicantCard
                  name={applicant.name}
                  email={applicant.email}
                  skills={applicant.skills}
                  key={applicant.id}
                />
              ))}
            </div>
          ) : (
            <EmptyList
              icon={imgUrl["curriculum"]}
              description="No applications available!"
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ApplicantsModal;
