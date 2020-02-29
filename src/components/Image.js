import React from "react"

export const Image = ({ src, ...props }) => (
  <div className="image">
    <img src={`/image/${src}`} {...props} />
  </div>
)
