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
    <SEO lang="en" />
    <Introduction />
    <Calculator />
    <Conclusion />
  </Layout>
)

export default IndexPage
