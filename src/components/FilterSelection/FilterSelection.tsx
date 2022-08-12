import React from "react";
import Tag from "../Tag/Tag";
import './style.css'

interface FilterSelectionProps {
  filtersSelected: string[],
  handleDeleteFilter: (e: React.MouseEvent<HTMLElement>) => void,
  handleClear: () => void
}

const FilterSelection: React.FC<FilterSelectionProps> = ({ filtersSelected, handleDeleteFilter, handleClear }) => {
  const containerClassName = filtersSelected?.length === 0 ? 'no-filter' : 'FilterSelection'
    return (
      <div className={containerClassName}>
        <div className="selected-filter-container">
          {filtersSelected.map((filter, idx) => (
            <div key={idx} className="filter-container">
              <Tag text={filter} />
              <button className="delete-icon-container" onClick={handleDeleteFilter}>
                <img src="./images/icon-remove.svg" alt="delete-icon" />
              </button>
            </div>
          ))}
        </div>
        <button className="clear" onClick={handleClear}>Clear</button>
      </div>
    )
  
}

export default FilterSelection