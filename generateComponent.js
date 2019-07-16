const componentName = process.argv[2];
const directoryLocation = process.argv[3];

const fs = require("fs");

if (!/^[a-zA-Z]+$/.test(componentName)) {
  throw new Error("ERROR: Component name must only contain letters!");
}

if (!fs.existsSync(directoryLocation)) {
  throw new Error("ERROR: Invalid directory path given!");
}

const componentLocation = `${directoryLocation}/${componentName}`;

if (!fs.existsSync(componentLocation)) {
  fs.mkdirSync(componentLocation);
}

const styleClassName = componentName.split(/(?=[A-Z])/).join("-").toLowerCase();

const indexTemplate = `export { default } from "./${componentName}Container.jsx"\n`;

const containerTemplate =
`import React from 'react';
import ${componentName} from './${componentName}';

function ${componentName}Container() {
  return (
    <${componentName} />
  );
}

export default ${componentName}Container;\n`

const componentTemplate =
`import React from 'react';
import "./${componentName}.scss";

function ${componentName}() {
  return (
    <div className="${styleClassName}">
      ${componentName}
    </div>
  );
}

export default ${componentName};\n`

const styleTemplate = 
`.${styleClassName} {
  color: var(--gold);
}\n`;

fs.writeFileSync(`${componentLocation}/index.js`, indexTemplate);
fs.writeFileSync(`${componentLocation}/${componentName}Container.jsx`, containerTemplate);
fs.writeFileSync(`${componentLocation}/${componentName}.jsx`, componentTemplate);
fs.writeFileSync(`${componentLocation}/${componentName}.scss`, styleTemplate);
