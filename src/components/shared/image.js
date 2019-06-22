import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const propTypes = {
  src: PropTypes.object.isRequired,
};

const Image = ({ image }) => {
  return <Img fluid={image.childImageSharp.fluid} />;
};

Image.propTypes = propTypes;

export default Image;
