import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Lane Four, LLC is a consultancy providing merger and acquisition,
      valuation, corporate finance, and strategic advisory services.
    </p>
    <p>
      Please contact{" "}
      <a href="mailto:bruce@lanefouradvisory.com">bruce@lanefouradvisory.com</a>{" "}
      for more information.
    </p>
  </Layout>
)

export default IndexPage
