import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";

import SEO from "components/shared/seo";
import Hero from "components/hero";
import About from "components/about";
import Services from "components/services";
import Projects from "components/projects";
import Team from "components/our-team";
import Technologies from "components/technologies";
import Contact from "components/contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Team />
    <Technologies />
    <Contact />
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
