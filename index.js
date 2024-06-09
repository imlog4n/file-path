const path = require("path");

const file = {
    new: (fileName) => {
        fileName = fileName.startsWith("/") ? fileName.substring(1) : fileName;
        let newRoot = file.root.endsWith("/") || file.root == "" ? file.root : `${file.root}/`;

        return path.join(__dirname, `${newRoot}${fileName}`);
    },
    root: "",
    this: __filename
}

module.exports = file;