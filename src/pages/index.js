import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { EmissionForm } from "../components/EmissionForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <EmissionForm />
  </Layout>
)

export default IndexPage
