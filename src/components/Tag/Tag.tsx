import React from "react";
import './style.css'

interface TagProps {
  text: string
  handleFilterSelection?: (e: React.MouseEvent<HTMLElement>) => void,
  marginBottom?: string
}

const Tag: React.FC<TagProps> = ({ text, handleFilterSelection, marginBottom }) => {
  return (
    <button style={{marginBottom: marginBottom}} className="tag" onClick={handleFilterSelection} value={text}>{text}</button>
  )
}

export default Tag