import React from "react"

export const Media = ({ image, alt, children, reverse }) => (
  <div className="media row">
    <div className="col">
      <img src={`/image/${image}`} alt={alt} />
    </div>
    <div className={`col ${reverse ? "col-reverse" : ""}`}>{children}</div>
  </div>
)
