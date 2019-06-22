import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const defaultProps = {
  type: "png",
};

const propTypes = {
  src: PropTypes.string.isRequired,
};

const Image = ({ src, type }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.image.childImageSharp.fluid} />;
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
