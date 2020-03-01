import React from "react"

export const Url = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)
