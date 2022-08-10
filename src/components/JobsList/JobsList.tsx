import React from "react";
import './style.css'
import jobData from '../../db/data.json'
import JobCard from "../JobCard/JobCard";

const JobsList = () => {
  const jobsList = jobData
  return (
    <div className="JobsList">
      <JobCard jobData={jobsList[0]} />
    </div>
  )
}

export default JobsList