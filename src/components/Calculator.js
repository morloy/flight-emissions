import React, { useState, useEffect } from "react"
import { Emissions } from "./Emissions"
import { getFlightEmissions } from "./lib/flightEmissions"

import { EmissionForm } from "./EmissionForm"
import { Image } from "./Image"

const Loader = () => <div>Loading…</div>

export const Calculator = () => {
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
    <div className="container">
      <h1>Cost of Flight Emissions</h1>
      <div className="calculator">
        <div className="row">
          <div className="col">
            <Image src="airplane.svg" alt="Airplane" />
          </div>
          <div className="emissions col">
            {departureId && arrivalId && !emissions && <Loader />}
            {emissions && <Emissions {...emissions} />}
          </div>
        </div>
        <EmissionForm
          setDepartureId={setDepartureId}
          setArrivalId={setArrivalId}
          setViaId={setViaId}
        />
      </div>
    </div>
  )
}
