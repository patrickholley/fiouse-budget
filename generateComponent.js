const fs = require("fs");
const componentName = process.argv[2];
const directoryLocation = process.argv[3];

console.log(`Creating component ${componentName} at directory ${directoryLocation} . . .`);

if (!/^[a-zA-Z]+$/.test(componentName)) {
  throw new Error("ERROR: Component name must only contain letters!");
} else console.log("Valid component name!");

if (!fs.existsSync(directoryLocation)) {
  throw new Error("ERROR: Invalid directory path given!");
} else console.log("Valid directory location!");

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

function writeFile(fileName, fileTemplate) {
  try {
    console.log(`Writing ${fileName} . . .`);
    fs.writeFileSync(fileName, fileTemplate);
    console.log("Done!");
  } catch(error) {
    console.error(`Failed to write ${fileName}!`);
    throw new Error(error);
  }
}

writeFile(`${componentLocation}/index.js`, indexTemplate);
writeFile(`${componentLocation}/${componentName}Container.jsx`, containerTemplate);
writeFile(`${componentLocation}/${componentName}.jsx`, componentTemplate);
writeFile(`${componentLocation}/${componentName}.scss`, styleTemplate);
