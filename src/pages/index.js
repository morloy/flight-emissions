import React from "react"

import {
  Layout,
  SEO,
  Introduction,
  Calculator,
  Conclusion,
} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Introduction />
    <Calculator />
    <Conclusion />
  </Layout>
)

export default IndexPage
