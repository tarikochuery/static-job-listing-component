import React, { useEffect, useState } from "react";
import './style.css'
import jobsData from '../../db/data.json'
import JobCard, { JobData } from "../JobCard/JobCard";
import FilterSelection from "../FilterSelection/FilterSelection";

const JobsList = () => {
  const [filtersList, setFiltersList] = useState<string[]>([])
  const [filteredJobs, setFilteredJobs] = useState<JobData[]>(jobsData)

  const filterJobs = (filters: string[]) => {
    if (filters.length === 0) {
      setFilteredJobs(jobsData)
      return
    }

    let newFilteredJobs: JobData[] = []

    jobsData.forEach(job => {
      const { languages, tools, level, role } = job
      const arrayToBeFiltered = [...languages, ...tools, level, role]

      const filteredArray = filtersList.filter(filter => arrayToBeFiltered.indexOf(filter) >= 0)

      if (filteredArray.length === filtersList.length) newFilteredJobs = [...newFilteredJobs, job]
    })

    setFilteredJobs(newFilteredJobs)
    
  }

  const addFilter = (filter: string) => {
    if (filtersList.indexOf(filter) >= 0) return

    setFiltersList(() => [...filtersList, filter])
  }

  const deleteFilter = (filter: string) => {
    const filterIdx = filtersList.indexOf(filter)
    if (filterIdx < 0) return

    const newFiltersList = filtersList.filter(filterInState => filterInState !== filter)
    setFiltersList(() => newFiltersList)
  }

  const handleAdd = (e:React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLButtonElement
    const filter:string = element.value

    addFilter(filter)
  }

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement
    const filterTag = element.parentElement?.previousElementSibling as HTMLButtonElement
    const filter: string = filterTag.value

    deleteFilter(filter)
  }

  useEffect(() => {
    filterJobs(filtersList)
  }, [filtersList])

  return (
    <div className="job-list-container">
      <FilterSelection filtersSelected={filtersList} handleDeleteFilter={handleDelete}/>
      <div className="JobsList">
        {filteredJobs.map((job, idx) => (
          <JobCard key={idx} jobData={job} handleFilterSelection={handleAdd}/>
        ))}
      </div>
    </div>
  )
}

export default JobsList