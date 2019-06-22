import React from "react";
import Layout from "../layout";
import Image from "components/shared/image";
import SEO from "components/shared/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image image={data.astronaut} />
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 2240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
