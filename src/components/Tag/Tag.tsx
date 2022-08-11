import React from "react";
import './style.css'

interface TagProps {
  text: string
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <strong className="tag">{text}</strong>
  )
}

export default Tag