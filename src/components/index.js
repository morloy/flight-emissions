import React from "react"

import { Layout } from "./Layout"
import { SEO } from "./SEO"
import { Introduction } from "./Introduction"
import { Calculator } from "./Calculator"
import { Conclusion } from "./Conclusion"

export const IndexPage = () => (
  <Layout>
    <SEO lang="en" />
    <Introduction />
    <Calculator />
    <Conclusion />
  </Layout>
)
