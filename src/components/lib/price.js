export const isEuro =
  typeof document !== "undefined" && document.location.pathname === "/eur/"
export const price = isEuro ? "€180" : "$200"
