const { exec } = require("child_process")
const fs = require("fs")

const componentName = process.argv[2]
const nameSplitted = componentName.split("-")
for (let i = 0; i < nameSplitted.length; i++) {
  nameSplitted[i] = nameSplitted[i][0].toUpperCase() + nameSplitted[i].substr(1)
}
const capitalCasedName = nameSplitted.join("")

const command = `mkdir src\\components\\${componentName} && touch src\\components\\${componentName}\\index.js && touch src\\components\\${componentName}\\${componentName}.module.scss`

exec(command, () => {
  fs.writeFile(
    `./src/components/${componentName}/index.js`,
    `import React from "react";
import PropTypes from "prop-types";
import SEO from 'components/shared/seo';
import styles from "./${componentName}.module.scss";

const propTypes = {};
const defaultProps = {};

function ${capitalCasedName}(props){
  return (
      <section>
        ${componentName} component works
      </section>
      );
}

${capitalCasedName}.propTypes = propTypes;
${capitalCasedName}.defaultProps = defaultProps;

export default ${capitalCasedName};
`,
    err => {
      if (err) console.log(err)
      console.log("Created component at src/components/ named ", componentName)
    }
  )
})
