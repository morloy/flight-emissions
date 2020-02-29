import React from "react"

export const Emissions = ({ co2, distance, eur, usd }) => {
  if (co2 === 0)
    return (
      <p>This route is too long for a non-stop flight. Add a “Via” airport.</p>
    )
  return (
    <div>
      <p>CO2: {co2}</p>
      <p>Distance: {distance}</p>
      <p>EUR: {eur}</p>
      <p>USD: {usd}</p>
    </div>
  )
}
