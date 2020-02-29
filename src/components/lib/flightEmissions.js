const apiUrl = "/api/flight/activity"

const EurPerTon = 0.18
const UsdPerTon = 0.2

const computeCost = ({ co2, distance }) => ({
  co2,
  distance,
  eur: co2 * EurPerTon,
  usd: co2 * UsdPerTon,
})

export const getFlightEmissions = async legs => {
  const payload = {
    returnFlight: true,
    flightCount: 1,
    passengerCount: 1,
    legs: legs.map(id => ({ airport: { id } })),
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(payload),
  })
  const emissions = await res.json()
  return computeCost(emissions)
}
