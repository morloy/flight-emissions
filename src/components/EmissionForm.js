import React from "react"
import { AirportSelect } from "./AirportSelect"

export const EmissionForm = ({ setDepartureId, setArrivalId, setViaId }) => {
  return (
    <form>
      <div className="row">
        <div className="col">
          <AirportSelect onChange={setDepartureId} placeholder="Departure" />
        </div>
        <div className="col">
          <AirportSelect onChange={setArrivalId} placeholder="Arrival" />
        </div>
      </div>
      <div className="row">
        <div className="col-6 via">
          <AirportSelect onChange={setViaId} placeholder="Via" />
        </div>
      </div>
    </form>
  )
}
