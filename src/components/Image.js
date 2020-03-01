import React from "react"

export const Image = ({ src, alt, ...props }) => (
  <div className="image">
    <img src={`/image/${src}`} alt={alt} {...props} />
  </div>
)
