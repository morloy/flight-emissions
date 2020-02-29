import React from "react"

export const Value = ({ label, children }) => (
  <div className="value">
    <div className="label">{label}</div>
    {children}
  </div>
)
