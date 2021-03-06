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
  return airports.slice(0, 5).reverse()
}

const renderSuggestion = airpot => <span>{getAirportName(airpot)}</span>

export const AirportSelect = props => {
  const [suggestions, setSuggestions] = useState([])
  const [value, setValue] = useState("")

  const onChange = (event, { newValue }) => {
    setValue(newValue)
    if (!newValue) props.onChange("")
  }
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
      inputProps={{ ...props, value, onChange }}
    />
  )
}
