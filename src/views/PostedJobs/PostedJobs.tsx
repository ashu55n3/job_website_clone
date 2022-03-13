import React, { useEffect, useMemo, useState } from "react";
import { PageItem, Pagination } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import apiCall from "../../api/apiCall";
import ApplicantsModal from "../../components/ApplicantsModal";
import EmptyList from "../../components/EmptyList";
import PostedJobCard from "../../components/PostedJobCard";
import useCheckAuthentication from "../../hooks/useCheckAuthentication";
import apiEndpoints from "../../lib/apiEndpoints";
import imgUrl from "../../lib/imgUrl";
import { getAuthToken, getUsername } from "../../lib/localStorage";
import routesConfig from "../../lib/routesConfig";
import "./styles.scss";

function PostedJobs() {
  const [jobData, setJobData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [applicantsId, setApplicantsId] = useState("");

  const navigate = useNavigate();

  useCheckAuthentication(true);

  useEffect(() => {
    if (getAuthToken() && getUsername()) {
      apiCall({
        endpoint: apiEndpoints.postedJobList(page.toString()),
        method: "get",
      })
        .then(async (response) => {
          const responseJSON = await response.json();
          if (responseJSON.code === 200) {
            if (responseJSON?.data?.data && responseJSON?.data?.metadata) {
              setJobData(responseJSON?.data?.data);
              setTotalCount(responseJSON?.data?.metadata?.count ?? 0);
              setLimit(responseJSON?.data?.metadata?.limit ?? 20);
            } else {
              setJobData([]);
              setTotalCount(0);
            }
          } else if (responseJSON.code === 401) {
            localStorage.clear();
            navigate(routesConfig.login.path, { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [page, navigate]);

  const totalPageArray = useMemo(() => {
    const arr = [];
    if (limit && totalCount) {
      for (let idx = 1; idx <= Math.ceil(totalCount / limit); idx++) {
        arr.push(idx);
      }
    }
    return arr;
  }, [limit, totalCount]);

  const handleViewApplicantClick = (e: any) => {
    if (e.target?.id && e.target?.id.includes("view_applicants_")) {
      const id = e.target?.id.split("view_applicants_")[1];
      setApplicantsId(id);
    }
  };

  return (
    <div className="posted-jobs-container">
      <ApplicantsModal
        show={Boolean(applicantsId)}
        onHide={() => setApplicantsId("")}
        applicantId={applicantsId}
      />
      <Link to="/">
        <img src={imgUrl["homeIcon"].src} alt={imgUrl["homeIcon"].alt} />
        Home
      </Link>
      <h1>Jobs posted by you</h1>
      <div
        className={`${
          !(Array.isArray(jobData) && jobData.length)
            ? "job-list-container"
            : "row"
        }`}
        onClick={handleViewApplicantClick}
      >
        {Array.isArray(jobData) && jobData.length ? (
          <>
            {jobData.map((job: any) => (
              <PostedJobCard
                jobTitle={job.title}
                jobDescription={job.description}
                location={job.location}
                id={job.id}
                key={job.id}
              />
            ))}
            {totalPageArray.length && (
              <Pagination>
                {totalPageArray.map((pageNo) => (
                  <PageItem
                    active={pageNo === page}
                    onClick={() => setPage(pageNo)}
                    key={pageNo}
                  >
                    {pageNo}
                  </PageItem>
                ))}
              </Pagination>
            )}
          </>
        ) : (
          <EmptyList
            icon={imgUrl["emptyList"]}
            description="Your posted jobs will show here!"
          />
        )}
      </div>
    </div>
  );
}

export default PostedJobs;
