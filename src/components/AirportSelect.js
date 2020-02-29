import React, { useState } from "react"
import Autosuggest from "react-autosuggest"

const apiUrl = "/api/airport"

const getAirportName = ({ name, iataCode, countryCode }) =>
  `${iataCode} ${name} [${countryCode}]`

const fetchAirports = async query => {
  const res = await fetch(
    `${apiUrl}?locale=en&query=${encodeURIComponent(query)}`
  )
  const airports = await res.json()
  return airports
}

const renderSuggestion = airpot => <span>{getAirportName(airpot)}</span>

export const AirportSelect = props => {
  const [suggestions, setSuggestions] = useState([])
  const [value, setValue] = useState("")

  const onChange = (event, { newValue, ...props }) => setValue(newValue)
  const clearSuggestions = () => setSuggestions([])
  const getSuggestions = async ({ value }) =>
    setSuggestions(await fetchAirports(value))
  const selectSuggestion = (event, { suggestion }) =>
    props.onChange(suggestion.id)

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={getSuggestions}
      onSuggestionsClearRequested={clearSuggestions}
      getSuggestionValue={getAirportName}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={selectSuggestion}
      inputProps={{ value, onChange }}
    />
  )
}
