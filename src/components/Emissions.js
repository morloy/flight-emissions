import React from "react"
import { Value } from "./Value"

const Loader = () => <p>Loading…</p>
const Explanation = () => (
  <ol>
    <li>Enter “Departure” airport</li>
    <li>Enter “Arrival” airport</li>
    <li>
      Learn how much you would have to pay for a roundtrip at a carbon price of
      $200
    </li>
  </ol>
)

export const Emissions = ({ emissions, isLoading }) => {
  if (isLoading) return <Loader />
  if (!emissions) return <Explanation />

  const isEuro = document.location.pathname === "/eur/"

  const { co2, distance, eur, usd } = emissions
  if (co2 === 0)
    return (
      <p>There is no non-stop flight for your route. Add a “Via” airport.</p>
    )

  const price = isEuro
    ? { value: eur, prefix: "€" }
    : { value: usd, prefix: "$" }
  return (
    <>
      <Value label="This roundtrip costs you" {...price} />
      <Value label="Distance" value={distance} suffix=" km" />
      <Value
        label="Emissions"
        value={co2}
        suffix={
          <>
            {" "}
            kg CO<sub>2eq</sub>
          </>
        }
      />
    </>
  )
}
