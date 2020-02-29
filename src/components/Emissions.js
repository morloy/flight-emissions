import React from "react"

export const Emissions = ({ co2, distance, eur, usd }) => (
  <div>
    <p>CO2: {co2}</p>
    <p>Distance: {distance}</p>
    <p>EUR: {eur}</p>
    <p>USD: {usd}</p>
  </div>
)
