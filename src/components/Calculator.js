import React, { useState, useEffect } from "react"
import { Emissions } from "./Emissions"
import { getFlightEmissions } from "./lib/flightEmissions"

import { EmissionForm } from "./EmissionForm"
import { Image } from "./Image"

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

  const isLoading = departureId && arrivalId && !emissions

  return (
    <section className="calculator">
      <h2>The Cost of Flying</h2>
      <div>
        <div className="row">
          <div className="col">
            <Image src="journey.svg" alt="Airplane" />
          </div>
          <div className="emissions col">
            <Emissions emissions={emissions} isLoading={isLoading} />
          </div>
        </div>
        <EmissionForm
          setDepartureId={setDepartureId}
          setArrivalId={setArrivalId}
          setViaId={setViaId}
        />
      </div>
    </section>
  )
}
