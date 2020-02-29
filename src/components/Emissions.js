import React from "react"

const format = n => Intl.NumberFormat().format(Math.round(n))

export const Emissions = ({ co2, distance, eur, usd }) => {
  if (co2 === 0)
    return (
      <p>This route is too long for a non-stop flight. Add a “Via” airport.</p>
    )
  return (
    <div>
      <p>CO2: {format(co2)} kg</p>
      <p>Distance: {format(distance)} km</p>
      <p>EUR: {format(eur)}</p>
      <p>USD: {format(usd)}</p>
    </div>
  )
}
