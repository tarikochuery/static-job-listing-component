import React from "react";
import './style.css'
import jobData from '../../db/data.json'
import JobCard from "../JobCard/JobCard";

const JobsList = () => {
  const jobsList = jobData
  return (
    <div className="JobsList">
      {jobsList.map((job, idx) => (
        <JobCard key={idx} jobData={job} />
      ))}
    </div>
  )
}

export default JobsList