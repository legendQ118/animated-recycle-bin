
const yamlParser = require('js-yaml')
const fs = require("fs");
const path = require("path");
const config_path = path.join(__dirname, '../application.yaml')

// read and parse the application configurations.
exports.readConfiguration = () => {
    return yamlParser.load(fs.readFileSync(config_path, 'utf-8'), undefined)
}
