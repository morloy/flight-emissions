import React from "react"
import { Value } from "./Value"

const format = n => Intl.NumberFormat().format(Math.round(n))

const Loader = () => <p>Loading…</p>
const Explanation = () => (
  <ol>
    <li>Enter “Departure” airport</li>
    <li>Enter “Arrival” airport</li>
    <li>
      Learn how much you would have to pay for a roundtrip at a carbon price of
      €180
    </li>
  </ol>
)

export const Emissions = ({ emissions, isLoading }) => {
  if (isLoading) return <Loader />
  if (!emissions) return <Explanation />

  const { co2, distance, eur, usd } = emissions
  if (co2 === 0)
    return (
      <p>There is no non-stop flight for your route. Add a “Via” airport.</p>
    )
  return (
    <>
      <Value label="This roundtrip costs you">€{format(eur)}</Value>
      <Value label="Distance">{format(distance)} km</Value>
      <Value label="Emissions">
        {format(co2)} kg CO<sub>2eq</sub>
      </Value>
    </>
  )
}
