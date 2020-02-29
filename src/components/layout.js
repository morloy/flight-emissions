import React from "react"

import "./style.scss"
require("typeface-fredoka-one")
require("typeface-raleway")

export const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <footer>
      <a href="">Contact</a> | <a href="">GitHub</a>
    </footer>
  </>
)
