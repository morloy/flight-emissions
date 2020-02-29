import React, { useState, useEffect } from "react"
import { AirportSelect } from "./AirportSelect"
import { Emissions } from "./Emissions"
import { getFlightEmissions } from "./lib/flightEmissions"

const Loader = () => <div>Loading…</div>

export const EmissionForm = () => {
  const [departureId, setDepartureId] = useState("")
  const [arrivalId, setArrivalId] = useState("")
  const [emissions, setEmissions] = useState(null)

  useEffect(() => {
    if (!departureId || !arrivalId) return

    getFlightEmissions([departureId, arrivalId]).then(res => setEmissions(res))
  }, [departureId, arrivalId])

  console.log(emissions)

  return (
    <div>
      <AirportSelect onChange={setDepartureId} />
      <AirportSelect onChange={setArrivalId} />
      {departureId && arrivalId && !emissions && <Loader />}
      {emissions && <Emissions {...emissions} />}
    </div>
  )
}
