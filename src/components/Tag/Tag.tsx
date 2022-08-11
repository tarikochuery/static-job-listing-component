import React from "react";
import './style.css'

interface TagProps {
  text: string
  handleFilterSelection?: (e: React.MouseEvent<HTMLElement>) => void
}

const Tag: React.FC<TagProps> = ({ text, handleFilterSelection }) => {
  return (
    <button className="tag" onClick={handleFilterSelection} value={text}>{text}</button>
  )
}

export default Tag