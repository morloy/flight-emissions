import React from "react"
import { Value } from "./Value"

const format = n => Intl.NumberFormat().format(Math.round(n))

export const Emissions = ({ co2, distance, eur, usd }) => {
  if (co2 === 0)
    return (
      <p>This route is too long for a non-stop flight. Add a “Via” airport.</p>
    )
  return (
    <div>
      <Value label="This flight costs you">€{format(eur)}</Value>
      <Value label="Distance">{format(distance)} km</Value>
      <Value label="Emissions">
        {format(co2)} kg CO<sub>2eq</sub>
      </Value>
    </div>
  )
}
