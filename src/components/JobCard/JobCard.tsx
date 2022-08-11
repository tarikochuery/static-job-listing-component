import React from "react";
import Tag from "../Tag/Tag";
import './style.css'

interface JobData {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[] | []
}

interface JobCardProps {
  jobData: JobData
}

const JobCard: React.FC<JobCardProps> = ({ jobData }) => {
  // const cardClassName = jobData.new ? `JobCard new` : `JobCard`
  
  return (
    <div className='JobCard'>
      <div className="job-info">
        <div className="image-container">
          <img src={jobData.logo} alt={`${jobData.company} logo`} />
        </div>
        <div className="job-information">
          <div className="card-header">
            <h2>{jobData.company}</h2>
          </div>
          <div className="job-position">
            <h1>{jobData.position}</h1>
          </div>
          <div className="job-footer">
            <p>{jobData.postedAt}</p>
            <div className="divider">&middot;</div>
            <p>{jobData.contract}</p>
            <div className="divider">&middot;</div>
            <p>{jobData.location}</p>
          </div>
        </div>
      </div>
      <div className="job-tags-container">
        <button className="search-button">
          <Tag text={jobData.role}/>
        </button>
        <button className="search-button">
          <Tag text={jobData.level}/>
        </button>
        {jobData.languages.map((language, idx) => (
          <button className="search-button">
            <Tag key={idx} text={language}/>
          </button>
        ))}
        {jobData.tools.map((tool, idx) => (
          <button className="search-button">
            <Tag key={idx} text={tool}/>
          </button>
        ))}
      </div>
    </div>
  )
}

export default JobCard