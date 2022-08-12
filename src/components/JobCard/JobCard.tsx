import React from "react";
import Tag from "../Tag/Tag";
import './style.css'

export interface JobData {
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
  jobData: JobData,
  handleFilterSelection: (e: React.MouseEvent<HTMLElement>) => void
}

const JobCard: React.FC<JobCardProps> = ({ jobData, handleFilterSelection }) => {
  
  return (
    <div className='JobCard'>
      <div className="job-info">
        <div className="image-container">
          <img src={jobData.logo} alt={`${jobData.company} logo`} />
        </div>
        <div className="job-information">
          <div className="card-header">
            <h2>{jobData.company}</h2>
            {jobData.new && <strong className="new">NEW!</strong>}
            {jobData.featured && <strong className="featured">FEATURED</strong>}
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
          <Tag marginBottom="20px" text={jobData.role} handleFilterSelection={handleFilterSelection}/>
          <Tag marginBottom="20px" text={jobData.level} handleFilterSelection={handleFilterSelection}/>
        {jobData.languages.map((language, idx) => (
            <Tag marginBottom="20px" key={idx} text={language} handleFilterSelection={handleFilterSelection}/>
        ))}
        {jobData.tools.map((tool, idx) => (
            <Tag marginBottom="20px" key={idx} text={tool} handleFilterSelection={handleFilterSelection}/>
        ))}
      </div>
    </div>
  )
}

export default JobCard