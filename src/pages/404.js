import React from "react"

import Layout from "../layout"
import SEO from "components/shared/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Woops!</h1>
    <p>You just hit a route that doesn&#39;t exist... #sadlife.</p>
  </Layout>
)

export default NotFoundPage
