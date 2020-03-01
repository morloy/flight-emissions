import React from "react"
import { useCountUp } from "use-count-up"
const format = n => Intl.NumberFormat().format(Math.round(n))

const Counter = config => {
  const value = useCountUp(true, config)
  return value
}

export const Value = ({ label, value, prefix, suffix }) => {
  const config = {
    start: 0,
    end: value,
    duration: 2,
    formatter: format,
  }
  return (
    <div className="value">
      <div className="label">{label}</div>
      {prefix}
      <Counter {...config} key={value} />
      {suffix}
    </div>
  )
}
