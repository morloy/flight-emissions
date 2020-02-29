import React, { useState, useEffect } from "react"
import { AirportSelect } from "./AirportSelect"
import { Emissions } from "./Emissions"
import { getFlightEmissions } from "./lib/flightEmissions"

const Loader = () => <div>Loading…</div>

export const EmissionForm = () => {
  const [departureId, setDepartureId] = useState("")
  const [arrivalId, setArrivalId] = useState("")
  const [viaId, setViaId] = useState("")
  const [emissions, setEmissions] = useState(null)

  useEffect(() => {
    if (!departureId || !arrivalId) return

    const legs = viaId
      ? [departureId, viaId, arrivalId]
      : [departureId, arrivalId]
    getFlightEmissions(legs).then(res => setEmissions(res))
  }, [departureId, viaId, arrivalId])

  return (
    <div>
      <AirportSelect onChange={setDepartureId} placeholder="Departure" />
      <AirportSelect onChange={setArrivalId} placeholder="Arrival" />
      <AirportSelect onChange={setViaId} placeholder="Via" />
      {departureId && arrivalId && !emissions && <Loader />}
      {emissions && <Emissions {...emissions} />}
    </div>
  )
}
